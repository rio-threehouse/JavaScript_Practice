(function() {
  'use strict';

  var price = document.getElementById('price');
  var num = document.getElementById('num');
  var unit = document.getElementById('unit');
  var btn = document.getElementById('btn');
  var result = document.getElementById('result');
  var reset = document.getElementById('reset');

  btn.addEventListener('click', function() {
    var payLess;
    var short;
    var payMore;
    var over;

    // 結果
    var str;

    // disabledが含まれているものはクリックできないようにする
    if (this.classList.contains('disabled') === true) {
      return;
    }
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
  });
})(); 
