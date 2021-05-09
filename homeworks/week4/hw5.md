## 請以自己的話解釋 API 是什麼
API 是一個連接本地端和第三端 server 的頁面，我們透過 HTTP 的 method 和 API 頁面的資料在第三端的 server 允許範圍內互動，像是 get, post 甚至 delete。舉例來說，我們透過串接 Google 的 API，讓本地端可以向 Google 拿取會員資料，但同時又不會直接更動到 Google 的資料，簡單來說，API 裡的東西就是 Google 複製 Google 資料庫並放在裡面的資料，類似 Google Drive 的頁面。

## 請找出三個課程沒教的 HTTP status code 並簡單介紹
1. 202 第三端的 server 已經接受到 request，但會不會處理接受到的 request 尚不確定。
2. 400 request 的格式錯誤
3. 307 第一個 server 接受到 request 之後，向客戶端發出 307 讓客戶端保持一樣的 request 向新的網址發出請求。


## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

 Base URL: [https://restaurantslist.com](https://restaurants.com)
 
| 說明                | Method            | Path                | 參數                         | 範例                          |
|:-------------:|:------------:|:------------:|:-----------------:|:-----------------:|
|回傳所有餐廳資料|	Get		        | /restaurants	  | _limit:限制回傳資料數量| /restaurants?_limit=5 |
|回傳單一餐廳資料|	Get		        | /restaurants/id |                無              | /restaurants/10          |
|刪除餐廳		|	Delete		  |/restaturants/id |                無              |                 無             | 
|新增餐廳		|	Post		  |/restaturants	  |          name:餐廳名      |                無              |  
|更改餐廳		|	Update		  |/restaturants/id |          name:餐廳名      |                無              |  

