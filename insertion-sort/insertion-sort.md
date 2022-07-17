Proje 1
1. [22, 27, 16, 2, 18, 6] -> Insertion Sort

- Yukarıda verilen dizinin sort türüne göre aşamalarını yazınız.
#### **Aşamalar**
1. [2, 27, 16, 22, 18, 6] n adet işlem
2. [2, 6, 16, 22, 18, 27] n-1 adet işlem
3. [2, 6, 16, 22, 18, 27] n-2 adet işlem...
4. [2, 6, 16, 18, 22, 27] 1 adet işlem

- Big-O gösterimini yazınız.
#### **Big O Notation**
Toplam işlem sayısı 1'den n'ye kadar olan sayıların toplamıdır. Bu da ***n(n+1)/2*** formülüyle hesaplanır. n'yi parantez içerisiyle çarpınca ***(n²+n)/2*** elde ederiz. Burada n² dominant faktördür. Öyleyse Big O gösterimi **O(n²)** olacaktır.

- Time Complexity: Average case: Aradığımız sayının ortada olması,Worst case: Aradığımız sayının sonda olması, Best case: Aradığımız -sayının dizinin en başında olması.

- Dizi sıralandıktan sonra 18 sayısı hangi case kapsamına girer? Yazınız.
#### **Yanıt**
18 sayısı sırlama sonrası dizinin ortasında bulunduğundan **average case** durumudur.


2. [7, 3, 5, 8, 2, 9, 4, 15, 6] dizisinin Insertion Sort'a göre ilk 4 adımını yazınız.

#### **Aşamalar**
1. [2, 3, 5, 8, 7, 9, 4, 15, 6]
2. [2, 3, 4, 8, 7, 9, 5, 15, 6]
3. [2, 3, 4, 5, 7, 9, 8, 15, 6]
4. [2, 3, 4, 5, 6, 9, 8, 15, 7]