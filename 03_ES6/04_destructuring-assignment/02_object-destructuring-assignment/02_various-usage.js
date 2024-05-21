
let toy = {
    productName: "티니핑",
    color: "노랑",
    price: 25000
};

// 객체에 존재하지 않는 프로퍼티는 기본 값을 설정해서 사용할 수 있다.
// 또한 콜론과 할당을 동시에 사용할 수 있다.
let {productName: pn = "인형", subName = "눈꽃핑", color, price, eventGift: gift = "요술봉"} = toy;

console.log(pn);
console.log(subName);
console.log(color);
console.log(price);
console.log(gift);

let { productName: productName2, price: price2 } = toy;

console.log(`${productName2}이(가) 무려 ${price}원!!!!!`);

// rest parameter ...로 나머지 요소를 한번에 가져올 수 있다.
let {productName: productName3, ...rest } = toy;

console.log(productName3);
console.log(rest);
console.log(rest.color);
console.log(rest.price);

let productName4, color4, price4;

// { productName: productName4, color: color4, price: price4} = toy;   // 코드 블럭으로 인식해 오류 발생
({ productName: productName4, color: color4, price: price4} = toy);   // 소괄호로 감싸면 오류 발생하지 않음

console.log(productName4, color4, price4);