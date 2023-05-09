const allArticles = [];

class Articles {
  constructor(
    title,
    articleDescription,
    author,
    category,
    image,
    imageDescription,
    dateOfPublish,
    articleLocation
  ) {
    this.title = title;
    this.articleDescription = articleDescription;
    this.author = author;
    this.category = category;
    this.image = image;
    this.imageDescription = imageDescription;
    this.dateOfPublish = dateOfPublish;
    this.articleLocation = articleLocation;
    allArticles.push(this);
  }
}

const article1 = new Articles(
  "Сенке Жрнова",
  `Утврђење Жрнов се налазило на највишој авалској коти, на месту где
се данас налази споменик Незнаном јунаку. Према фрагментованим
историографским подацима о Жрнову, време његовог подизања се смешта
у прву половину XV века.`,
  "Стефан Новаковић",
  "друштво",
  "senke_zrnova_StefanNovakovic.jpg",
  "Zrnov, skice Feliksa Kanica ",
  "4/14/2023",
  "senke_zrnova_StefanNovakovic"
);

const article2 = new Articles(
  "Почетак филма у Србији",
  `Званично први играни филм у Србији је Живот и дела бесмртног вожда Карађорђа. Редитељ овог филма (уједно и први српски редитељ) био је Чича Илија Станојевић – написао и сценарио за овај филм уз сарадњу
Ћире Монока.`,
  "Александар Ђокић",
  "Култура",
  "pocetak_filma_u_srbiji_AleksandarDjokic.jpg",
  "Scena iz filma maratonci trce pocasan krug",
  "4/14/2023",
  "pocetak_filma_u_srbiji_AleksandarDjokic"
);

const article3 = new Articles(
  "СТЕНЛИ КЈУБРИК И ОДНОС С ГЛУМЦИМА",
  ` У документарном филму Вивијан Кјубрик (Макing ,,The Shining” - а
    film by Vivian Kubrick), уочавамо психичко стање Шели Дувал током
    снимања. У једној од сцена, док је шминкају, она бесомучно понавља
    текст, док испред ње стоји пиксла с пикавцима, који представљају
    њену нервозу.`,
  "Јована Новаковић",
  "Култура",
  "stenli_kjubrik_i_odnos_s_glumcima.webp",
  "Stenli Kjubrik",
  "4/14/2023",
  "stenli_kjubrik_i_odnos_s_glumcima"
);
const article4 = new Articles(
  `ТРАДИЦИЈА КАО ВРХУНСКА УМЕТНОСТ КОНЦЕРТ ТРАГОВИ ИЗ САЗВЕЖЂА РЕГУЛА
ДАРИ У ЧАСТ`,
  ` Поводом завршне вечери 56. Мокрањчевих дана Академски женски хор
  Collegium musicum наступио је програмом Трагови из Сазвежђа Регула.
  Програм је посвећен Даринки Матић Маровић, диригенту, професору
  емеритусу Факултета музичке уметности у Београду.`,
  "Златан Поповић Фуртунић",
  "Култура",
  "tradicija_kao_vrhunska_umetnost_koncert_tragovi_iz_sazvezdja_regula_dari_u_cast.jpg",
  "Violina i note",
  "4/14/2023",
  "tradicija_kao_vrhunska_umetnost_koncert_tragovi_iz_sazvezdja_regula_dari_u_cast"
);

const article5 = new Articles(
  "ДЕФОРЕСТАЦИЈА И ЕКОЛОШКИ АКТИВИЗАМ У СРБИЈИ У 19. ВЕКУ",
  `Разни путописци, попут Ота Пирха и Алфонса Ламартина, описивали су
  скоро непроходне српске шуме 1830-их.`,
  "Марија Краљ",
  "Друштво",
  "deforestacija_i_ekoloski_aktivizam_u_srbiji_MarijaKralj.jpg",
  "Posecena stabla opustostosenih suma",
  "4/14/2023",
  "deforestacija_i_ekoloski_aktivizam_u_srbiji_u_19_veku"
);

const article6 = new Articles(
  "НАЦИОНАЛНИ ИДЕНТИТЕТ И СВЕТИ ПЕТАР ЦЕТИЊСКИ",
  `Данас се Србима у Црној Гори (и онима пореклом из ње) често оспорава
  било каква српска национална припадност, као и чињеница да су се
  преци Црногораца у позно модерно доба сматрали националним Србима.`,
  "Срђан Калањ",
  "Друштво",
  "article__3.jpg",
  "Njegoševa kapela na Lovćenu",
  "nacionalni_identitet_i_sveti_petar_cetinjski.webp",
  "nacionalni_identitet_i_sveti_petar_cetinjski"
);

const article7 = new Articles(
  "БАН КУЛИН",
  ` ,,Од Кулина бана, и добријех дана“ и ,,Кад је Куљен по свету ходио“.
Са изузетком једног војног похода којег је против Византије водио
1183, Босна је његову владавину провела у миру.`,
  "Михајло Бабић",
  "Друштво",
  "ban_kulin.webp",
  "Ban Kulin",
  "4/14/2023",
  "ban_kulin"
);

const article8 = new Articles(
  "ЗМАЈЕВ РЕД И ДЕСПОТ СТЕФАН ЛАЗАРЕВИЋ",
  ` Оснивање Змајевог реда је представљало један важан догађај за
југоисточну Европу и Балкан, а самим тим и средњовековну Србију. Ред
је званично основан 12. Децембра 1408. године.`,
  "Илија Костадиновић",
  "Друштво",
  "zmajev_red_despot_stefan_lazarevic.jpg",
  "Grb Despota Stefana Lazarevica",
  "4/14/2023",
  "zmajev_red_despot_stefan_lazarevic"
);

export { allArticles };
