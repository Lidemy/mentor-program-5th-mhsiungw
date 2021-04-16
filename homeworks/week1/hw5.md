## 請解釋後端與前端的差異。
前端和後端，根據[這篇文章](https://www.pluralsight.com/blog/software-development/front-end-vs-back-end)的解釋，又稱為**顧客端**和**伺服器端**。顧名思義，前端，在網頁裡，是指使用者直接接觸的部分，像是網頁的排版和功能...等等，而後端，在網頁裡，是指網頁和伺服器互動的部分，例如說網頁的儲存功能或會員功能，這些功能皆需要伺服器的協助來儲存資料，在使用者的眼中後端展現的內容是肉眼不可見的。

## 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。
1. 按下 Enter
2. 連動順序：網頁 > 作業系統 > 電腦硬體中的網路卡
3. 網路卡向 Google 的 Server 發出索取 JavaScript 資料的 request
4. Google 的 Server 向它的 Data Base 索取資料
5. Google 的 Server 索取到資料後向硬體中的網路卡發出 response 
6. 我們電腦硬體的網路卡接收到帶著資料的 response 後傳給作業系統
7. 最後，我們的網頁把 response 呈現在網頁上


## 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用
1. `cp -r  A B` ：複製資料夾。A為原資料夾，B為複製後的資料夾名字。
2. `date`：出現日期
3. `uniq`：顯示文字檔的每一行，如上行與下行重複，會自動隱藏其中一行