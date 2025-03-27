document.addEventListener("DOMContentLoaded", function () {
	let targetElement = document.getElementById("inflearn-ad"); // 원하는 위치 선택

    if (targetElement) {
        let customHTML = `
			<style>
				.container {
					font-family: 'Arial', sans-serif;
					background-color: #f9f9f9;
					margin: 20px;
					line-height: 1.6;
					max-width: 700px;
					margin: auto;
					background: white;
					padding: 20px;
					border-radius: 10px;
					box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
				}
			
				.container .header {
					text-align: center;
					font-size: 20px;
					font-weight: bold;
					color: #333;
					padding-bottom: 10px;
					border-bottom: 2px solid #ddd;
					margin-bottom: 20px;
				}
			
				.container .intro {
					background: #f4f4f4;
					padding: 15px;
					border-radius: 5px;
					font-size: 16px;
					color: #555;
					margin-bottom: 20px;
				}
			
				.container .section {
					margin-bottom: 20px;
					padding: 15px;
					border-left: 5px solid #0073e6;
					background: #eef4ff;
					border-radius: 5px;
				}
			
				.container .section a {
					display: inline-block;
					margin-top: 10px;
					font-size: 16px;
					text-decoration: none;
					color: #0073e6;
					font-weight: bold;
				}
			
				.container .section a:hover {
					text-decoration: underline;
				}
			</style>
			
			<div class="container">
			    💡 최신 기술을 배우고 수익을 창출하세요! 💡<br><br>

          🚀 미래를 선도하는 프로그래머를 위한 필수 강의! 🚀<br><br>
          
          📢 비즈니스 혁신과 자동매매의 핵심 기술을 배우고 싶은 분들을 위한 강의 모음!<br><br>
          
          <a href='https://inf.run/NTMnV' target='_blank'>🎯 프로그래머를 위한 강화학습 (저자 직강)</a><br>
          💡 비즈니스 혁신의 핵심 기술, 강화학습!<br>
          가장 쉽고 상세한 강의로 강화학습을 실무에 적용할 수 있도록 도와드립니다.<br><br>
          
          <a href='https://inf.run/2wTb' target='_blank'>📈 비트코인 선물거래 자동매매 시스템 (저자 직강)</a><br>
          📉 하락장에서도 수익을 거둘 수 있는 자동매매 기법!<br>
          비트코인 선물거래의 핵심 원리와 실전 매매 전략을 배우세요.<br><br>
          
          <a href='https://inf.run/gkkL' target='_blank'>🤖 비트코인 알고리즘 트레이딩 봇 개발</a><br>
          💰 코딩으로 나만의 자동매매 시스템을 구축하세요!<br>
          프로그래밍을 활용해 수익 모델을 직접 개발하는 방법을 배울 수 있습니다.<br><br>
          
          🔥 지금 바로 시작하세요! 실전에서 활용 가능한 강의가 기다리고 있습니다. 🔥<br><br>
          
          👉 선착순 모집 중! 기회를 놓치지 마세요. 🚀<br>
			
			</div>
        `;

        // 특정 위치에 추가
        // targetElement.insertAdjacentHTML("afterbegin", customHTML); // 맨 위에 추가
        targetElement.insertAdjacentHTML("beforeend", customHTML); // 맨 아래에 추가
        // targetElement.insertAdjacentHTML("beforebegin", customHTML); // 요소 이전에 추가
        // targetElement.insertAdjacentHTML("afterend", customHTML); // 요소 이후에 추가
		        // 요소에 따라 삽입 위치 결정
        //if (targetElement.id === "article-view") { //PC
        //    targetElement.insertAdjacentHTML("beforeend", customHTML); // 내부 맨 아래 삽입
        //} else if (targetElement.id === "entry-view") { //모바일
        //    targetElement.insertAdjacentHTML("afterbegin", customHTML); // 요소 바로 앞에 삽입
        //}
    } else {
        console.log("❌ 광고를 삽입할 위치를 찾을 수 없음.");
    }
});
