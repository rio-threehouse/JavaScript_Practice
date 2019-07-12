'use strict';

{
  const btn = document.getElementById('btn');
  const advice = document.getElementById('advice');
    btn.addEventListener('click', () => {
    // 確率を加える
    const n = Math.random();

      if (n < 0.05) {
        btn.textContent = "凶" ;//5%
        advice.textContent = "落ち込まないで。凶はとってもレアなんです";
      } else if (n < 0.35) { 
        btn.textContent = '末吉'; //30%
        advice.textContent = "ちょっと嫌なことがあっても大丈夫";
      } else if (n < 0.7) {
        btn.textContent = '吉'; //35%
        advice.textContent = 'いつも通りの日々が一番幸せ';
      } else {
        btn.textContent = '大吉';  //30%
        advice.textContent = '今日はいろんなことに挑戦してみよう！';
      }

    });
      
      
  // マウスダウンした時にプレスをつける
  btn.addEventListener('mousedown', () => {
    btn.classList.add('pressed');
  });

  // マウスアップでプレスを外す
  btn.addEventListener('mouseup', () => {
    btn.classList.remove('pressed');
  });
}
