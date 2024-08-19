/**
 * 제네릭 클래스
 */

// 생성자에 접근제어자를 달면 필드를 생략할 수 있음.
// + 접근제어자가 달려있으면 초기화까지 자동으로 해준다.
class List<T> {
  constructor(private list: T[]) {}

  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const numberList = new List([1, 2, 3]);
numberList.pop();
numberList.push(4);
numberList.print();

const stringList = new List(["1", "2"]);
stringList.push("3");

// 제네릭 클래스는 제네릭 인터페이스나 제네릭 타입 변수와는 달리
// 클래스의 생성자를 호출할 때 인수로 전달하는 값을 기준으로 타입 변수의 타입을 추론
// 따라서 반드시 타입을 제네릭 형식으로 명시해주지 않아도 된다.
