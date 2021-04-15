# 交作業流程

步驟由上往下，總共12步驟。

## Local 端
1. `cd` 到 mentor-program-5th-mhsiungw 
2. `git init` 啟動 git
3. `git branch W1 ` 新開一個分支 
4. `git branch checkout W1 ` 到 W1 分支 
5. 寫作業
6. `git commit -am "commit name"` commit untracked files 
7. `push origin W1 ` 把檔案同步到 Github 

## Github 端
8. 送出 `pull request`
9. 管理者同意 `pull request`

## Local 端
10. `branch checkout master` 移到 master 分支 
11. `git pull origin master`
 把 Github 的 master 分支同步到 local 端 
12. `git branch -d W1` 刪除掉 local 端 的 W1 分支
13. 作業繳交完成