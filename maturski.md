**JU SREDNJA ELEKTROTEHNIČKA ŠKOLA**  
**ZENICA**  
**Školska godina: 2025/2026.**  
   
   
   
   
   
   
**MATURSKI RAD**  
   
Tema:  
***Izrada Web stranice***  
   
   
   
   
**Mentor: **Edin Heco, dipl. ing. **Učenik: **Ishak Skomorac  
**Predmet: **Računari i programiranje  
**Smjer: **Elektrotehničar računarske tehnike i automatike  
   
   
   
Zenica, juni 2026. godine  
   
   
**SADRŽAJ**  
I.     UVOD3  
II.    OSNOVE WEB TEHNOLOGIJA4  
2.1  Šta je web stranica?4  
2.2  Vrste web stranica5  
2.3  Komponente web stranice6  
III.   HTML – OSNOVA SVAKE WEB STRANICE7  
3.1  Struktura HTML dokumenta7  
3.2  Osnovni HTML elementi8  
3.3  HTML forme10  
IV.   CSS – STILIZOVANJE WEB STRANICE11  
4.1  Šta je CSS?11  
4.2  Selektori i pravila12  
4.3  Raspored elemenata – Layout13  
V.    JAVASCRIPT – INTERAKTIVNOST14  
5.1  Uvod u JavaScript14  
5.2  DOM manipulacija15  
5.3  Događaji i funkcije16  
VI.   PRAKTIČAN PRIMJER – IZRADA WEB STRANICE17  
6.1  Planiranje i dizajn web stranice17  
6.2  Izrada strukture – HTML18  
6.3  Stilizovanje – CSS19  
6.4  Dodavanje interaktivnosti – JavaScript21  
VII.  ZAKLJUČAK23  
VIII. LITERATURA24  
   
   
**I. UVOD**  
U savremenom digitalnom dobu, internet je postao nezaobilazan dio svakodnevnog života. Gotovo svaka kompanija, institucija ili pojedinac koji želi biti prisutan u javnosti mora posjedovati svoju web stranicu. Web stranice su postale primarni način komunikacije između organizacija i njihovih korisnika, kupaca ili posjetilaca. Iz tog razloga, znanje o izradi web stranica predstavlja jednu od najvažnijih i najtraženijih vještina u oblasti informacionih tehnologija danas.  
Ovaj maturski rad bavi se temom izrade web stranice, s ciljem da prikaže sve ključne korake, tehnologije i metode koje su potrebne za kreiranje moderne, funkcionalne i vizuelno privlačne web stranice. Rad je rađen u okviru predmeta Računari i programiranje, koji je jedan od temeljnih predmeta u obrazovnom programu smjera Elektrotehničar računarske tehnike i automatike.  
Tema je odabrana jer su web tehnologije danas prisutne u gotovo svim granama industrije i nauke. Razumijevanje principa na kojima funkcionišu web stranice – od strukture HTML dokumenata, stilizacije putem CSS-a, do dinamičkih funkcionalnosti koje pruža JavaScript – predstavlja temelj za dalje bavljenje programiranjem i razvoj softvera.  
Svrha ovog rada je da učenik pokaže stečena znanja iz oblasti web programiranja, te da kroz praktičan primjer demonstrira sposobnost samostalne izrade web stranice. Rad nije ograničen na teorijsko objašnjenje pojmova, već uključuje i konkretne primjere koda i opis procesa izrade.  
Rad je podijeljen u šest glavnih poglavlja. Poglavlje II daje uvod u osnove web tehnologija i objašnjava šta je web stranica i od čega se sastoji. Poglavlja III, IV i V obrađuju tri temeljne tehnologije web razvoja: HTML, CSS i JavaScript. Poglavlje VI opisuje praktičan primjer izrade web stranice, od planiranja do implementacije. Na kraju, poglavlje VII donosi zaključna razmatranja o važnosti web tehnologija i stečenim iskustvima.  
   
