(function() {
  'use strict';

  var price = document.getElementById('price');
  var num = document.getElementById('num');
  var unit = document.getElementById('unit');
  var btn = document.getElementById('btn');
  var result = document.getElementById('result');
  var reset = document.getElementById('reset');

  function checkInput () {
    // 正規表現 
    // /^$/先頭から末尾までをみる
    // /^[1-9][0-9]*$/ [１桁目に入る数][２桁目以降に入る数]*繰り返し
    if (
      // priceとnumの値が正規表現で定義したものならば = 空ではなかったら
      // match=stringオブジェクト内に含まれている文字列を検索する
      price.value.match(/^[1-9][0-9]*$/) !== null &&
      num.value.match(/^[1-9][0-9]*$/) !== null
    ) {
      btn.classList.remove('disabled');
    } else {
      btn.classList.add('disabled');
    }
  }

  btn.addEventListener('click', function() {
    var payLess;
    var short;
    var payMore;
    var over;

    // 結果
    var str;

    // disabledが含まれているものはクリックできないようにする
    // if (this.classList.contains('disabled') === true) {
      // return;
    // }
    // round=四捨五入
    // floor=切り捨て
    payLess = Math.floor(price.value / num.value / unit.value) * unit.value;
    short = price.value - (payLess * num.value);
    // ceil=切り上げ
    payMore = Math.ceil(price.value / num.value / unit.value) * unit.value;
    // abs=絶対値
    over = Math.abs(price.value - (payMore * num.value));

    // 計算結果を表示
    // 条件分岐 割り切れた場合のメッセージを変化させる
    if (over === 0 && short === 0) {
      str = '一人' + (price.value / num.value) + '円ちょうどです!';
    } else {
      str = 
      '一人' + payLess + '円だと' + short + '円足りません。' +
      '一人' + payMore + '円だと' + over + '円余ります。';
    }

    result.textContent = str;
    reset.classList.remove('hidden');
  });

  // keyupキーボードを離した時に（何かを打ち込んだ時に）checkInputを実行
  price.addEventListener('keyup', checkInput);
  num.addEventListener('keyup', checkInput);

  reset.addEventListener('click', function() {
    result.textContent = 'ここに結果を表示します';
    price.value = '';
    num.value = '';
    unit.value = '100';
    btn.classList.add('disabled');
    this.classList.add('hidden');
    price.focus();
  });

  price.focus();
})(); 
