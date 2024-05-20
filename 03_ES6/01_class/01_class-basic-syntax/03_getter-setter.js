class Product {

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    /**
     * getter, setter 내부에서는 _name, _price로 실제 값에 접근한다.
     * 그냥 name, price를 사용하게 되면 해당 코드는 getter, setter 메소드를 호출하는 의미가 된다.
     */

    // getter
    get name() {
        console.log('get name 동작');
        return this._name;
    }
    
    get price() {
        console.log('get price 동작');
        return this._price;
    }

    // setter 함수
    set name(value) {
        console.log('set name 동작');
        this._name = value;
    } 

    set price(value) {
        console.log('set price 동작');
        if (value < 0) {
            console.log("가격은 음수일 수 없습니다.");
            this.price = 0;
            return;
        }
        this._price = value;
    }
}

let phoen = new Product('전화기', 23000);
console.log(phoen.name, phoen.price);

let computer = new Product('컴퓨터', -150000);
console.log(computer.name, computer.price);