function send_btn(){
    // inputの中身が空の場合は警告
    const input = document.getElementById("user_input");
    if(!input.checkValidity()){
        alert("入力する場所がわからないのか?");
        return;
    }

    // 提出ボタン，ロード，結果のHTML要素を取得
    const btn = document.getElementById("btn");
    const spinner = document.getElementById("spinner");
    const result = document.getElementById("chat_log");

    // 結果のテキスト
    const texts = [
        "ggrks",
        "お前のデバイスには検索エンジンがインストールされてないのか?",
        "その程度のこと、ダチョウでも知ってますよ🤯🤯🤯",
        "お前のプロンプトには誠意を感じられない😠",
        "結論から言うね👉\nそれ**調べた方が早い**",
        "こんな明らかなジョークサイトで知識が得られると本気で思ってるのか😅",
    ];
    
    // テキスト選出用のランダム数値
    const r_index = Math.floor(Math.random() * texts.length);

    // プロンプト提出を確認するbool(連打防止)
    btn.disabled = true;
    result.innerText = "";
    // ロードのcssを表示
    spinner.style.display = "block";

    // 5秒後に検索結果を表示
    setTimeout(() =>{
        spinner.style.display = "none";
        result.innerText = texts[r_index];
        btn.disabled = false;
    }, 5000);
    
}