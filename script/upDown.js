var computerNum = Math.floor(Math.random() * 50) +1;

let answer;
let count = 1;

while (answer != computerNum) {
    answer = Number(prompt("1부터 50까지 숫자 중 컴퓨터가 생각한 숫자는 무엇일까요? "));

    if(answer == computerNum) {
        alert("축하합니다! "+ count + "번 만에 맞추셨습니다.");
    } else if (answer > computerNum) {
        alert("Down!");
        count++

    } else {
        alert("UP!");
        count++
    }
}
