window.onload = function(){
        // 追加要素１
        let newElement1 = document.createElement("div");
        let newContent1 = document.createTextNode("来場予約");	// ①こちらで文言変更可能
        newElement1.appendChild(newContent1);
        newElement1.setAttribute("id","item1");
        function buttonClick1(){
            window.open('https://www.into-3dscan.com/', '_blank', 'noreferrer');	// ②開きたいURLを設定
        }
        newElement1.onclick = buttonClick1;
        document.getElementById('highlight-tour-controls').before(newElement1);	// ③追加位置の直前の要素のIDを指定
        
        }