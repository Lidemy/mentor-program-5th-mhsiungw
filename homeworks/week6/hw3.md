## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
| 標籤                                                      | 說明           | 介紹                                            
|:-------------------------------:|:------------:|:-------:|
|&lt;hr&gt; &lt;/hr&gt;           |     分隔線    | 標籤會變成分隔線，範例如下：<hr>我是分隔線</hr>
|&lt;b&gt; &lt;/b&gt;|    粗體   | <b>我是粗體字</b>
|&lt;textarea&gt; &lt;/textarea&gt;|   文字區域   | <textarea placeholder='請輸入文字'></textarea>     




## 請問什麼是盒模型（box modal）
Box model 是一個盒子包裹著每個 HTML 元素，像 &lt;h1&gt; 我被包裹著 &lt;/h1&gt;。Box Model 主要由四個部分組成，由內到外分別是 Content、Padding、Border 和 Margin，其中，Padding 用來隔開 Content 和 Border 的距離，Margin 用來隔開 element 和 element 之間的距離。 
 
<img src='https://www.oxxostudio.tw/img/articles/202008/css-box-model-01.jpg' />

## 請問 display: inline, block 跟 inline-block 的差別是什麼？
透過設定 display 的屬性，我們改變元素被排列的方式。有三個常見的display 屬性。   
1. inline: html 元素可以並排。margin 和 padding 的上下無法調整，只能調整左右。  
2. block: block 屬性的 html 元素前後帶有換位符，即元素不能並排。padding 和 margin 的可以調整。  
3. inline-block: inline-block 屬性的 html 元素碰到其他元素不會換行。和 block 一樣，可以設定所有元素。


## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？
透過設定 position 的屬性和結合top 、 bottom、 left 和 right 的屬性，我們改變元素在瀏覽器上的定位。下面四個不同屬性的主要差別是定位的基準點。  
1. static: 不會特別定位，按照瀏覽器原本設置定位。  
2. relative:   依照原本位置為定位點。  
3. absolute: 從上層非 static 屬性的元素為定位點，如找不到，則以 body 為定位點。  
4. fixed: 以瀏覽器為定位點，且即使畫面捲動，也會待在固定位置。  

參考資料：  
1. [深入理解 CSS Box Model ( 盒子模型 )](https://www.oxxostudio.tw/articles/202008/css-box-model.html)   
2. [學習 CSS 版面配置](https://zh-tw.learnlayout.com/position.html)
