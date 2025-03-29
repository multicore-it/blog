document.addEventListener("DOMContentLoaded", function () {
	let targetElement = document.getElementById("quantabrain-rl"); // 

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
          🚀 A Must-Read Book for Future-Leading Developers! 🚀<br><br>
          <a href='https://www.amazon.com/Reinforcement-Learning-Developers-Easiest-Mastering/dp/B0DMLQDGN7' target='_blank'>🎯 Reinforcement Engineering for Developers</a><br>
          💡 The Core Technology of Business Innovation: Reinforcement Learning!<br>
          Our easiest and most detailed course will help you apply reinforcement learning in real-world practice.<br><br>
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
