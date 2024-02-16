// スライダーに表示する画像のパス
var imgList = [
	"img/mainvisual1.jpg",
	"img/mainvisual2.jpg",
	"img/mainvisual3.jpg",
	"img/mainvisual4.jpg"
];

// 画像の要素を自動で追加
for(var i = 0; i < imgList.length; i++){
  // li要素を取得
  var slide = document.createElement("li");
  // li要素の中に画像タグを埋め込む
  slide.innerHTML = "<img src='"+ imgList[i] +"'>";
  // li要素をクラス名「slider-inner」の子要素として追加
  document.getElementsByClassName("slider-inner")[0].appendChild(slide);
}

// スライドの数を取得(処理のために-1する)
var length = imgList.length - 1;
// クラス名「imageSlide」に画像の1枚の要素を格納
var imageSlide = document.getElementsByClassName("slider-inner")[0].getElementsByTagName("li");
// 「現在○○枚目のスライドを表示している」というインデックス番号を格納する変数
var nowIndex = 0;
// 現在表示されている画像にクラス名を付ける
imageSlide[nowIndex].classList.add("show");

// スライド切り替え時に呼び出す関数
function sliderSlide(val){
  // 現在表示している画像からクラス名を削除
  imageSlide[nowIndex].classList.remove("show");
  nowIndex = val;
  // 次に表示するスライドにカレントクラスを設定
  imageSlide[nowIndex].classList.add("show");
}

// 左矢印のナビをクリックした時のイベント
document.getElementById("prev").addEventListener("click", function(){
	var index = nowIndex - 1;
	if(index < 0){
	  index = length;
	}
	sliderSlide(index);
}, false);

// 右矢印のナビをクリックした時のイベント
document.getElementById("next").addEventListener("click", function(){
	var index = nowIndex + 1;
	if(index > length){
	  index = 0;
	}
	sliderSlide(index);
}, false);

// 6秒ごとに次のスライドを表示する関数
function autoSlide() {
  var index = nowIndex + 1;
  if(index > length){
    index = 0;
  }
  sliderSlide(index);
}

// 6秒ごとにautoSlide関数を実行
setInterval(autoSlide, 6000);