**II. OSNOVE WEB TEHNOLOGIJA**  
**2.1  Šta je web stranica?**  
Web stranica (engl. web page) je digitalni dokument koji je dostupan putem interneta i koji se prikazuje u web pretraživaču (browseru). Za razliku od obične datoteke na računaru, web stranica je kreirana u posebnim programskim jezicima koji pretraživaču govore kako da prikaže sadržaj – tekst, slike, video materijale, linkove i mnoge druge elemente.  
Web stranice su međusobno povezane hiperlinkovima i zajedno čine World Wide Web (WWW). Svaka web stranica ima svoju jedinstvenu adresu, poznatu kao URL (Uniform Resource Locator), koja korisnicima omogućava da je pronađu i pristupe njenom sadržaju. Na primjer, adresa www.google.com je URL koji nas vodi na početnu stranicu jednog od najpopularnijih pretraživača na svijetu.  
Da bi web stranica bila dostupna korisnicima, mora biti pohranjena na posebnom računaru koji je stalno priključen na internet – takav računar naziva se web server. Web server prima zahtjeve korisnika, pronalazi traženu stranicu i šalje je nazad korisniku u obliku HTML koda, koji pretraživač zatim interpretira i prikazuje na ekranu.  
   
| |  
|-|  
| **[ OVDJE UBACI SLIKU ]***Preporučena veličina: 12 cm × 8 cm* |   
*Slika 2.1. * *Shematski prikaz komunikacije između klijenta i web servera*  
**💡 Prijedlog: ***Nacrtaj ili pronađi dijagram koji prikazuje: korisnik → pretraživač → internet → web server → odgovor nazad. Ovakav dijagram možeš napraviti besplatno na draw.io ili Canva.com.*  
**2.2  Vrste web stranica**  
Web stranice možemo podijeliti prema različitim kriterijima. Jedna od najvažnijih podjela je prema načinu generisanja sadržaja:  
**Statičke web stranice **su one čiji se sadržaj ne mijenja automatski. Svaki put kada korisnik posjeti stranicu, prikazuje mu se isti sadržaj koji je unaprijed napisan u HTML fajlovima. Ovakve stranice su jednostavne za izradu i hosting, ali zahtijevaju ručno ažuriranje sadržaja. Primjer statičke stranice je jednostavan portfolio ili stranica s kontakt informacijama.  
**Dinamičke web stranice **generišu sadržaj u realnom vremenu, ovisno o zahtjevu korisnika ili podacima iz baze podataka. Sadržaj se može mijenjati bez direktne izmjene HTML koda. Primjeri su e-commerce platforme, društvene mreže i portali s vijestima. Za izradu dinamičkih stranica koriste se serverski programski jezici poput PHP-a, Python-a ili Node.js-a, uz baze podataka.  
Prema namjeni i sadržaju, web stranice možemo podijeliti na: informativne stranice (prezentacija informacija o kompaniji ili osobi), e-commerce stranice (online prodavnice), blogove i portale, aplikativne web stranice (online alati i servisi), te portale za zabavu i medijske sadržaje.  
   
**2.3  Komponente web stranice**  
Svaka moderna web stranica se sastoji od tri osnovna sloja koji zajedno čine cjelinu. Razumijevanje ove arhitekture ključno je za svakoga ko želi naučiti web razvoj.  
**HTML (HyperText Markup Language) **čini strukturalni sloj web stranice. To je jezik koji definira sadržaj i strukturu: naslove, paragrafe, slike, tabele, forme i linkove. HTML je osnova bez koje ne može postojati nijedna web stranica.  
**CSS (Cascading Style Sheets) **je jezik za stilizovanje koji kontroliše izgled web stranice – boje, fontove, veličine elemenata, raspored na stranici i animacije. Dok HTML definiše šta se prikazuje, CSS određuje kako izgleda.  
**JavaScript **je programski jezik koji web stranici daje interaktivnost i dinamičnost. Pomoću JavaScripta stranica može reagovati na korisnički unos, animirati elemente, učitavati sadržaj bez osvježavanja stranice i komunicirati sa serverom.  
   
