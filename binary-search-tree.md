## Proje 3
[7, 5, 1, 8, 3, 6, 0, 9, 4, 2] dizisinin Binary-Search-Tree aşamalarını yazınız.

Örnek: root x'dir. root'un sağından y bulunur. Solunda z bulunur vb.

## Çözüm

İlk olarak diziyi küçükten büyüğe sıralarız.

- [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

Bulmak istediğim sayı 3 olsun.

Dizinin ortasını 4 olarak alırsak, 3 sayısı 4'ten küçük olduğundan 4'ün solunda kalacaktır. Yani 4'ün sağındaki sayılarda arama yapmayacağız.

[0, 1, 2, 3, 4]

Elde ettiğimiz yeni dizinin orta noktası 2'dir. Bulmak istediğim 3 sayısı 2'nin sağındadır. Bu sebeple 2'nin solundakileri siliyoruz.

[2, 3, 4]

Elde edilen yeni dizinin orta noktası 3, yani bulmak istediğimiz sayıdır.



