const menu = [
  {
    id: 1,
    title: "Ezogelin",
    category: "Çorba",
    price: "20 ₺",
    img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/1d5f91d4-c020-4134-9c74-1b3d92717b59/Derivates/38b07ef1-64ca-4a67-8a23-46a46ffc688b.jpg",
    desc: `Ezogelin çorbası yüksek oranda bereket içerir. Besleyicidir, lezzetlidir, pratiktir. Tüm bunların yanı sıra mercimek çorbası ile olan amansız rekabetiyle, bütün kebapçıların olmazsa olmaz çorbası olma özelliğini taşır. Hastalıklara karşı amansızca savaşır, siz iyi olun diye varını yolunu ortaya koyar. Tırnak pide ya da bazlamayı çok sever.`,
  },
  {
    id: 2,
    title: "Mercimek",
    category: "Çorba",
    price: "20 ₺ ",
    img: "https://d17wu0fn6x6rgz.cloudfront.net/img/w/tarif/mgt/shutterstock_771149176.webp",
    desc: `Yaz kış demeden her mevsim, her zaman, her durumda elimizin gittiği tariftir mercimek çorbası tarifi. En çok sevilen çorbalardan biridir o! Bu yüzden zamansız çorbadır. `,
  },
  {
    id: 3,
    title: "Beyran",
    category: "Çorba",
    price: "30 ₺",
    img: "https://static.daktilo.com/sites/1076/uploads/2022/09/14/large/beyran-corbasi-1663185654.jpg",
    desc: `Haşlanmış kuzu gerdan eti, haşlanmış pirinç, sarımsak, baharatlar ve et suyu bakır bir tabakta harmanlanarak servis edilir. Kış mevsiminin efsanesidir.`,
  },
  {
    id: 4,
    title: "Kelle Paça",
    category: "Çorba",
    price: "30 ₺",
    img: "https://hancorba.com.tr/wp-content/uploads/2021/11/hcweb_0005_Kelle-Paca.jpg",
    desc: `Mutfağımızın vazgeçilmez lezzetlerinden olan, tek başına eczane kabul edilen, boş şifalı Kelle paça çorbası.`,
  },
  {
    id: 5,
    title: "Simit Kebabı",
    category: "Kebap",
    price: "90 ₺",
    img: "https://gastromanya.com/wp-content/uploads/2016/11/simit-kebabi.jpg",
    desc: `İnce bulgur ılık suda ıslatılır . Islatılmış bulgur üzerine kıyma eti, sarımsak, soğan, maydanoz, kırmızıbiber ve baharat ilave edilip harmanlanarak pişirilir, servis edilir. `,
  },
  {
    id: 6,
    title: "Adana Kebap (acılı)",
    category: "Kebap",
    price: "80 ₺",
    img: "https://cdn.yemek.com/mnresize/940/940/uploads/2016/05/adana-kebap-one-cikan.jpg",
    desc: `Zırhlanmış dana bonfile parçaları, kuzu kaburga ve kuyruk yağı karışımından yapılan kıyma, taze baharatlar ve acı sos ile harmanlanarak pişirilir, servis edilir .`,
  },
  {
    id: 7,
    title: "Urfa Kebap (acısız)",
    category: "Kebap",
    price: "80 ₺",
    img: "https://www.kamufinans.com/wp-content/uploads/2018/08/Adana-Kebap-1.jpg",
    desc: `Zırhlanmış dana bonfile parçaları, kuzu kaburga ve kuyruk yağı karışımından yapılan kıyma, taze baharatlar ve acı sos ile harmanlanarak pişirilir, servis edilir . `,
  },
  {
    id: 8,
    title: "Soğan Kebabı",
    category: "Kebap",
    price: "90 ₺",
    img: "https://yemektarifine.com/wp-content/uploads/2019/01/P1190936-1.jpg",
    desc: `Zırhlanmış dana bonfile parçaları, kuzu kaburga ve kuyruk yağı karışımından yapılan kıyma, taze baharatlar ve acı sos ile harmanlanarak pişirilir, servis edilir .`,
  },
  {
    id: 9,
    title: "Patlıcan Kebabı",
    category: "Kebap",
    price: "90 ₺",
    img: "https://i4.hurimg.com/i/hurriyet/75/750x422/62d943e14e3fe02648ba6294.jpg",
    desc: `Zırhlanmış dana bonfile parçaları, kuzu kaburga ve kuyruk yağı karışımından yapılan kıyma, taze baharatlar ve acı sos ile harmanlanarak pişirilir, servis edilir .`,
  },
  {
    id: 10,
    title: "Yoğurtlu Kebap",
    category: "Kebap",
    price: "80 ₺",
    img: "https://i.ytimg.com/vi/ggkztG7MVaU/maxresdefault.jpg",
    desc: `Kızartılmış ekmek parçaları, sos, Urfa kebabı üzerine yoğurt ve tereyağı dökülerek servis edilir .`,
  },
  {
    id: 11,
    title: "Beyti Sarma",
    category: "Kebap",
    price: "100 ₺",
    img: "https://www.maidepide.com.tr/thumb/depo/urunler/_0001_img_0659_3Mzk.jpg",
    desc: `Soslanan lavaş arasına beyti kebap sarılarak dilimlenir, üzerine sos ve tereyağı dökülür, servis edilir .`,
  },
  {
    id: 12,
    title: "Ali Nazik",
    category: "Kebap",
    price: "100 ₺",
    img: "https://cdn.yemek.com/mnresize/940/940/uploads/2020/10/kiymali-ali-nazik-kebabi-tarifi.jpeg",
    desc: `Közlenmiş patlıcan, sarımsak ve yoğurt harmanlanarak üzerine parça kıyma kebabı eklenir ve tereyağı dökülerek servis edilir.`,
  },
  {
    id: 13,
    title: "Peynirli Roka Salata",
    category: "Salata",
    price: "40 ₺",
    img: "https://www.hamarat.org/images/Peynirli-Roka-Salatasi-71.jpg",
    desc: `Tulum peyniri, roka, cherry domates ve özel soslar eşliğinde.`,
  },
  {
    id: 14,
    title: "Mevsim Salata",
    category: "Salata",
    price: "40 ₺",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3L5NJOKEGPTcDetdzQJ6BdU1biLOUD7YRydG49WLEvgJXh11ThPOo7omMU4o4-mVkBws&usqp=CAU",
    desc: `Iceberg marul, kıvırcık marul, Akdeniz yeşillikleri, cherry domates, salatalık ve mısır kokteyl sos eşliğinde.`,
  },
  {
    id: 15,
    title: "Hellim Peynirli Salata",
    category: "Salata",
    price: "50 ₺",
    img: "https://www.diyetkolik.com/site_media/media/foodrecipe_images/hellim-b_1.210x210.jpg",
    desc: `Iceberg marul, kıvırcık marul, Akdeniz yeşillikleri, cherry domates, salatalık ve mısır kokteyl sos eşliğinde.`,
  },
  {
    id: 16,
    title: "Ton Balıklı Salata",
    category: "Salata",
    price: "50 ₺",
    img: "https://iasbh.tmgrup.com.tr/117c8f/650/344/0/0/724/380?u=https://isbh.tmgrup.com.tr/sbh/2021/01/22/ton-balikli-misirli-salata-tarifi-1611327079423.jpg",
    desc: `Iceberg marul, kıvırcık marul, Akdeniz yeşillikleri, domates, salatalık ve mısır kokteyl sos eşliğinde.`,
  },
  {
    id: 17,
    title: "Çoban Salata",
    category: "Salata",
    price: "40 ₺",
    img: "https://static.bizimtarifler.com/wp-content/uploads/2020/12/a9b61778-1dd2-41e7-830e-8fd4a7b06d7c.jpg.webp",
    desc: `Iceberg marul, kıvırcık marul, Akdeniz yeşillikleri, domates, salatalık ve mısır kokteyl sos eşliğinde.`,
  },
  {
    id: 18,
    title: "Tavuk Salata",
    category: "Salata",
    price: "50 ₺",
    img: "https://cdn.yemek.com/mncrop/940/625/uploads/2018/09/tavuklu-salata.jpg",
    desc: `Iceberg marul, kıvırcık marul, Akdeniz yeşillikleri, ızgara tavuk göğsü, cherry domates, lahana, mısır ve havuç hardallı sos eşliğinde.`,
  },
  {
    id: 19,
    title: "Şakşuka",
    category: "Meze",
    price: "40 ₺",
    img: "https://www.pratikevyemekleri.com/wp-content/uploads/2021/08/kislik-saksuka-tarifi.jpg",
    desc: `Kimine göre meze kimine göre sebze yemeği ama ne olursa olsun hep lezzetli. Yemeklerin yancısı, gönülleri derinden fetheden şakşuka .`,
  },
  {
    id: 20,
    title: "Cacık",
    category: "Meze",
    price: "30 ₺",
    img: "https://d17wu0fn6x6rgz.cloudfront.net/img/w/tarif/ogt/cacik.webp",
    desc: `Pilav, fasulye, karnıyarık, köftenin yanında olmadan olmaz… Cacık, neredeyse her yemekle iyi giden, klasikleşmiş, ana yemek yanında görmeyi çok sevdiğimiz, yazın tek başına öğün yaptığımız, klasik mezelerden belki de en sevileni.`,
  },
  {
    id: 21,
    title: "Cevizli Antep Ezmesi",
    category: "Meze",
    price: "45 ₺",
    img: "https://m.yemekev.com/uploads/images/gallery/ezmeyemekev4.jpg",
    desc: `Meze olarak sunabileceğiniz Antep ezmesi, kebapların ve ızgara etlerin yanına da çok yakışır.`,
  },
  {
    id: 22,
    title: "Yoğurtlu Patlıcan",
    category: "Meze",
    price: "35 ₺",
    img: "https://cdn.yemek.com/mnresize/1250/833/uploads/2017/04/yogurtlu-patlican-salatasi-yemekcom.jpg",
    desc: ` İster ekmek banın, isterseniz de et ve tavuk yemeklerinin yanına soğuk bir salata başlangıcı olarak değerlendirin. Her ne şekilde olursa olsun tarife eklediğimiz baharatlar ile lezzetine bayılacaksınız.`,
  },
  {
    id: 23,
    title: "Muhammara",
    category: "Meze",
    price: "45 ₺",
    img: "https://www.antepsofrasi.com/wp-content/uploads/2016/08/Muhammara-Tarifi-scaled.jpg",
    desc: `İster kahvaltılarda ister ana yemeklerin yanında meze olarak tüketebileceğiniz nostaljik, sağlıklı ve leziz bir tat: Muhambara…`,
  },
  {
    id: 24,
    title: "Humus",
    category: "Meze",
    price: "40 ₺",
    img: "https://cdn.yemek.com/mnresize/940/940/uploads/2015/09/humus-guncelleme-sunum-2.jpg",
    desc: `Zeytinyağı, tahin ve taze sıkılmış limon suyunun da katkılarıyla haşlanmış nohuttan hazırlanan en güzel mezelerin başında gelir humus. Tarifte yer alan diğer malzemelerle kıvam kazanan humus, kimyon ve sarımsakla çeşnilenir. `,
  },
  {
    id: 25,
    title: "Antep Baklava",
    category: "Tatlı",
    price: "50 ₺",
    img: "https://www.alibabasut.com/wp-content/uploads/2021/08/DSC05758.jpg",
    desc: `Antep’ten günlük gelen baklavalarımız, ılık süt eşliğinde servis edilir .`,
  },
  {
    id: 26,
    title: "Havuç Dilimi Baklava",
    category: "Tatlı",
    price: "50 ₺",
    img: "https://memleketpazari.de/wp-content/uploads/2022/03/lezza-havuc-dilimi.jpg",
    desc: `Antep’ten günlük gelen baklavalarımız, ılık süt eşliğinde servis edilir .`,
  },
  {
    id: 27,
    title: "Midye Baklava",
    category: "Tatlı",
    price: "60 ₺",
    img: "https://emelaslan.com/wp-content/uploads/2022/04/midyebaklava2.jpeg",
    desc: `Antep’ten günlük gelen baklavalarımız, ılık süt eşliğinde servis edilir .`,
  },
  {
    id: 28,
    title: "Şöbiyet",
    category: "Tatlı",
    price: "50 ₺",
    img: "https://www.grandturkishbazaar.com/wp-content/uploads/2020/02/sobiyet-baklava-with-pistachio-hafiz-mustafa.jpg",
    desc: ` Çıtır çıtır kıvamı, bol antep fıstıklı iç harcıyla damaklarda iz bırakan şöbiyet tatlısı`,
  },
  {
    id: 29,
    title: "Künefe",
    category: "Tatlı",
    price: "50 ₺",
    img: "https://imgrosetta.mynet.com.tr/file/11674342/11674342-728xauto.jpg",
    desc: `Tel tel açıldıktan sonra bolca tereyağıyla harmanlanan tel kadayıflar, özel künefe peyniri olarak da bilinen tuzsuz Antakya peyniri, ateşle temasında çıtır çıtır kızaran kadayıf telleri...`,
  },
  {
    id: 30,
    title: "Antep Katmeri",
    category: "Tatlı",
    price: "50 ₺",
    img: "https://dosegida.com/Content/Images/Urunler/Sam-Antep-Katmer/katmer-dose-gida.jpg",
    desc: `Gaziantep’ten gelen özel kaymak ve Antep fıstığı, şeker ile birlikte yufka arasına sarılır , taş fırında pişirilmesinin ardından üzerine Antep fıstığı dökülerek servis edilir .`,
  },
  {
    id: 31,
    title: "Yayık Ayran",
    category: "İçecek",
    price: "15 ₺",
    img: "https://www.diyetkolik.com/site_media/media/2019/08/21/ayran-faydalari.jpg",
    desc: ``,
  },
  {
    id: 32,
    title: "Şalgam",
    category: "İçecek",
    price: "15 ₺",
    img: "https://im.haberturk.com/2022/02/11/ver1657442565/3342675_e075dc5bcbfb34114ea7b2c3ca2af3de.jpg",
    desc: ``,
  },
  {
    id: 33,
    title: "Zafer Gazoz",
    category: "İçecek",
    price: "15 ₺",
    img: "https://productimages.hepsiburada.net/s/19/1500/9841239916594.jpg",
    desc: ``,
  },
  {
    id: 34,
    title: "Pepsi",
    category: "İçecek",
    price: "20 ₺",
    img: "https://nebilcdn.blob.core.windows.net/citylinux/0024528_pepsi-250-ml_510.jpg",
    desc: ``,
  },
  {
    id: 35,
    title: "Yedigün",
    category: "İçecek",
    price: "20 ₺",
    img: "http://www.demtaskapinda.com/Uploads/UrunResimleri/buyuk/yedigun-portakal-kutu-250-ml-781a.jpg",
    desc: ``,
  },
  {
    id: 35,
    title: "Sprite",
    category: "İçecek",
    price: "20 ₺",
    img: "https://pizzaroma.com.tr/udibygry/2021/11/icecekler-sprite.jpg",
    desc: ``,
  },
  {
    id: 35,
    title: "Su",
    category: "İçecek",
    price: "5 ₺",
    img: "https://images.ofix.com/product-image/Erikli-Su-500-Ml-12-Li-Paket_RI23495FT1MF130547-buyuk.jpg",
    desc: ``,
  },
  {
    id: 35,
    title: "Çay",
    category: "İçecek",
    price: "",
    img: "https://www.ofmark.com/blog/wp-content/uploads/2020/04/%C3%87ayDemleme_1-1170x780.jpg",
    desc: `İkramımızdır.`,
  },
];