| |  
|-|  
| **[ OVDJE UBACI SLIKU ]***Preporučena veličina: 12 cm × 8 cm* |   
*Slika 2.2. * *Troslojna arhitektura web stranice: HTML, CSS i JavaScript*  
**💡 Prijedlog: ***Napravi jednostavan dijagram s tri sloja/bloka: HTML (struktura) → CSS (izgled) → JavaScript (interaktivnost). Možeš ga nacrtati u PowerPointu ili na draw.io i sačuvati kao sliku.*  
   
**III. HTML – OSNOVA SVAKE WEB STRANICE**  
**3.1  Struktura HTML dokumenta**  
HTML (HyperText Markup Language) je standardni jezik za kreiranje web stranica. Razvijen je početkom devedesetih godina prošlog vijeka, a danas je pod nadzorom organizacije W3C (World Wide Web Consortium) koja propisuje standarde za web tehnologije. Trenutna verzija je HTML5, koja donosi brojna poboljšanja u odnosu na starije verzije.  
HTML dokument ima jasno definisanu strukturu koja mora biti poštovana kako bi pretraživač ispravno prikazao stranicu. Svaki HTML dokument počinje deklaracijom tipa dokumenta, zatim slijedi korijenski element i dva osnovna dijela: glava (head) i tijelo (body) dokumenta.  
Element **<head>** sadrži metapodatke o stranici koji nisu vidljivi korisniku, ali su važni za pretraživač i tražilice. Tu se navode: naslov stranice ( **<title>**), charset deklaracija, linkovi na CSS fajlove, meta opisi i ključne riječi.  
Element **<body>** sadrži sav vidljivi sadržaj web stranice – tekst, slike, linkove, tabele, forme i sve ostale elemente koje korisnik vidi u pretraživaču.  
   
| |  
|-|  
| **[ OVDJE UBACI SLIKU ]***Preporučena veličina: 12 cm × 8 cm* |   
*Slika 3.1. * *Osnovna struktura HTML dokumenta prikazana u code editoru (VS Code)*  
**💡 Prijedlog: ***Otvori VS Code (ili Notepad++), napiši osnovnu HTML strukturu (<!DOCTYPE html>, <html>, <head>, <body>) i napravi screenshot ekrana. Ovo je idealno jer pokazuješ vlastiti kod.*  
**3.2  Osnovni HTML elementi**  
HTML se zasniva na konceptu elemenata. Svaki element je definisan tagovima koji su pisani u uglatim zagradama. Većina elemenata ima otvarajući i zatvarajući tag, između kojih se nalazi sadržaj elementa.  
Naslovi u HTML-u se definišu tagovima od <h1> do <h6>, gdje <h1> predstavlja najvažniji, a <h6> najmanje važan naslov. Naslovi imaju veliku ulogu u SEO optimizaciji i pristupačnosti web stranice.  
Paragrafi teksta se pišu unutar <p> tagova. Za prikaz slika koristi se <img> tag koji je samozatvarajući. Atribut src definira putanju do slike, a atribut alt pruža alternativni tekst koji se prikazuje kada slika nije dostupna.  
Linkovi su definirani pomoću <a> (anchor) taga. Atribut href definira odredišnu adresu linka. Atribut target="_blank" otvara link u novom tabu pretraživača.  
Za organizovanje podataka u redove i kolone koriste se tabele, definirane <table> tagom. Liste se kreiraju pomoću <ul> (neuređena lista) ili <ol> (uređena lista) tagova, a svaka stavka liste je označena <li> tagom.  
   
