function calGrade() {
    var subjects = ["HTML", "CSS", "JavaScript"];
    var total = 0;
    const len = 3;

    for (let i=0; i<len; i++) {
        let score = prompt(subjects[i]+" 점수를 입력하세요")
        total += Number(score)
    }

    let avg = total/len;
    if (avg>=60) {
        alert(`
            ====== 성적 결과표 =====
            * 총점: ${total} 점,
            * 평균: ${avg.toFixed(2)} 점
            ---------------------
            * 결과: 합격입니다!
            `)
    } else {
        alert(`
            ====== 성적 결과표 =====
            * 총점: ${total} 점,
            * 평균: ${avg.toFixed(2)} 점
            ---------------------
            * 결과: 불합격입니다!
            `)
    }
}