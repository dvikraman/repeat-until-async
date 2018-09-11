// To declare module for repeat-until-async
declare module 'repeat-until-async' {
  type RepeatPredicateResult = any;
  type RepeatPredicate = () => RepeatPredicateResult;
  type RepeatUntil = (fn: RepeatPredicate, timeout?: number, interval?: number) => Promise<RepeatPredicateResult>;

  const repeatUntil: RepeatUntil;

  export = repeatUntil;
}
