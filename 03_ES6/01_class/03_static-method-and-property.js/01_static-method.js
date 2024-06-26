class Student {
    constructor(name, height) {
        this.name = name;
        this.height = height;
    }

    // 클래스 선언부 앞에 위치하고 옆에 static이란 키워드를 붙인다.
    static compare(studentA, studentB) {
        return studentA.height - studentB.height;
    }

}

let students = [

    new Student('유관순', 165.5),
    new Student('홍길동', 180),
    new Student('선덕여왕', 159.5)
];

students.sort(Student.compare);
console.log(students);

Student.staticMethod = function() {
    console.log('staticMethod는 메서드를 프로퍼티 형태로 직접 할당하는 것과 동일하다.');
}

Student.staticMethod();

class User {

    constructor(id, registDate) {
        this.id = id;
        this.registDate = registDate;
    }

    static registUser(id) {
        return new this(id, new Date());
    }
}

let user01 = User.registUser('user01');
console.log(user01);