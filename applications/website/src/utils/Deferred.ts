/**
 * inside-out Promise based on https://stackoverflow.com/a/34637436/3486799
 */
export default class Deferred<ResolveType> {
  resolve: (value?: ResolveType | PromiseLike<ResolveType>) => void = () => {};
  reject: (reason?: any) => void = () => {};
  then: <TResult1 = ResolveType, TResult2 = never>(
    onfulfilled?:
      | ((value: ResolveType) => TResult1 | PromiseLike<TResult1>)
      | undefined
      | null,
    onrejected?:
      | ((reason: any) => TResult2 | PromiseLike<TResult2>)
      | undefined
      | null,
  ) => Promise<TResult1 | TResult2>;

  constructor() {
    const promise = new Promise<ResolveType>((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });

    // await support
    // @ts-ignore: typescript is upset, but it's too complex for me to care
    this.then = promise.then.bind(promise);
  }
}
