import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  // 押された削除ボタンの親タグ(li,div)を未完了リストから削除
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了のリストに追加する関数
const createIncompleteList = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // pタグ生成
  const p = document.createElement("p");
  p.className = "list-title";
  p.innerText = text;

  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(li,div)を未完了リストから削除    const deleteTarget = ;
    const completeTarget = completeButton.parentNode.parentNode;

    deleteFromIncompleteList(completeTarget);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    //li以下を初期化
    addTarget.textContent = null;

    // pタグ生成
    const p = document.createElement("p");
    p.innerText = text;

    // buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode.parentElement;
      document.getElementById("complete-list").removeChild(deleteTarget);
      const text = backButton.parentElement.firstChild.innerText;
      createIncompleteList(text);
    });

    //  divタグの子要素に各要素を設定
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);
    // liタグの子要素に各要素を設定
    const li = document.createElement("li");
    li.appendChild(addTarget);
    // 完了リストに追加uiタグの子要素に各要素を設定
    document.getElementById("complete-list").appendChild(li);
  });

  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(li,div)を未完了リストから削除
    const deleteTarget = deleteButton.parentNode.parentNode;
    deleteFromIncompleteList(deleteTarget);
  });
  // divタグの子要素に各要素を設定
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // liタグの子要素に各要素を設定
  const li = document.createElement("li");
  li.className = "incomlete-row";
  li.appendChild(div);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