**3.3  HTML forme**  
HTML forme su jedan od najvažnijih interaktivnih elemenata na web stranicama. One omogućavaju korisnicima da unose podatke koji se zatim šalju na server na obradu. Forme se koriste za prijavljivanje korisnika, registraciju, pretragu, naručivanje proizvoda i mnoge druge svrhe.  
Forma se definira <form> tagom koji ima dva ključna atributa: action (definira URL na koji se podaci šalju) i method (definira metodu slanja – GET ili POST). Metoda GET šalje podatke kao dio URL adrese i koristi se za pretrage, dok metoda POST šalje podatke skriveno u tijelu zahtjeva i koristi se za slanje osjetljivih informacija.  
Unutar forme nalaze se različiti tipovi ulaznih polja: tekstualna polja, polja za e-mail, polja za lozinku, textarea za duži tekst, radio dugmadi, checkboxovi i dugmad za slanje.  
   
| |  
|-|  
| **[ OVDJE UBACI SLIKU ]***Preporučena veličina: 12 cm × 8 cm* |   
*Slika 3.2. * *Primjer HTML forme prikazane u web pretraživaču*  
**💡 Prijedlog: ***Napravi jednostavnu HTML formu (s poljima za ime, e-mail i poruku) i otvori je u pretraživaču. Napravi screenshot kako forma izgleda u pretraživaču – prikazuje razliku između HTML koda i vizuelnog rezultata.*  
   
**IV. CSS – STILIZOVANJE WEB STRANICE**  
**4.1  Šta je CSS?**  
CSS (Cascading Style Sheets – Kaskadni listovi stilova) je jezik koji se koristi za opisivanje prezentacije HTML dokumenta, odnosno za definisanje izgleda i rasporeda elemenata na web stranici. CSS je razvijen s ciljem da se odvoji sadržaj (HTML) od prezentacije (izgled), što znatno olakšava održavanje i ažuriranje web stranica.  
Postoje tri načina dodavanja CSS-a HTML dokumentu: eksterni CSS (u zasebnom .css fajlu – preporučen pristup), interni CSS (unutar <style> taga u <head> sekciji) i inline CSS (direktno unutar HTML elementa putem atributa style).  
   
