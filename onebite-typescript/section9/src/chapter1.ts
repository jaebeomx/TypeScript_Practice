/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;
let a: StringNumberSwitch<number>;
let b: StringNumberSwitch<string>;

// 타입 변수에 union type를 할당하면 한번은 number, 한번은 string으로 분리되어 들어감
let c: StringNumberSwitch<number | string>;

let d: StringNumberSwitch<boolean | number | string>;

// 타입변수 T가 U타입의 서브타입이라면 never, 아니라면 T
type Exclude<T, U> = T extends U ? never : T;
type A = Exclude<number | string | boolean, string>;

// 다른 사례
type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;
