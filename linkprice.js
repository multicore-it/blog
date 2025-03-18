document.addEventListener("DOMContentLoaded", function () {
    let targetElement = document.getElementById("article-view") || document.getElementById("entry-view"); // 원하는 위치 선택

    if (targetElement) {
        let customHTML = `
            <a target="_blank" href="https://click.linkprice.com/click.php?m=temu&a=A100694980&l=QLG9&u_id=">
            <img src="https://img.linkprice.com/files/glink/temu/20240110/h003NqePK1R00_linkprice-dec/468_60.jpg" border="0" width="100%" height="60">
			</a>
			<img src="https://track.linkprice.com/lpshow.php?m_id=temu&a_id=A100694980&p_id=0000&l_id=QLG9&l_cd1=2&l_cd2=0" width="1" height="1" border="0" nosave style="display:none">
			
			<a target="_blank" href="https://click.linkprice.com/click.php?m=agoda&a=A100694980&l=0002&u_id=">
				<img src="https://img.agoda.net/images/partnermarketing/kr/Ads-KR_468x60.jpg" border="0" width="100%" height="60">
			</a>
			<img src="https://track.linkprice.com/lpshow.php?m_id=agoda&a_id=A100694980&p_id=0000&l_id=0002&l_cd1=2&l_cd2=0" width="1" height="1" border="0" nosave style="display:none">
			
			<a target="_blank" href="https://click.linkprice.com/click.php?m=hotelskr&a=A100694980&l=0005&u_id=">
				<img src="https://img.linkprice.com/files/glink/hotelskr/20160718/578c20241efeb_468_60.jpg" border="0" width="100%" height="60">
			</a>
			<img src="https://track.linkprice.com/lpshow.php?m_id=hotelskr&a_id=A100694980&p_id=0000&l_id=0005&l_cd1=2&l_cd2=0" width="1" height="1" border="0" nosave style="display:none">
			
			<a target="_blank" href="https://click.linkprice.com/click.php?m=kbbook&a=A100694980&l=0391&u_id=">
				<img src="https://img.linkprice.com/files/glink/kbbook/20141125/547410e04a101_468_60.gif" border="0" width="100%" height="60">
			</a>
			<img src="https://track.linkprice.com/lpshow.php?m_id=kbbook&a_id=A100694980&p_id=0000&l_id=0391&l_cd1=2&l_cd2=0" width="1" height="1" border="0" nosave style="display:none">
        `;

        // 특정 위치에 추가
        // targetElement.insertAdjacentHTML("afterbegin", customHTML); // 맨 위에 추가
        // targetElement.insertAdjacentHTML("beforeend", customHTML); // 맨 아래에 추가
        // targetElement.insertAdjacentHTML("beforebegin", customHTML); // 요소 이전에 추가
        // targetElement.insertAdjacentHTML("afterend", customHTML); // 요소 이후에 추가
		        // 요소에 따라 삽입 위치 결정
        if (targetElement.id === "article-view") { //PC
            targetElement.insertAdjacentHTML("beforeend", customHTML); // 내부 맨 아래 삽입
        } else if (targetElement.id === "entry-view") { //모바일
            targetElement.insertAdjacentHTML("afterbegin", customHTML); // 요소 바로 앞에 삽입
        }
    } else {
        console.log("❌ 광고를 삽입할 위치를 찾을 수 없음.");
    }
});
