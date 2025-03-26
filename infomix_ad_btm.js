document.addEventListener("DOMContentLoaded", function () {
	let targetElement = document.getElementById("infomix-ad-btm"); // 원하는 위치 선택

    if (targetElement) {
        let customHTML = `
        `;

        // 특정 위치에 추가
        // targetElement.insertAdjacentHTML("afterbegin", customHTML); // 맨 위에 추가
        targetElement.insertAdjacentHTML("beforeend", customHTML); // 맨 아래에 추가
        // targetElement.insertAdjacentHTML("beforebegin", customHTML); // 요소 이전에 추가
        // targetElement.insertAdjacentHTML("afterend", customHTML); // 요소 이후에 추가
    } else {
        console.log("❌ 광고를 삽입할 위치를 찾을 수 없음.");
    }
});
