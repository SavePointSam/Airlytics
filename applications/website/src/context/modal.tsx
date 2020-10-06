import React from 'react';

import Deferred from '../utils/Deferred';

/** Context ================================================================= */

interface ModalContextValue {
  appoint: <ReturnType>(modal: React.ReactElement<{}>) => Deferred<ReturnType>;
  dismiss: () => void;
  modal?: React.ReactNode;
}

const defaultMethodImplementation = () => {
  throw new Error('Modal context has not been implemented.');
};

const defaultValue: ModalContextValue = {
  appoint: defaultMethodImplementation,
  dismiss: defaultMethodImplementation,
};

const ModalContext = React.createContext<ModalContextValue>(defaultValue);

export const useModal = () => React.useContext(ModalContext);

/** Manager ================================================================= */

interface Props {
  children: React.ReactNode;
}

export const ModalManager = ({ children }: Props) => {
  const [modal, setModal] = React.useState<
    React.ReactElement<unknown> | undefined
  >(undefined);

  return (
    <ModalContext.Provider
      value={{
        appoint: function <ReturnType>(modal: React.ReactElement<{}>) {
          const deferred = new Deferred<ReturnType>();

          setModal({
            ...modal,
            props: {
              ...modal.props,
              // provide modal with promise hooks
              resultHook: deferred,
            },
          });

          return deferred;
        },
        dismiss: () => setModal(undefined),
        modal,
      }}
    >
      {modal}
      {children}
    </ModalContext.Provider>
  );
};
