

/////////////////////  json取得(start)  //////////////

/////////////////////  json取得(end)  ////////////////


// ラジオボタンのラベルから取得するJsonファイルを判定すれば良い
// 「問題スタート」ボタンのイベントはQuestion.jsで拾う(ここで拾っても意味ない)

////////////// Json //////////////
// 初期画面が表示された瞬間にすべての難易度のJsonファイルを取得する
// 問題スタート」ボタンが押下された瞬間に初期画面のラジオボタンを判定する
// ラジオボタンに応じたJsonファイルの中身をQuestions配列に持たせる
// このタイミングでQuestions配列の順番をランダムに入れ替える
// javascriptの変数って任意のタイミングで解放できるのか調べても良いかも
//  →使わなかった問題を格納する変数分のメモリが無駄な気がする

// クイズ画面の各要素を取得し、変数に保持する
// 「問題文」ラベル
// 「キーボード」チェックボックス(数未定)
// 「回答欄」テキストボックス
// 「問題スタート」ボタン
// 「答え合わせ」ボタン
// 「次の問題へ」ボタン


////////////// 問題出力 //////////////
// Questions配列の0番目から順に問題を出題して行く
// 「問題文」ラベルへ出題内容を代入する
// この時にすでに答えはcurrentAnswerに持たせても良いかも

////////////// 答え合わせ //////////////
// 「答え合わせ」ボタン押下時イベントに対して関数を代入する
// 「回答欄」テキストボックスの値とcurrentAnswerを比較する
// 正解/不正解の判定をする
// 正解/不正解および解答を表示する
// 「次の問題へ」ボタンを有効にし、他のボタンは無効にする
// 「次の問題へ」を押下したら、問題出力処理を再度行う

// 最後の問題の答え合わせ画面で「次の問題へ」ボタンを押下したら、
// 最終結果を出力する

