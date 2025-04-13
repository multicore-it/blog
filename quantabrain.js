document.addEventListener("DOMContentLoaded", function () {
	let targetElement = document.getElementById("quantabrain"); // 

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
				
				.cta-button {
			    display: inline-block;
			    margin-top: 15px;
			    padding: 12px 24px;
			    background-color: #0073e6;
			    color: white !important;
			    border-radius: 5px;
			    font-size: 16px;
			    text-align: center;
			    font-weight: bold;
			    text-decoration: none;
			    transition: background-color 0.3s ease;
			  }
			  .cta-inf-button {
			    display: inline-block;
			    margin-top: 15px;
			    padding: 12px 24px;
			    background-color: #c0392b;
			    color: white !important;
			    border-radius: 5px;
			    font-size: 16px;
			    text-align: center;
			    font-weight: bold;
			    text-decoration: none;
			    transition: background-color 0.3s ease;
			  }
			
			  .cta-inf-button:hover {
			    background-color: #660000 !important;
			    color: #ffffff !important;
			  }
			  .cta-button:hover {
			    background-color: #003f99 !important;
			    color: #ffffff !important;
			  }
			</style>
			
			<div class="ad-container">
				🚀 A Must-Read Book for Future-Leading Developers! 🚀<br>
				<a class="cta-inf-button" href='https://www.amazon.com/Reinforcement-Learning-Developers-Easiest-Mastering/dp/B0DMLQDGN7' target='_blank'>🎯 Reinforcement Engineering for Developers</a><br>
				💡 The Core Technology of Business Innovation: Reinforcement Learning!<br><br>

  				🚀 A Must-Read Book for Future-Leading Hackers! 🚀<br>
				<a class="cta-inf-button" href='https://www.amazon.com/Python-Hacking-Essentials-Earnest-Wish-ebook/dp/B00WFP9S2E' target='_blank'>🎯 Python Hacking Essentials</a><br><br>

				🚀the leading platform in <strong>copy trading</strong> 🚀<br>
				<a class="cta-button" href="https://share.bitget.com/u/0JKNMET8" target="_blank">📈 Join Bitget Now</a><br>
				💡 Believe in the future of blockchain? Bitget is the answer!<br>
				Whether you're a beginner or a pro, start safely and easily with <strong>Bitget</strong>
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
