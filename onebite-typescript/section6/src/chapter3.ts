/**
 * 인터페이스와 클래스
 */

// 인터페이스 에서 정의하는 필드는 무조건 public
interface CharactedInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character implements CharactedInterface {
  //   name: string;
  //   moveSpeed: number;

  constructor(public name: string, public moveSpeed: number) {
    this.name = name;
    this.moveSpeed = moveSpeed;
  }

  move(): void {
    console.log("move");
  }
}
