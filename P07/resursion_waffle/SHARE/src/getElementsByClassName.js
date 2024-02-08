function getElementsByClassName(className) {
  // ドキュメント内のすべての要素を取得
  var elements = document.getElementsByTagName("*");

  // 結果を格納する配列
  var result = [];

  // 各要素をチェックしてクラス名が一致するものを結果に追加
  for (var i = 0; i < elements.length; i++) {
    var classNames = elements[i].className.split(" ");
    if (classNames.indexOf(className) !== -1) {
      result.push(elements[i]);
    }
  }

  return result;
}

// 例としてクラス名が "example" の要素を取得する
var elements = getElementsByClassName("example");

// 結果をコンソールに出力
console.log(elements);
