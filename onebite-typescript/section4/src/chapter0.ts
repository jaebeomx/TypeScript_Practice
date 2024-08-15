/**
 * 함수 타입 정의
 */

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기
function func(a: number, b: number): number {
  return a + b;
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */
const add = (a: number, b: number): number => a + b;

/**
 * 함수의 매개변수
 */
function introduce(name = "이정환", tall?: number) {
  console.log(`name: ${name}`);
  console.log(`tall: ${tall! + 10}`);
}
introduce("이정환", 175);
introduce("이정환");

function getSum(...rest: number[]) {
  let sum = rest.reduce((sum, item) => sum + item, 0);
  console.log(sum);
}

getSum(1, 2, 3);
