const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

// Değiştirmek istenilen HTML içeriklerini tanımlıyoruz.

let btnContainerDOM = document.querySelector(".btn-container")
let sectionCenterDOM = document.querySelector(".section-center")

btnContainerDOM.classList.add("d-flex", "justify-content-center")

// Butonların tanımlanması
// 1- all butonu

let buttonAllDOM = document.createElement("button")
buttonAllDOM.setAttribute("type", "button")
buttonAllDOM.classList.add("btn", "btn-outline-dark", "me-3")
buttonAllDOM.setAttribute("id", "menuAll")
buttonAllDOM.textContent = "All"

// console.log(buttonAllDOM)

btnContainerDOM.append(buttonAllDOM)

// 2- korea butonu

let buttonKoreaDOM = document.createElement("button")
buttonKoreaDOM.setAttribute("type", "button")
buttonKoreaDOM.classList.add("btn", "btn-outline-dark", "me-3")
buttonKoreaDOM.setAttribute("id", "menuKorea")
buttonKoreaDOM.textContent = "Korea"

// console.log(buttonKoreaDOM)

btnContainerDOM.append(buttonKoreaDOM)

// 3- japan butonu

let buttonJapanDOM = document.createElement("button")
buttonJapanDOM.setAttribute("type", "button")
buttonJapanDOM.classList.add("btn", "btn-outline-dark", "me-3")
buttonJapanDOM.setAttribute("id", "menuJapan")
buttonJapanDOM.textContent = "Japan"

// console.log(buttonJapanDOM)

btnContainerDOM.append(buttonJapanDOM)

// 4- china butonu

let buttonChinaDOM = document.createElement("button")
buttonChinaDOM.setAttribute("type", "button")
buttonChinaDOM.classList.add("btn", "btn-outline-dark")
buttonChinaDOM.setAttribute("id", "menuChina")
buttonChinaDOM.textContent = "China"

// console.log(buttonChinaDOM)

btnContainerDOM.append(buttonChinaDOM)

// anasayfa

function homePage() {
  
  let displayAllList = menu.map(function(item){
    console.log(item)
    return `<div class="menu-items col-lg-6 col-sm-12">
    <img
      src=${item.img}
      alt=${item.title}
      class="photo"
    />
    <div class="menu-info">
      <div class="menu-title">
        <h4>${item.title}</h4>
        <h4 class="price">${item.price}</h4>
      </div>
      <div class="menu-text">
        ${item.desc}
      </div>
    </div>
  </div>`
    
    
  })
  displayAllList = displayAllList.join("")
  sectionCenterDOM.innerHTML = displayAllList
}

homePage()

// buttonlara işlevlerin eklenmesi

// tüm yemeklerin olduğu liste

let menuAllDOM = document.querySelector("#menuAll")
menuAllDOM.addEventListener("click", displayAllMenu)

function displayAllMenu() {
  
  let displayAllList = menu.map(function(item){
    console.log(item)
    return `<div class="menu-items col-lg-6 col-sm-12">
    <img
      src=${item.img}
      alt=${item.title}
      class="photo"
    />
    <div class="menu-info">
      <div class="menu-title">
        <h4>${item.title}</h4>
        <h4 class="price">${item.price}</h4>
      </div>
      <div class="menu-text">
        ${item.desc}
      </div>
    </div>
  </div>`
    
    
  })
  displayAllList = displayAllList.join("")
  sectionCenterDOM.innerHTML = displayAllList
}


// kore yemeklerinin olduğu liste

let menuKoreaDOM = document.querySelector("#menuKorea")
menuKoreaDOM.addEventListener("click", displayKoreaMenu)

function displayKoreaMenu() {
  let displayKoreaList = menu.map(function(item) {
    // console.log(item)
    if(item.category === "Korea") {
      console.log("oluyor gibi")
      return `<div class="menu-items col-lg-6 col-sm-12">
    <img
      src=${item.img}
      alt=${item.title}
      class="photo"
    />
    <div class="menu-info">
      <div class="menu-title">
        <h4>${item.title}</h4>
        <h4 class="price">${item.price}</h4>
      </div>
      <div class="menu-text">
        ${item.desc}
      </div>
    </div>
  </div>`
    }
  })

  displayKoreaList = displayKoreaList.join("")
  sectionCenterDOM.innerHTML = displayKoreaList
}

// japon yemeklerinin olduğu liste

let menuJapanDOM = document.querySelector("#menuJapan")
menuJapanDOM.addEventListener("click", displayJapanMenu)

function displayJapanMenu() {
  let displayJapanList = menu.map(function(item) {
    if(item.category === "Japan") {
      return `<div class="menu-items col-lg-6 col-sm-12">
    <img
      src=${item.img}
      alt=${item.title}
      class="photo"
    />
    <div class="menu-info">
      <div class="menu-title">
        <h4>${item.title}</h4>
        <h4 class="price">${item.price}</h4>
      </div>
      <div class="menu-text">
        ${item.desc}
      </div>
    </div>
  </div>`
    }
  })

  displayJapanList = displayJapanList.join("")
  sectionCenterDOM.innerHTML = displayJapanList
}

let menuChinaDOM = document.querySelector("#menuChina")
menuChinaDOM.addEventListener("click", displayChinaMenu)

function displayChinaMenu() {
  let displayChinaList = menu.map(function(item) {
    if(item.category === "China") {
      return `<div class="menu-items col-lg-6 col-sm-12">
    <img
      src=${item.img}
      alt=${item.title}
      class="photo"
    />
    <div class="menu-info">
      <div class="menu-title">
        <h4>${item.title}</h4>
        <h4 class="price">${item.price}</h4>
      </div>
      <div class="menu-text">
        ${item.desc}
      </div>
    </div>
  </div>`
    }
  })

  displayChinaList = displayChinaList.join("")
  sectionCenterDOM.innerHTML = displayChinaList
}