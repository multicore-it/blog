document.addEventListener("DOMContentLoaded", function () {
	let targetElement = document.getElementById("crypto-ad-en"); // 원하는 위치 선택

    if (targetElement) {
        let customHTML = `
			<style>
			  .bitget-ad {
			    max-width: 680px;
			    margin: 30px auto;
			    background: linear-gradient(145deg, #ffffff, #f0f4ff);
			    border: 1px solid #d0ddf7;
			    border-radius: 12px;
			    padding: 25px 30px;
			    box-shadow: 0 6px 16px rgba(0, 115, 230, 0.1);
			    font-family: 'Segoe UI', sans-serif;
			    color: #333;
			    line-height: 1.7;
			  }
			
			  .bitget-ad .title {
			    font-size: 22px;
			    font-weight: bold;
			    text-align: center;
			    color: #0073e6;
			    margin-bottom: 15px;
			  }
			
			  .bitget-ad .content {
			    font-size: 16px;
			    text-align: center;
			    color: #444;
			    margin-bottom: 25px;
			  }
			
			  .bitget-ad .cta-button {
			    display: inline-block;
			    text-align: center;
			    background: #0073e6;
			    color: #fff;
			    padding: 12px 30px;
			    font-size: 16px;
			    font-weight: bold;
			    border-radius: 8px;
			    text-decoration: none;
			    transition: background 0.3s ease;
			  }
			
			  .bitget-ad .cta-button:hover {
			    background: #005bb5;
			  }
			</style>
			
			<div class="bitget-ad">
			  <div class="title">💡 Believe in the future of blockchain? Bitget is the answer!</div>
			  <div class="content">
			    📢 New to crypto trading?<br>
			    Whether you're a beginner or a pro, start safely and easily with <strong>Bitget</strong>—the leading platform in copy trading.
			  </div>
			  <div style="text-align: center;">
			    <a class="cta-button" href="https://share.bitget.com/u/0JKNMET8" target="_blank">📈 Join Bitget Now</a>
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
