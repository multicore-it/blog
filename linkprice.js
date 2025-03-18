document.addEventListener("DOMContentLoaded", function () {
    let targetElement = document.body; // body 내부에 삽입 (원하는 위치에 변경 가능)
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

    // 기존 내용 유지하면서 광고 HTML 추가
    targetElement.insertAdjacentHTML("beforeend", customHTML);
});
