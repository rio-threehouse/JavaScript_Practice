// 厳格モード（エラーテェック）
'use strict';
// 難易度を変えられるようにnum　数値を変るとdivの数が変わる
const num = 10;

// 0~4の数字の中にランダムでwinnerをつける
const winner = Math.floor(Math.random() * num);

for(let i = 0; i < num; i++) {
  const div = document.createElement('div');
  div.classList.add('box');

  // iがwinnerだった時にwinというデータを持たせる
  if (i === winner) {
    div.dataset.result = 'win';
  } else {
    div.dataset.result = 'lose';
  }

  // クリックした時の動作
  div.addEventListener('click', function() {
    // クリックしたdivがwinnerだったら行う
    if (div.dataset.result === 'win') {
      div.classList.add('win');
      div.textContent = 'Win!';

      // それ以外だったら行う
    } else {
      div.classList.add('lose');
      div.textContent = 'lose';
    }
  });

  // divを表示する
  document.body.append(div);
}
