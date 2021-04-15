# 教你朋友 CLI

## 什麼是 CLI
控制電腦的方式有兩種，一種是以圖像式介面控制電腦，常見的範例是**桌面的資料夾**，這種方式稱為 Graphical User Interface，縮寫為 GUI，另一種是以文字控制電腦，常見的範例是Terminal上一行行的文字列，這種方式稱為Command Line Interface，縮寫為CLI。   
CLI 範例如下：
![CLI 範例](https://upload.wikimedia.org/wikipedia/commons/2/29/Linux_command-line._Bash._GNOME_Terminal._screenshot.png)
## 怎麼開啟 CLI
### MacOS 作業系統
在桌面搜尋 **terminal** > 開啟後便會出現以下畫面： ![](https://cdn.macpaw.com/uploads/images/Screen%20Shot%202018-10-17%20at%2018.14.23.png)
開啟後便可以開始鍵入文字指令控制電腦
### Windows 作業系統
按下 `windows + X`，在跳出的選單中選擇中間的「命令提示字元」，便會出現以下畫面：![](http://1.bp.blogspot.com/-vETJnpg5Gps/U2TW9R_7STI/AAAAAAAAFHs/SDtGBLN1QkM/s1600/2014-05-03_194542.png)
開啟後便可以開始鍵入文字指令控制電腦
## 任務一：如何使用 CLI 建立一個資料夾
CLI中每一個動作都有一個文字指令對應，可參考 Codecademy [List of Command Line Commands](https://www.codecademy.com/articles/command-line-commands)。
根據網站裡的內容，如果我們要在電腦上建立一個資料夾，我們會使用到 `mkdir` 這個指令： ![](https://github.com/mhsiungw/test/blob/master/test/S__3424351.jpg?raw=true)做完步驟（一）便會在桌面上新增一個資料夾（二）。    
*小提醒：純CLI介面要看電腦有沒有新增資料夾成功，只能另外用指令查，只有在GUI，我們才可以真的看到一個資料夾產生。*
## 任務二：如何在資料夾建立一個檔案
建立檔案的指令為 `touch 檔案名`，但因為我們現在的位置在桌面，我們要用 `cd 位置名` 移動到 media 資料夾裡，輸入完之後可以使用 `pwd` 來確認所在位置，確認在 media 資料夾裡後，便可以在 terminal 上打上 `touch afu.js`，成果如下圖所示： ![](https://github.com/mhsiungw/test/blob/master/test/S__3424353.jpg?raw=true)


參考資料：https://gitbook.tw/chapters/command-line/command-line.html   
圖片來源：https://ithelp.ithome.com.tw/articles/10230798