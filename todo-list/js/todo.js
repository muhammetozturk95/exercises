// HTML SAYFASINDAKİ ELEMENTLERİN SEÇİLMESİ

let btnDOM = document.querySelector("#liveToastBtn") // liveToastBtn id'si ile ekle yazan butona seçtik ve bu butonu btnDOM değişkenine atadık.
let listDOM = document.querySelector("#list") // list id'si ile ul'nin ID'si olan list'i seçtik ve listDOM'a atadık.
let taskDOM = document.querySelector("#task") //input'un ID'si olan task'ı seçip taskDOM'a atadık.
let ulDOM = document.getElementsByTagName("li"); //burda var olan bütün li elementlerini alıp ulDOM'a atadık böylece elimizde kaç madde yani li olduğunu öğrendik.


// MEVCUT LİSTEYİ SİLMEK İÇİN ÇARPI BUTONUNUN OLUŞTURULMASI
for(let i=0; i < ulDOM.length;i++){ 
    let closeButton = document.createElement("span"); //close icon'u span etiketi içersinde olduğu için yeni bir span elemanı oluşturup ve closeButton değişkenine atadık.
    closeButton.textContent = "\u00D7"; // listede çarpı işaretini oluşturabilmek için "\u00D7" kullandık.
    closeButton.classList.add("close"); // bu butona close class'ını ekledik.
    closeButton.onclick = removeButton; // ve çarpı işaretine basınca removeButton fonsiyonunu çalıştırması gerektini söyledik.
    ulDOM[i].append(closeButton); // closeButton değişkenini ulDOM'un 0, 1, 2... indexlerine ekleyerek aslında for döngüsünü kullanarak var olan listeye çarpı butonunu ekledik. 
    ulDOM[i].onclick = check; // üzerine tıklayınca check fonksiyonunu çalıştır dedik.
}





// Butonlara dinleyici tanımlanması

btnDOM.addEventListener('click', elemanEkle)  // addEventListener ile "click" dediğimiz için butona tıklandığında  elemanEkle fonksiyonu çalışacak.


//Fonksiyonlar 

function check(){
//   this.classList.toggle("checked"); // toggle switch genelde iki şıklı (evet, hayır veya aktif pasif) gibi durumları belirtmek için kullanılır. burda toggle("checked")'i kullanarak tıklanan maddenin üstünü çiz ve yanına tik işareti koy demiş olduk.
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
}

function removeButton(){
//   this.parentElement.remove();  // burda maddeyi silmek için yanı çarpının bulunduğu maddeyi silmek için parentElement.remove classını kullandık. --> jquery özelliği kullanılmadı.
var deletes = document.querySelectorAll('.close')
// Iterate all nodes
deletes.forEach(btn => {
  // Attach event listener. Note to preserve the button this-reference
  // by using the non-shorthand function
  btn.addEventListener('click', function() {
    var li = this.parentNode
    li.remove()
  })
})
}



//ELEMAN EKLEMEK İÇİN GEREKENLER
function elemanEkle() {
    let liveToastErrorDOM = document.querySelector("#liveToastError")
    let liveToastSuccessDOM = document.querySelector("#liveToastSuccess")
    if (taskDOM.value == "" || isNaN(taskDOM.value) == false || taskDOM.value.trim().length == 0 )  {  // input değeri girilmediğinde, sadece sayı girildiğinde veya boş değer girildiğinde
    // $(".error").toast("show"); //error clasını kullanarak --> jquery
        liveToastErrorDOM.classList.remove("hide")
        liveToastErrorDOM.classList.add("show")
        liveToastErrorDOM.classList.add("bg-danger", "text-white")
        

        let closeToastError = document.querySelector("#btn-error")
    closeToastError.addEventListener("click", function() {
        liveToastErrorDOM.classList.add("hide")
         })
         let xErrorDOM = document.querySelector("#x-error")
        xErrorDOM.classList.add("text-light")
    taskDOM.value = "";

  } else {
    // $(".success").toast("show"); --> jquery
    liveToastSuccessDOM.classList.remove("hide")
    liveToastSuccessDOM.classList.add("show")
    liveToastSuccessDOM.classList.add("bg-success", "text-white")

    let liDOM = document.createElement('li') //yeni bir li elementi yaratacagımızı ilan edip yaratacagımız li elementini liDOM değişkenine atayacağımızı söyledik.
    listDOM.appendChild(liDOM); // Yaratacağımız liDOM değişkeninin her seferinde mevcut listenin en sonuna eklenmesi gerektiğini tanımladık.
    liDOM.innerHTML = `${task.value[0].toUpperCase()}${task.value.slice(1).toLowerCase()}` // Burda ise inputID.değer diyerek inputa girilen değerlerin liDOM'a atanması gerektiğini belirttik.
    taskDOM.value = "";

    let closeToastSuccess = document.querySelector("#btn-success")
    closeToastSuccess.addEventListener("click", function() {
        liveToastSuccessDOM.classList.add("hide")
    })

    let xSuccessDOM = document.querySelector("#x-success")
        xSuccessDOM.classList.add("text-light")

    



  
   
    
    
   
   //SONRADAN EKLENEN MADDELERİ SİLMEK İÇİN AYNI İŞLEMLERİN TEKRARI
         liDOM.onclick = check;
        
    let closeButton = document.createElement("span");
        closeButton.textContent = "\u00D7";
        closeButton.classList.add("close");
        closeButton.onclick = removeButton;
        
        liDOM.append(closeButton);
        listDOM.append(liDOM);
        inputElement.value = ("");

        
}
}    



