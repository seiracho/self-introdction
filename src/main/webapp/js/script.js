//

$(function() {
	$(window).scroll(function() {
		FixedAnime();
	});
});

function FixedAnime() {
	var headerH = $('#header').outerHeight(true);
	var scroll = $(window).scrollTop();
	if (scroll >= headerH){
		$('#header').addClass('fixed');
		}else{
			$('#header').removeClass('fixed');
		}
}

$(window).scroll(function() {
	FixedAnime();
});

// 画像slider
$(document).ready(function() {
	$(".slider").slick({
		arrows: false,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 1000,
		infinite: true,
		pauseOnHover: false,
		pauseOnFocus: true,
		cssEase: 'linear',
		slidesToShow: 3,
		slidesToScroll: 1,		
		});
});

/*自習用
//console.log() は丸括弧 () 内に入力された文字をコンソールに出力する
//文字列はシングルクォーテーション('')またはダブルクォーテーション("")で囲む
//文末にセミコロン(;)をつける
console.log("helloworld");
//文字列同士の連結(+)
console.log("ねこ" + "いぬ" + "シャチ");
//プログラミングでは、数値（数字）を扱うこともできる。数値は文字列と違いクォーテーションで囲まない。クォーテーションつけると文字列と解釈される
//数値と記号はすべて半角で記述することに注意。以下足し算
console.log(5+2);
//掛け算(*)（アスタリスク）,割り算(/)（スラッシュ）,割ったときの余りの計算(%) 記号使用
console.log(3*7);
console.log(6/3);
console.log(9%2);
//変数は、データ（値）の入れ物（箱）。箱についている名前が「変数名」であり、箱の中に実際の値（文字列や数値など）が入っている
//変数は「let 変数名 = 値」として定義します。プログラミングの「=」は「等しい」という意味ではなく、「右辺を左辺に代入する」という意味です。「let」は「これから変数を定義します」という宣言で、その後ろに変数名を書き、値を代入します。
//変数の使い方「"John"」という値が代入された変数nameを出力すると、「"John"」という値が出力される。変数を使うと変数の部分は代入した値に置き換わる。
//変数はクォーテーションで囲まない。変数名をクォーテーションで囲むと、nameが変数ではなく「文字列」として認識され、「name」とそのまま出力されてしまう
let name = "24";
console.log(name);//変数nameが24に置き換わる
//変数は、これまでに学習してきた「文字列」や「数値」とまったく同じように扱える。代入されている値が、文字列の場合は他の文字列と連結することができ、数値の場合は計算に用いることができます
let name = "加藤";
console.log(name + "さん");

let name = "11";
console.log(number+ "5");
//変数は、一度代入した値を変更することもできる。一度値を代入した変数に、その後再び値を代入すると、後に代入した値で変数の中身が上書きされる。定義する時と違って「let」は必要なく、「変数名 = 新しい値」と書けば値が変更される。
let name = "john";
console.log(name);
name = "Kate";//更新時にはletつけない
console.log(name;)
//変数自身の更新...すでに定義している変数numberの値に3を足したい、というときは,numberに3を足して、再びnumberに代入する。「=」の右側のnumberは値に置き換わり、計算された結果が、左のnumberに代入されています。
let number = 2:
console.log(number);

number = number +3;
console.log(number);
//変数とよく似た定数は,letの代わりにconstを用いて定義。定数は値を更新することはできない。定数のメリットは、「後から値を更新できない」ところにあり、予期せぬ更新を防ぐことができ、より安全なコードを書くことができる。これはコードの量が増えるにつれて徐々にメリットとして感じると思います。
//テンプレートリテラル...「+」記号以外での連結方法。テンプレートリテラル(文字列の中で「${定数}」とすること)を用いると、文字列の中に定数（変数）を埋め込むことができる。
const name = "にんじゃわんこ";
console.log('こんにちは、${name}さん');
//この時、文字列全体をバッククォーテーション（`）(キーに注意)(バッククォーテーション、シングルクォーテーション、ダブルクォーテーションの違い理解しておくこと。間違いやすい)で囲む必要がある。複数の変数や定数を埋め込むことも可能
const name = "にんじゃわんこ";
const age = 14;
console.log(`${name}は${age}です`);



*/






















