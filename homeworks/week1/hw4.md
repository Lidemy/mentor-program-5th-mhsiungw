# 跟你朋友介紹 Git
## Git 是什麼？
Git 是一個**版本控制**程式。操控電腦的方式有兩種，一種是GUI (Graphical User Interface)，另一種是 CLI (Command Line Interface)。在 GUI 中，我們會使用資料夾來管理檔案，而在 CLI 中，雖然我們也可以透過資料夾來管理檔案，但更好的組合是加上 Git，因為它不僅能夠紀錄下來每個檔案的變化，還能夠紀錄是誰更改了它們，方便管理者作業和釐清責任歸屬。

## Git 安裝方式
### [MacOS 安裝方式](https://gitbook.tw/chapters/environment/install-git-in-mac.html)

### [Windows 安裝方式](https://gitbook.tw/chapters/environment/install-git-in-windows.html)

## 如何使用 Git 完成版本控制
在 terminal 上使用 `cd` 指令到想要使用 Git 的資料夾
![](https://github.com/mhsiungw/test/blob/main/作業/1.png?raw=true)
使用 `git init` 指令啟動 Git
![](https://github.com/mhsiungw/test/blob/main/作業/2.png?raw=true)
使用 `git status` 指令檢測檔案狀態 ( untracked files= 尚未使用 `add` 和 `commit` 指令)
![](https://github.com/mhsiungw/test/blob/main/作業/3.png?raw=true)
使用 `git add 笑話A.text` 指令把「笑話A.text 」加入 new files
![](https://github.com/mhsiungw/test/blob/main/作業/4.png?raw=true)
使用 `git status` 指令檢測檔案狀態確定「笑話A.text 」狀態為 new files   
使用 `git commit 笑話版本一` 指令提交此檔案**第一種**版本   
使用 `git status` 指令檢測檔案狀態確定「笑話A.text 」已不在狀態裡
![](https://github.com/mhsiungw/test/blob/main/作業/5.png?raw=true)
使用 `git log` 檢測 commit 列裡的「笑話版本一」
![](https://github.com/mhsiungw/test/blob/main/作業/6.png?raw=true)
下圖為 commit 列：
![commit 列](https://github.com/mhsiungw/test/blob/main/作業/7.png?raw=true)
到 Github 開啟 repository 後，複製網址
![](https://github.com/mhsiungw/test/blob/main/作業/7-1.png?raw=true)
使用 `git remote add origin https://github.com/mhsiungw/test.git` 指令連接遠端 Github 與 本地 Git   
使用 `git remote -v` 指令檢視目前 Git 的連接網址（push資料和fetch資料的網址）   
![](https://github.com/mhsiungw/test/blob/main/作業/8.png?raw=true) 
使用 `git push origin master` 將「笑話版本一」 push（丟）到我們連接的 Github repository
![](https://github.com/mhsiungw/test/blob/main/作業/9.png?raw=true)
到 Github repository 確認 push 成功
![](https://github.com/mhsiungw/test/blob/main/作業/10.png?raw=true)
在原有「笑話A.text 」裡，增加內容
![](https://github.com/mhsiungw/test/blob/main/作業/11.png?raw=true)
使用 `git status` 指令檢測檔案狀態確定「笑話A.text 」狀態為 modified files   
＊*因為「笑話A.text 」已經被commit過，所以不會顯示為 new files*    
使用 `git commit -am  笑話版本二` 指令提交此檔案**第二種**版本     
＊*狀態非 new files 可用 git commit -am "commit name" 來提交版本*   
使用 `git status` 指令檢測檔案狀態確定「笑話A.text 」已不在狀態裡   
![](https://github.com/mhsiungw/test/blob/main/作業/12.png?raw=true)
使用 `git log` 檢測 commit 列裡的「笑話版本二」
![](https://github.com/mhsiungw/test/blob/main/作業/13.png?raw=true)
使用 `git push origin master` 將「笑話版本二」 push（丟）到我們連接的 Github repository
![](https://github.com/mhsiungw/test/blob/main/作業/14.png?raw=true)
到 Github repository 確認 push 成功
![](https://github.com/mhsiungw/test/blob/main/作業/15.png?raw=true)
點進去確認內容已更改
![](https://github.com/mhsiungw/test/blob/main/作業/16.png?raw=true)
也可以在 Github 上更改，並儲存為「英語版本三」
![](https://github.com/mhsiungw/test/blob/main/作業/17.png?raw=true)
使用 `git pull origin master` 將「英語版本三」fetch（抓）到我們的本端 Git
![](https://github.com/mhsiungw/test/blob/main/作業/18-1.png?raw=true)
使用 `git log` 檢測 commit 列裡的「笑話版本三」
![](https://github.com/mhsiungw/test/blob/main/作業/19.png?raw=true)   
透過在Git修改，上傳至Github後，使用Github管理版本，相信菜哥有朝一日一定會成為一個笑話大師   
補充：   
[Git 指令大全](https://git-scm.com/docs)   
參考資料：    
https://medium.com/wenchin-rolls-around/git-與-github-起手式-966e18da84f2
https://gitbook.tw




