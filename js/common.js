//---------------------------------------------------------------------
//| フッターファイルを読み込んで差し込む
//|
//---------------------------------------------------------------------
function loadFooter(){
  $(function(){
    $("footer").load("/homepage/html/footer.html #footer");
  });
}