window.onload = function(){
        // 追加要素１
        let newElement1 = document.createElement("div");
        let newContent1 = document.createTextNode("来場予約");	// ①こちらで文言変更可能
        newElement1.appendChild(newContent1);
        newElement1.setAttribute("id","item1");
        function buttonClick1(){
            window.open('https://nohara-inc.co.jp/', '_blank', 'noreferrer');	// ②開きたいURLを設定
        }
        newElement1.onclick = buttonClick1;
        document.getElementById('highlight-tour-controls').after(newElement1);	// ③追加位置の直前の要素のIDを指定
        
        // 追加要素２
        var newElement2 = document.createElement("div");
        var newContent2 = document.createTextNode("資料請求");	// ①こちらで文言変更可能
        newElement2.appendChild(newContent2);
        newElement2.setAttribute("id","item2");
        function buttonClick2(){
            window.open('https://www.into-3dscan.com/', '_blank', 'noreferrer');	// ②開きたいURLを設定
        }
        newElement2.onclick = buttonClick2;
        document.getElementById('highlight-tour-controls').after(newElement2);	// ③追加位置の直前の要素のIDを指定
}