const btnContainerDOM = document.querySelector(".btn-container");
const menuContainerDOM = document.querySelector(".section-center");
const btnList = ["Çorba", "Kebap", "Salata", "Meze", "Tatlı", "İçecek"];

// Adding Menu Buttons - with createElement
btnList.forEach((value) => {
  let button = document.createElement("button");
  button.innerHTML = value;
  button.classList.add("btn", "btn-outline-dark", "btn-item");
  button.setAttribute("data-id", value);
  button.addEventListener("click", buttonClick);
  btnContainerDOM.append(button);
});

// Clicking Menu Buttons
function buttonClick() {
  const result =
    this.getAttribute("data-id") == "All"
      ? menu
      : menu.filter((item) => {
          return item.category == this.getAttribute("data-id");
        });
  addMenu(result);
}

// Adding Menu Items - with Template literals
function addMenu(showMenu) {
  menuContainerDOM.innerHTML = ""; //container clear
  for (let item in showMenu) {
    let menuItem = document.createElement("div");
    menuItem.classList.add("menu-items", "col-lg-5");
    menuItem.innerHTML = `
    <div class= "menu-info">
      <div class="menu-title">
        <h5 class="col-8">${showMenu[item].title}</h5>
        <h6 class="price">${showMenu[item].price}</h6>
      </div>
      <div class="menu-text">
      ${showMenu[item].desc}
      </div>
    </div>
    <img src= "${showMenu[item].img}" alt= "${showMenu[item].title}" class="photo">`;
    menuContainerDOM.append(menuItem);
  }
}

// Show all items at startup
addMenu(menu);
