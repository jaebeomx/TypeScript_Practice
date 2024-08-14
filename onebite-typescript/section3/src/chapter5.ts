/**
 * 타입 추론
 *
 */

// TS가 타입을 추론하는 기준은 변수의 초기값
let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "이정환",
  profile: {
    nickname: "winterlood",
  },
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

// 함수의 반환값 타입을 추론할 때는 초기화 값이 아닌 반환값을 기준으로 추론
function func(message = "hello") {
  return "hello";
}

let d; // 암묵적 any 타입
d = 10;
d.toFixed();
d = "hello";
d.toUpperCase();
// d.toFixed();

const num = 10;
const str = "hello";

let arr = [1, "string"];
