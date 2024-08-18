/**
 * 접근 제어자
 * access modifier
 * 특정 필드나 메소드에 접근할 수 있는 범위 설정
 */

class Employee {
  //필드
  //   private name: string;
  //   protected age: number;
  //   public position: string;

  // 생성자
  constructor(private name: string, protected age: number, public position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  work() {
    console.log(`${this.name} 일함`);
  }
}

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(name: string, age: number, position: string, officeNumber: number) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }

  func() {
    this.age;
    // this.name;
  }
}

const employee = new Employee("이정환", 27, "developer");

// employee.name = "홍길동";
// employee.age = 30;
employee.position = "디자이너";

console.log(employee);
