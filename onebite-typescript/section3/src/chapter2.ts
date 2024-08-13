/**
 * Unknown 타입 -> 타입 계층도의 최상단에 위치. 전체집합
 */
function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;
  //   let num: number = unknownVar; 다운캐스팅이라 오류 발생
}

/**
 * Never 타입 -> 모든 타입의 서브타입
 */
function neverExam() {
  function neverFunc(): never {
    while (true) {} // 공집합
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();
  // never타입은 모든 타입의 서브타입이기 때문에 다 넣을 수 있음.

  //   let never1: never = 10;
  //   let never2: never = "string";
  //   let never3: never = true;

  // 그 어떤값도 never 타입으로 저장할 수 없다.
}

/**
 * Void 타입. Void 타입은 undefined 타입의 super 타입이다!
 */
function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    return undefined;
  }
  let voidVar: void = undefined;
}

/**
 * any 타입 -> 자기한테 오는 다운캐스팅도 되고 자기가 다운캐스팅 하는것도 된다
 */
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  undefinedVar = anyVar;
  //   neverVar = anyVar;
}
