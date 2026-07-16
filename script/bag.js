function showMyBag() {
    var myBag = [{name: '책', count:1}, {name: '안경', count: 1}, {name: '연필', count: 10}];

    let result = " 내 가방 속 물품 목록 \n"

    result += "------------------------\n"

    for (let i = 0; i < myBag.length; i++) {
        result += `- ${myBag[i].name} : ${myBag[i].count}개\n`
    }

    result += "------------------------\n"
    result += `총 물품 종류: ${myBag.length}가지`;

    alert(result);

}