| |  
|-|  
| **[ OVDJE UBACI SLIKU ]***Preporučena veličina: 12 cm × 8 cm* |   
*Slika 4.1. * *CSS Box Model – prikaz margina, padding-a, bordera i sadržaja elementa*  
**💡 Prijedlog: ***Pronađi ili napravi dijagram CSS Box Model-a (Content → Padding → Border → Margin). Ovaj model je temelj CSS-a i svaki tutorial ga prikazuje. Možeš ga pronaći na MDN web stranici ili nacrtati u Canva.com.*  
**4.2  Selektori i pravila**  
CSS pravilo sastoji se od selektora i deklaracijskog bloka. Selektor definira koji HTML element treba stilizovati, a deklaracijski blok u vitičastim zagradama sadrži jednu ili više deklaracija.  
Postoji nekoliko vrsta selektora. Selektor elementa primjenjuje stilove na sve elemente određene vrste. Selektor klase (.naziv-klase) primjenjuje stilove na sve elemente koji imaju određenu klasu. Selektor ID-a (#naziv-id) primjenjuje stilove na tačno jedan element s određenim ID-om.  
Pseudoklase su posebna vrsta selektora koja primjenjuje stilove u određenim stanjima elementa: :hover (miš iznad elementa), :active (tokom klika), :focus (fokusirani element), :first-child i :last-child.  
Neka od najvažnijih CSS svojstava su: color, background-color, font-family, font-size, margin, padding, border, width i height.  
   
**4.3  Raspored elemenata – Layout**  
Raspored elemenata na stranici jedan je od najvažnijih aspekata web dizajna. CSS pruža nekoliko metoda za postavljanje elemenata na stranicu, od kojih su Flexbox i Grid najmodernije i najčešće korištene.  
**CSS Flexbox **je jednosmjerni raspored koji omogućava raspoređivanje elemenata u redove ili kolone. Flexbox je odličan za poravnanje elemenata unutar jednog reda ili kolone, za centriranje sadržaja i za kreiranje navigacijskih traka.  
**CSS Grid **je dvosmjerni sustav rasporeda koji omogućava postavljanje elemenata u redove i kolone istovremeno. Grid je idealan za kreiranje kompleksnih layouta web stranica.  
**Responzivni dizajn **je pristup u web dizajnu koji osigurava da web stranica ispravno izgleda na svim uređajima – od mobilnih telefona do desktop računara. Postiže se pomoću CSS media query-ja.  
   
| |  
|-|  
| **[ OVDJE UBACI SLIKU ]***Preporučena veličina: 12 cm × 8 cm* |   
*Slika 4.2. * *Usporedba iste stranice na desktop i mobilnom uređaju – responzivni dizajn*  
**💡 Prijedlog: ***Otvori svoju web stranicu u Chrome pretraživaču, pritisni F12 da otvoriš DevTools, a zatim klikni na ikonu mobilnog uređaja za prikaz na telefonu. Napravi screenshot oba prikaza i postavi ih jedan pored drugog.*  
   
**V. JAVASCRIPT – INTERAKTIVNOST**  
**5.1  Uvod u JavaScript**  
JavaScript je dinamički, interpretirani programski jezik koji je izvorno kreiran za potrebe web razvoja. Razvio ga je Brendan Eich 1995. godine, a danas je jedan od najpopularnijih programskih jezika na svijetu. JavaScript se izvodi direktno u web pretraživaču, bez potrebe za kompajliranjem.  
Dok HTML definiše strukturu, a CSS izgled web stranice, JavaScript joj daje život. Pomoću JavaScripta moguće je: validirati korisničke unose u formama, prikazivati i skrivati elemente stranice, kreirati animacije, učitavati novi sadržaj bez osvježavanja stranice i komunicirati s web servisima i API-jima.  
JavaScript je s godinama izrastao iz jednostavnog skript-jezika za web stranice u punopravni programski jezik koji se koristi i na serverskoj strani (Node.js), za razvoj mobilnih aplikacija, desktop aplikacija i IoT uređaja.  
   
**5.2  DOM manipulacija**  
DOM (Document Object Model) je programski interfejs koji predstavlja HTML dokument kao stablo objekata. Svaki HTML element, atribut i tekst su čvorovi u ovom stablu. JavaScript pristupa i manipulira HTML dokumentom putem DOM-a, što mu omogućava dinamičko mijenjanje sadržaja, strukture i stilova stranice.  
Pristupanje elementima DOM-a vrši se pomoću metoda: document.getElementById(), document.querySelector(), document.querySelectorAll() i document.getElementsByClassName().  
Nakon pronalaska elementa, može se mijenjati njegov sadržaj (innerHTML ili textContent), atributi, klase (classList.add, remove, toggle) i stilovi. Moguće je i kreirati nove elemente i dodavati ih u DOM, te uklanjati postojeće.  
   
| |  
|-|  
| **[ OVDJE UBACI SLIKU ]***Preporučena veličina: 12 cm × 8 cm* |   
*Slika 5.1. * *Prikaz DOM stabla HTML dokumenta u Chrome DevTools konzoli*  
**💡 Prijedlog: ***Otvori svoju web stranicu u Chrome pretraživaču, pritisni F12, odaberi tab "Elements" i napravi screenshot. Vidjet će se DOM stablo elemenata – idealan prikaz za ovo poglavlje.*  
**5.3  Događaji i funkcije**  
Događaji (events) su akcije ili pojave koje se dešavaju u pretraživaču i na koje JavaScript može reagovati: klik miša, pomak miša, pritisak tipke, slanje forme ili učitavanje stranice.  
Funkcije su temeljni blokovi JavaScripta. One grupišu kod koji obavlja određeni zadatak i mogu se pozivati višestruko. JavaScript podržava deklarisanje funkcija ključnom riječi function, ali i modernu sintaksu streličastih funkcija (arrow functions) uvedenu u ES6 standardu.  
Moderan JavaScript (ES6+) uvodi brojna poboljšanja: let i const za deklaraciju varijabli, template literals, destrukturiranje, spread operator, Promises i async/await za asinhrone operacije te uvoz i izvoz modula.  
   
**VI. PRAKTIČAN PRIMJER – IZRADA WEB STRANICE**  
**6.1  Planiranje i dizajn web stranice**  
Svaka ozbiljna izrada web stranice počinje fazom planiranja. Bez jasno definisanih ciljeva, ciljne publike i strukture stranice, izrada može postati haotična i rezultati neće zadovoljiti korisničke potrebe.  
U prvom koraku definišemo svrhu i ciljeve stranice. U ovom praktičnom primjeru izradili smo osobnu portfolio stranicu učenika koja prikazuje biografiju, vještine, projekte i kontakt informacije.  
Drugi korak je definisanje strukture – tzv. site mapa. Za našu portfolio stranicu definisali smo sljedeće sekcije: Hero sekcija s imenom i kratkim opisom, O meni (About) sekcija, Vještine (Skills) sekcija, Projekti (Projects) sekcija i Kontakt (Contact) forma.  
Treći korak je izrada wireframe-a – grube skice rasporeda elemenata na stranici. Wireframe se može nacrtati na papiru ili u digitalnom alatu i ne mora biti vizualno detaljan. Njegova svrha je da definiše gdje će se nalaziti koji elementi.  
   
| |  
|-|  
| **[ OVDJE UBACI SLIKU ]***Preporučena veličina: 12 cm × 8 cm* |   
*Slika 6.1. * *Wireframe skica rasporeda elemenata portfolio web stranice*  
**💡 Prijedlog: ***Napravi rukom nacrtanu skicu na papiru koja prikazuje raspored sekcija (navigacija, hero, o meni, vještine, projekti, kontakt) i slikaj je telefonom. Ručno nacrtani wireframe je sasvim prihvatljiv i daje autentičan izgled radu.*  
**6.2  Izrada strukture – HTML**  
HTML struktura naše portfolio stranice kreirana je prema principima semantičkog HTML-a. Semantički HTML znači korišćenje HTML elemenata prema njihovoj namjeni, što poboljšava pristupačnost i olakšava indeksiranje od strane tražilica.  
Na vrhu dokumenta se nalazi navigacija, implementirana pomoću <nav> elementa koji sadrži logo i listu linkova. Hero sekcija sadrži naslov s imenom, kratki opis i dugme za kontakt. Sekcija "Vještine" prikazuje listu tehnologija u obliku kartica s progresnim trakama. Sekcija "Projekti" prikazuje kartice projekata, svaka s naslovnom slikom i kratkim opisom.  
Posebna pažnja posvećena je semantičkim elementima HTML5: <header>, <nav>, <main>, <section>, <article>, <aside> i <footer>. Ovi elementi, za razliku od generičkih <div> elemenata, nose semantičko značenje i pomažu pretraživačima da bolje razumiju strukturu stranice.  
   
| |  
|-|  
| **[ OVDJE UBACI SLIKU ]***Preporučena veličina: 12 cm × 8 cm* |   
*Slika 6.2. * *HTML kod portfolio stranice prikazan u VS Code editoru*  
**💡 Prijedlog: ***Otvori HTML fajl tvoje portfolio stranice u VS Code editoru i napravi screenshot koda. Poželjno je da se vidi semantička struktura: <nav>, <header>, <section>, <footer> tagovi. Ovo dokazuje da si sam/a pisao/la kod.*  
**6.3  Stilizovanje – CSS**  
CSS stilovi organizovani su u jedan vanjski fajl style.css, koji je podijeljen u logičke sekcije komentarima. Na početku fajla definisane su CSS varijable (custom properties) unutar :root selektora.  
Paleta boja naše stranice zasnovana je na tamnoj temi (dark theme) koja je popularna u portfolijima tehničkih stručnjaka. Primarna boja pozadine je tamno siva, dok je akcent boja živahan plavo-ljubičasti za dugmad i istaknute elemente.  
Tipografija koristi Google Fonts – Roboto za tekst i Roboto Mono za prikaz koda. Veličina baze teksta je 16px, s relativnim veličinama za naslove.  
Navigacija je stilizovana kao fiksna traka na vrhu (position: fixed) s efektom transparentnosti koji prelazi u punu boju pri skrolanju stranice. Kartice projekata i vještina implementiraju hover efekte koji podižu karticu i dodaju sjenu, što daje dojam dubine i interaktivnosti.  
Responzivni dizajn implementiran je sa četiri breakpoint-a: mobilni uređaji (do 480px), tableti (do 768px), mali desktop (do 1024px) i veliki desktop (iznad 1024px). Na mobilnim uređajima dvostupčani layout prelazi u jednostupčani, a navigacijski meni prelazi u hamburger format.  
   
| |  
|-|  
| **[ OVDJE UBACI SLIKU ]***Preporučena veličina: 12 cm × 8 cm* |   
*Slika 6.3. * *Finalni izgled portfolio web stranice u Google Chrome pretraživaču – desktop prikaz*  
**💡 Prijedlog: ***Ovo je NAJVAŽNIJA slika u cijelom radu! Otvori svoju web stranicu u Chrome pretraživaču i napravi screenshot cijele početne stranice. Ako stranica nije gotova, napravi je makar sa základnom strukturom i bazičnim stilovima, pa slikaj.*  
   
| |  
|-|  
| **[ OVDJE UBACI SLIKU ]***Preporučena veličina: 12 cm × 8 cm* |   
*Slika 6.4. * *Prikaz portfolio web stranice na mobilnom uređaju*  
**💡 Prijedlog: ***U Chrome DevTools (F12) klikni na ikonu mobilnog uređaja i odaberi npr. "iPhone 12 Pro". Napravi screenshot mobilnog prikaza. Ovo prikazuje da si implementirao/la responzivni dizajn.*  
**6.4  Dodavanje interaktivnosti – JavaScript**  
JavaScript kod za našu stranicu organizovan je u jedan vanjski fajl script.js, koji se učitava na dnu <body> sekcije kako bi se osiguralo da je HTML u potpunosti učitan prije nego što JavaScript počne manipulisati DOM-om.  
Hamburger meni za mobilne uređaje implementiran je dodavanjem event listenera na hamburger dugme koji toggle-uje klasu "active" na navigacijskom elementu. CSS zatim kontroliše vidljivost i animaciju menija na osnovu te klase.  
Glatko skrolanje (smooth scrolling) do sekcija implementirano je pomoću JavaScript metode scrollIntoView() s opcijom behavior: "smooth". Svaki link u navigaciji ima event listener koji sprečava zadano ponašanje linka i glatko skroluje do ciljane sekcije.  
Animacija progresnih traka za vještine implementirana je koristeći Intersection Observer API – modernu JavaScript funkcionalnost koja prati kada element ulazi u vidljivo područje ekrana (viewport). Kada korisnik skroluje do sekcije vještina, Intersection Observer detektuje vidljivost i pokreće CSS animaciju progresnih traka.  
Forma za kontakt je validirana JavaScript kodom koji provjerava popunjenost polja, ispravnost e-mail adrese i minimalni broj karaktera poruke. U slučaju greške prikazuju se odgovarajuće poruke pored odgovarajućih polja.  
   
| |  
|-|  
| **[ OVDJE UBACI SLIKU ]***Preporučena veličina: 12 cm × 8 cm* |   
*Slika 6.5. * *JavaScript kod za animaciju progresnih traka prikazan u VS Code editoru*  
**💡 Prijedlog: ***Napravi screenshot JS koda (funkcija za Intersection Observer ili smooth scroll) u VS Code-u. Kratki, jasni isječak koda (10-20 linija) je bolji od dugačkog screenshota. Možeš i označiti ključne linije.*  
   
**VII. ZAKLJUČAK**  
Izrada web stranice je složen ali veoma uzbudljiv proces koji zahtijeva poznavanje više tehnologija i principa. Kroz rad na ovom maturskom projektu stečeno je dragocjeno praktično iskustvo koje nadopunjuje teorijska znanja iz predmeta Računari i programiranje.  
U teorijskom dijelu rada prikazano je da web stranica nije samo HTML dokument, već kompleksna cjelina sastavljena od tri temeljna sloja: HTML-a koji definiše strukturu i sadržaj, CSS-a koji kontroliše izgled i raspored, te JavaScripta koji dodaje interaktivnost i dinamičnost.  
HTML5 je pokazao koliko je napredovao u odnosu na starije verzije uvođenjem semantičkih elemenata koji poboljšavaju pristupačnost i SEO optimizaciju. CSS3 je proširio mogućnosti stilizovanja animacijama, tranzicijama i modernim rasporednim sistemima Flexbox i Grid. JavaScript, naročito s modernim ES6+ standardom i API-jima poput Intersection Observer-a, omogućava kreiranje korisničkih iskustava koja konkurišu nativnim aplikacijama.  
Praktičan dio rada – izrada portfolio web stranice – potvrdio je teorijske osnove. Implementacija responzivnog dizajna naučila je koliko je važno razmišljati o korisnicima mobilnih uređaja, koji danas čine više od polovine web prometa. Organizacija koda u zasebne fajlove i korišćenje semantičkog HTML-a pokazala je važnost čistog, dobro strukturiranog koda koji je lako održavati i proširivati.  
Kao posebno vrijedan zaključak ističe se da izrada web stranica nije samo tehnički zadatak – ona zahtijeva i dizajnersko razmišljanje, razumijevanje korisničkih potreba i sposobnost planiranja projekta. Web tehnologije se razvijaju brzim tempom, pa je kontinuirano učenje neophodnost za svakoga ko se želi baviti ovom oblasti. Znanja stečena kroz ovaj rad predstavljaju solidnu osnovu za dalje bavljenje web razvojem i informacionim tehnologijama.  
   
**VIII. LITERATURA**  
Izvori korišćeni pri izradi ovog maturskog rada:  
   
**[1] **Duckett, J. (2011). *HTML & CSS: Design and Build Websites.* Indianapolis: John Wiley & Sons.  
**[2] **Duckett, J. (2014). *JavaScript & jQuery: Interactive Front-End Web Development.* Indianapolis: John Wiley & Sons.  
**[3] **Flanagan, D. (2020). *JavaScript: The Definitive Guide (7th Edition).* Sebastopol: O'Reilly Media.  
**[4] **Meyer, E. A. i Weyl, E. (2017). *CSS: The Definitive Guide (4th Edition).* Sebastopol: O'Reilly Media.  
**[5] **MDN Web Docs – Mozilla Developer Network. *HTML Reference.* Dostupno na: https://developer.mozilla.org/en-US/docs/Web/HTML [pristupljeno: april 2026.]  
**[6] **MDN Web Docs – Mozilla Developer Network. *CSS Reference.* Dostupno na: https://developer.mozilla.org/en-US/docs/Web/CSS [pristupljeno: april 2026.]  
**[7] **MDN Web Docs – Mozilla Developer Network. *JavaScript Guide.* Dostupno na: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide [pristupljeno: april 2026.]  
**[8] **W3Schools. *HTML Tutorial.* Dostupno na: https://www.w3schools.com/html/ [pristupljeno: april 2026.]  
**[9] **W3C – World Wide Web Consortium. *HTML5 Specification.* Dostupno na: https://www.w3.org/TR/html52/ [pristupljeno: april 2026.]  
**[10] **Syed, B. (2018). *Beginning HTML5 and CSS3: The Web Evolved.* New York: Apress.  
   
**KOMENTAR**  
Komentar mentora:  
   
   
   
   
   
   
   
   
   
Datum odbrane rada: __.__. 2026. godine  
   
OCJENA: ________________________  
   
   
Članovi komisije:  
1. _________________________________  
2. _________________________________  
3. _________________________________  
