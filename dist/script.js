// 문제 : 각기 다른 3가지 방법으로 객체를 만들어주세요
console.clear();

var 사람1 = {
    이름 : "홍길동",
    나이 : 22
};

console.log(사람1.이름); 

var 캐릭터1 = {};
캐릭터1.공격무기 = "활";

console.log(캐릭터1.공격무기); // 

var 유재석 = {};
유재석["성격"] = "좋음";

console.log(유재석.성격); // []