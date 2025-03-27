document.addEventListener("DOMContentLoaded", function () {
	let targetElement = document.getElementById("linkprice-ad"); // 원하는 위치 선택

    if (targetElement) {
        let customHTML = `
			<style>
				.ad-container {
					max-width: 700px;
					margin: 20px auto;
					background: white;
					padding: 20px;
					border-radius: 10px;
					box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
					font-family: 'Arial', sans-serif;
					line-height: 1.6;
				}
			
				.ad-container * {
					box-sizing: border-box;
				}
			
				.ad-container .header {
					text-align: center;
					font-size: 20px;
					font-weight: bold;
					color: #333;
					padding-bottom: 10px;
					border-bottom: 2px solid #ddd;
					margin-bottom: 20px;
				}
			
				.ad-container .intro {
					background: #f4f4f4;
					padding: 15px;
					border-radius: 5px;
					font-size: 16px;
					color: #555;
					margin-bottom: 20px;
				}
			
				.ad-container .section {
					margin-bottom: 20px;
					padding: 15px;
					border-left: 5px solid #0073e6;
					background: #eef4ff;
					border-radius: 5px;
				}
			
				.ad-container .section a {
					display: inline-block;
					margin-top: 10px;
					font-size: 16px;
					text-decoration: none;
					color: #0073e6;
					font-weight: bold;
				}
			
				.ad-container .section a:hover {
					text-decoration: underline;
				}
			</style>
			
			<div class="ad-container">
			    <div class="header">📊 성공적인 투자를 위한 필수 강의 & 도서 추천</div>
			
			    <div class="intro">
			        투자 초보부터 전문가까지, 성공적인 금융 라이프를 위한 필수 강의와 책을 추천드립니다.  
			        지식에 투자하면 수익률이 올라갑니다! 🚀 지금 바로 시작해 보세요.
			    </div>
			
			    <div class="section">
			        📈 <strong>ETF 기초, 2시간이면 끝!</strong><br>
			        투자는 빠르게 배우고, 천천히 성장하는 것! 🚀  
			        <a href='http://app.ac/vACQEH563' target='_blank'>👉 ETF 기초 강의 보러 가기</a>
			    </div>
			
			    <div class="section">
			        💡 <strong>헤지펀드 전문가에게 직접 배우는 투자 비법!</strong><br>
			        전문가의 통찰력으로 당신의 포트폴리오를 한 단계 업그레이드하세요.  
			        <a href='http://app.ac/WErBQ1S33' target='_blank'>👉 주식 투자 강의 바로 가기</a>
			    </div>
			
			    <div class="section">
			        💰 <strong>돈을 모으고, 지키고, 불리는 가장 스마트한 방법!</strong><br>
			        아이비리그 강사의 금융 지식으로 경제적 자유를 향해 나아가세요.  
			        <a href='http://app.ac/Htwaj7M93' target='_blank'>👉 재테크 강의 확인하기</a>
			    </div>
			
			    <div class="section">
			        📚 <strong>월배당 ETF로 조기 은퇴하는 법!</strong><br>
			        7천만 원으로 월 200만 원 받는 비결이 궁금하다면?  
			        <a href='http://app.ac/EErBQJS23' target='_blank'>👉 베스트셀러 도서 보러 가기</a>
			    </div>
			
			    <div class="section">
			        📘 <strong>유튜브 6,000만 뷰! ‘미주은’의 투자 정석</strong><br>
			        미국 주식 투자의 A부터 Z까지 한 권으로 끝내기!  
			        <a href='http://app.ac/4qp3bU283' target='_blank'>👉 책 자세히 보기</a>
			    </div>
			
			    <div class="section">
			        📊 <strong>이동 평균선으로 차트를 정복하라!</strong><br>
			        매매 타이밍을 잡는 가장 강력한 무기, 이동 평균선 투자법!  
			        <a href='http://app.ac/xqp3bS283' target='_blank'>👉 투자 책 보러 가기</a>
			    </div>
			
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
