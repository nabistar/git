"use strict";

// 문제1
// 아래의 switch문을 if문으로 재작성 하시오.
/*
const 수학 = "B";
switch (수학) {
    case 'A':
    case 'B':
    case 'C':
        console.log("이 과목을 Pass 했습니다.");
        break;
    default:
        console.log("이 과목을 Pass하지 못했습니다.");
        break;
}
*/

console.group("문제1");
const 수학 = "B";
if (수학 == "A" || 수학 == "B" || 수학 == "C") {
    console.log("이 과목을 Pass 했습니다.");
} else {
    console.log("이 과목을 Pass하지 못했습니다.");
}
console.groupEnd();


// 문제2
// 한 개의 2진수는 0과 1 두 개의 정보를 표시할 수 있고 두 개의 이진수는 00,01,10,11과 같이 총 네 개의 정보를 표시할 수 있다.
// 이처럼 이진수가 하나 늘어날 때 마다 2배씩 표현할 수 있는 정보의 수가 늘어날 때 10개의 이진수는 총 몇개의 정보를
// 표현할 수 있는지를 while문으로 구현하시오.

console.group("문제2");
let x = 1;
let y = 1;

while (x<=10) {
    y = y*2;
    console.log("이진수 %d개는 %d개의 정보를 표시가능", x, y);
    x++;
}
console.groupEnd();


// 문제3
// 위 2번 문제를 for문으로 다시 표현하시오.

console.group("문제3");
let y = 1;

for (x = 1; x<=10; x++) {
    y = y*2;
    console.log("이진수 %d개는 %d개의 정보를 표시가능", x, y);
}
console.groupEnd();