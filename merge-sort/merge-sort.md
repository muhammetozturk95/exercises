[16, 21, 11, 8, 12, 22] -> Merge Sort

1. Yukarıdaki dizinin sort türüne göre aşamalarını yazınız.
#### **Aşamalar**

16 21 11 || 8 12 22  

*İkiye böl*

16 21 | 11 ||  8 12 | 22 

*İkiye böl*

16 21 | 11 & 8 12 | 22 

*birleştir*

11 16 21 & 8 12 22 

*sırala ve birleştir*

**8 11 12 16 21 22**   

***sonuç***

2. Big-O gösterimini yazınız.

Her bir adımda n-1 adet sorgu: **O(n)**

Totalde sürekli olarak 2'ye böldüğümüzden *2^^x = n* ise *x = logn* olur. Öyleyse Big O gösterimi her bir adımdan gelen O(n) ile birlikte **O(nlogn)** olur.