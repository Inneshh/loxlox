const express = require('express');
const app = express();
const db = require('quick.db')
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  } 
}
const http = require('http');
app.get("/", (request, response) => {
  console.log(Date.now() + "innej yaxsi oglan");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000) 
const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
const data = new Map();

client.once('ready', () => {
  console.log('Bot is ready!');
  client.user.setPresence({
    status: 'dnd', // Set status to "Do Not Disturb"
    activity: {
      name: '/azeri',
      type: 'WATCHING'
    }
  });
});


const innesh = new Discord.Client();
innesh.login(process.env.token1) 


const mesaj = [
"Salam brat",
"As qaqaw",
"Necesen",
"Şükür yaxşıyam sen necəsən",
"Yaxşıyam mende brat",
"Yaxşı olasan",
"Amin",
"Heyat nece gedir",
"Yaxşıdı brat",
"Mende de pox kimidi",
"Düzeler qaqas insallah",
"Sence neqrlar ölmelidir?",
"Yox mence onlar da insandır",
"Bütün neqr götler peyserdi",
"Ayıbdıye qaqaş",
"Neyniyim",
"Dombal kleyliyim",
"Oğraş senin anavı sikim",
"Cindir",
"Brat o gün gezirdim yolda gördüm nihadın atası siqaret çəkir ala hə dedimki niyə siqaret çəkirsən oğraş balası çöndü mene vurmağa gonbul şeydi bidene şapalağ qoydum dombaldı yere mende açdım götünü şapatdadım ki ay oğraş get uşağlarıva yemek al siqaret nedi bidə səni siqaretnən görsəm öldürərəm səni oğraş başdadı üzr istemeye",
"Sora mindi maşına baxdı gördü uşağı maşını vurub buferini qırıb eleyib o deyqe zeng eledi eve oğlum gəl evə o rolu sənin götvə soxacam oğraşın balası sora getdi eve uşağı 9 cu mərtəbədən atdı göt baş elədi uşağını xiyar balası bidənə buferdidə buferdən ötrü uşağı öldürdü uşağın organlarını satıb təzə maşın alabilərdi ama başı çatmırda hahahahaha lox balası",
"İlk antibiotik 1929-cu ildə penisilini Aleksandr Fleminq tərəfindən kəşf edilmişdir. O, təsadüfən sevgi hormonlarının inkişafını dayandıran penisillin adlı kif göbələyini aşkar etmişdir.Antibiotik terminini isə çox sonralar – 1942-ci ildə ilk dəfə Zelman Vaksman işlətmişdir. Aleksandr Fleminq təcrübələr apararkən müşahidə etmişdir ki, içərisində xəstəliktörədici stafilokok mikrobu olan Petri çaşkalarının birindəki mikrob kulturasında yaşıl penisil koloniyası böyüyür, onun yaxınlığındakı stafiloklar isə yox olur. Fleminq bunun əsasında kiflərin stafilokokları dayandıran bir maddə ifraz eləməli olduğunu nəticəsini çıxardı . O vaxt hələ saf halda alına bilməyən bu maddəni o, penisilin adlandırmışdır. On illər keçdikdən sonra ingilis bioloqları Xovard Flori və Ernest Çeyn Aleksadr Fleminqin məlumatlarından istifadə edərək göbələyin inkişaf etdiyi mayedən kristallik penisillini ayırdılar. Penisillinin kimyəvi sintezi 1946-cı ildə həyata keçirildi. 1949-cu ildə isə rentgenoqrafik quruluşu müəyyən edildi. Artıq 1940-cı ildə yeni dərman tibdə geniş tətbiq olunurdu.Antibiotiklərin onları sintez edən miktoorqanizmlər üçün fizioloji əhəmiyyəti tam aydın deyil. Bu məhsulun mikroblarının özlərinin əsas həyat prosesləri – böyümə, inkişaf, maddələr mübadiləsi prosesləri ilə əlaqəsi olmadığı iddia olunur. Bəzi tədqiqatçıların fikrincə, antibiotik onu sintez edən mikroblara təbii populyasiyalarda yaşayış uğrunda mübarizədə üstünlük verir. Digərlərin fikrinə görə isə bu maddələrin onları sintez edən canlı üçün heç bir əhəmiyyəti yoxdur.[2]1940-cı ildən başlayaraq antibiotik maddələr sistematik surətdə öyrənilməyə və bəziləri sənayedə istehsal olunmağa başlanmışdır. İndi 1000-ə yaxın antibiotik maddə məlumdur. Onlardan bir çoxunun quruluşu müəyyən edilmiş və 100-ə yaxın antibiotik maddə sintez üsulu ilə alına bilmişdir.",
"Azərbaycan və ya rəsmi adı ilə Azərbaycan Respublikası — Cənubi Qafqazda yerləşən dövlət. Azərbaycan Xəzər dənizi hövzəsinin qərbində yerləşir. Şimaldan Rusiya (Dağıstan), şimal-qərbdən Gürcüstan, qərbdən Ermənistan, cənub-qərbdən Türkiyə və cənubdan İran ilə həmsərhəddir. Azərbaycanın anklavı olan Naxçıvan Muxtar Respublikası Ermənistanla şimal-şərqdə, İranla qərbdə və Türkiyə ilə şimal-qərbdən həmsərhəddir. Azərbaycanın Xəzər dənizi sektorunda həmçinin Türkmənistan, Qazaxıstan, İran və Rusiya sərhədə malikdir.Azərbaycan şərqdə ilk demokratik və dünyəvi dövlət qurmuşdur. Hazırda Azərbaycan qədim tarix və mədəniyyət irsinə malik dünyəvi və unitar dövlət olub, etnik türk və müsəlman çoxluğuna sahib ölkədir. Azərbaycan altı müstəqil türk dövlətindən biridir. Respublikanın 158 ölkə ilə diplomatik münasibəti var. Ölkəmiz 38 beynəlxalq təşkilatın üzvüdür.Azərbaycan GUAM və Kimyəvi silahdan istifadə qadağası təşkilatlarının təsisçilərindən biridir. 1993-cü ilin sentyabrından Müstəqil Dövlətlər Birliyinin üzvüdür. 9 may 2006-cı ildə Azərbaycan yeni yaradılan BMT insan haqları assambleyasına üzv oldu. Səlahiyyətli nümayəndəlik 19 iyul 2006-cı ildən başlayıb. Azərbaycan həmçinin BMT, ATƏT, Avropa Şurası və NATO-nun sülh naminə tərəfdaşlıq proqramının üzvüdür. Bundan əlavə ölkə Birləşməyənlər Hərəkatı, Beynəlxalq Ticarət Təşkilatı və Beynəlxalq Elektrorabitə İttifaqında müşahidəçi statusuna malikdir.",
"Azərbaycan Respublikasının bayrağı — Azərbaycan Respublikasının rəsmi simvollarından (himn və gerblə birlikdə) biri. Bayraq ilk dəfə 9 noyabr 1918-ci ildə Azərbaycan Xalq Cümhuriyyəti Nazirlər Şurası tərəfindən təsdiq edilmişdir. 5 fevral 1991-ci ildə bayraq həmin il müstəqilliyini elan etmiş Azərbaycan Respublikasının Ali Soveti tərəfindən təsdiq edilmişdir. Azərbaycan Respublikasının Prezidenti İlham Əliyevin sərəncamı ilə Azərbaycanda hər il Dövlət Bayrağı Günü qeyd olunur.",
"Azərbaycanın İstiqlal Bəyannaməsi — 1918-ci il mayın 28-də Tiflisdə Azərbaycan Milli Şurası tərəfindən tərtib olunmuş və imzalanmış, Azərbaycan Xalq Cümhuriyyətinin müstəqilliyini rəsmən elan edən sənəd. Azərbaycan Xalq Cümhuriyyəti cəmi 23 ay fəaliyyət göstərmiş və 1920-ci ildə bolşeviklərin hərbi müdaxiləsi ilə süquta uğradılmışdır. Onun yerində yaranan Azərbaycan Sovet Sosialist Respublikası sonradan SSRİ-nin tərkibinə daxil oldu. SSRİ-nin dağılmasından sonra, 1991-ci il 18 oktyabrda Azərbaycan parlamentinin qəbul etdiyi “Azərbaycan Respublikasının dövlət müstəqilliyi haqqında” Konstitusiya Aktı Azərbaycan Respublikasının siyasi və iqtisadi təməlini qoymuşdur.",
"Hüseyn xan Kəlbəli xan oğlu Naxçıvanski — Rusiya imperiyasının azərbaycan əsilli hərbi xadimi. Tam süvari qoşunu generalı (1916). Naxçıvan xanları ailəsinə mənsub idi. Elit süvari dəstələrinə komandanlıq edirdi. Rus İmperator Ordusunda ilk və yeganə müsəlman general-adyutant olmuşdur. 15 Rusiya və 9 xarici dövlət mükafatlarının kavalieri, o cümlədən döyüş ordenləri olan - 3-cü və 4-cü dərəcə Müqəddəs Georgi ordeni, İgidliyə görə qızıl silaha layiq görülmüşdür. Güman edilir ki, 1919-cu ilin yanvarında bolşeviklər tərəfindən güllələnmişdir.",
"Qafqazın ən qədim kilsəsi Şəkinin Kiş kəndindəki Kiş məbədidir.Sasani şahları tacqoymadan əvvəl Azərbaycanın Qazaka şəhərindəki Azərgüşnasp məbədinə piyada gələrək məbədi ziyarət edirdilər.",
"Türkiyə (türk. Türkiye) və ya rəsmi adı ilə Türkiyə Respublikası (türk. Türkiye Cumhuriyeti) — torpaqlarının əsas hissəsi Qərbi Asiya regionunun Kiçik Asiya yarımadasında, çox kiçik bir hissəsi isə Balkan yarımadasında yerləşən qitələrarası ölkə. Şimal-qərbdən Bolqarıstan, qərbdən Yunanıstan, şimal-şərqdən Gürcüstan, şərqdən Azərbaycan, İran, Ermənistan, cənubdan isə İraq və Suriya ilə həmsərhəddir. Ölkə üç tərəfdən dənizlə əhatə olunmuşdur. Qərbdə Egey dənizi, şimalda Qara dəniz, cənubda isə Aralıq dənizi ilə əhatələnmişdir. Bosfor boğazı, Mərmərə dənizi və Dardanel boğazı ölkənin Avropa və Asiya hissələrini bir-birindən ayırır. Paytaxt Ankara şəhəri olsa da, ölkənin əsas mədəni və iqtisadi mərkəzi, həmçinin ən böyük şəhəri İstanbuldur. Əhalinin təqribən 70-80%-i özünü etnik türk hesab edir. Əhalinin 20%-ə yaxınını təşkil edən kürdlər ölkədə ən böyük etnik azlıq sayılır. Digər etnik azlıqlara adıqlar, albanlar, ərəblər, boşnaklar və lazlar daxildir. Rəsmi dil türk dilidir. Türk dili ilə yanaşı kurmanc, bosniya, ərəb, zaza, kabardin-çərkəz və digər dillərdə danışanlar da azlıq təşkil edir.Müasir Türkiyə ərazisi Paleolit dövründən etibarən müxtəlif xalqlar tərəfindən məskunlaşma mərkəzinə çevrilmişdir. Aysorlar, yunanlar, frigiyalılar, uratular bu ərazilərin ilk sakinləri hesab olunur. Makedoniyalı İsgəndər bu əraziləri ələ keçirdikdən sonra burada yunanlaşma prosesi başlamışdır. Bu proses sonralar Roma İmperiyası və Bizans İmperiyası dövründə də davam etmişdir.",
"Dolmabağça Sarayı — Türkiyə Cümhuriyyətinin İstanbul şəhərində, Mərmərə dənizindən Boğaziçinə gedən yolda, dənizin sol sahilində Üsküdar məhəlləsinin qarşısında yerləşən tarixi saray. Bu gün Dolmabağça sarayının yerləşdiyi ərazi XVII əsrdə Osmanlı donanmasının gəmilərinin saxlandığı limanlardan biri idi. Ənənəvi dənizçilik şənliklərinin təşkil edildiyi bu liman bir müddət sonra bataqlığa dönmüşdü. XVII əsrdə doldurulmasına başlanan bu liman Osmanlı padşahlarının əyləndikləri və istirahət etdikləri bir bağça kimi istifadə edilməyə başlandı. Bu bağçada uzun tarixi zaman ərzində inşa edilmiş köşklər və qəsrlər kompleksi bir müddət Beşiktaş Sahilsarayı adıyla tanınmışdı. XVIII əsrin II yarısına doğru, Türkiyə memarlığında qərb təsirləri görünməyə başlamış və  deyilən memarlıq üslubu, yenə qərb ölkələrinin təsiri ilə tikilən barokko üslublu köşklər, qəsr və saraylar inşa edilməyə başlanmışdır.",
"Mustafa Kamal Atatürk (türk. Mustafa Kemal Atatürk) — Türk Milli Qurtuluş Mübarizəsinin hərbi və siyasi lideri, Türkiyə Respublikasının qurucusu və ilk prezidenti, Kamalizmin yaradıcısı. Mustafa Kamal Atatürk 1881-ci ildə Osmanlı İmperiyasına məxsus Saloniki şəhərində dünyaya gəlmişdir. 1896-1899-cu illərdə müasir Makedoniya ərazisində yerləşən Manastır Hərbi məktəbini bitirərək İstanbul Hərb Məktəbinə qəbul olunmuşdur. 1902-ci ildə leytenant rütbəsi ilə məzun olmuş, Hərbi Akademiyada təhsilinə davam etmişdir. 1905-ci il yanvar ayının 11-də kapitan rütbəsi ilə Akademiyanı bitirmişdir. 1905-1907-ci illər arasında Dəməşqdə 5-ci Orduda xidmət etmiş, 1907-ci ildə adyutant rütbəsi almışdır. Daha sonra Manastıra 3-cü Orduya təyin olunmuşdur. Ölkəsində monarxiyanı ləğv olundu.",
"İstanbul — Türkiyənin ən böyük şəhəri və ölkənin 81 ilindən biri. Ölkənin iqtisadi, tarixi və sosial-mədəni əhəmiyyətli şəhərlərindən biridir. İqtisadi böyüklüyünə görə dünyada 34-cü, əhalisinə görə Avropada birinci, Dünyada isə Laqos şəhərindən sonra altıncı sırada yer alır. İstanbul Türkiyənin şimal-qərbində, Mərmərə dənizi və Bosfor sahili boyunca salınmış şəhərdir. Qitələrarası şəhər olan İstanbulun Avropa hissəsinə Avrupa yakası, Asiyadakı hissəsinə isə Anadolu Yakası deyilir. Üç tərəfi su sahəsi — Mərmərə dənizi, Bosfor və Haliç ilə əhatə olunmuş yarımada üzərində qurulan İstanbulun qərb sərhədi Konstantinopol qala divarlarını meydana gətirir. Şəhərin böyümə və inkişafı prosesində qala divarlarının sərhədləri 4 dəfə qərbə daşınmışdır. Şəhər 39 ilçədən ibarətdir. Son illərdə meydana çıxan arxeoloji tapıntılar bəşəriyyət tarixində mühüm rol oynayır.",
"Türkmənistan(türkm. Türkmenistan) — Orta Asiyada Türk dövlətidir. Cənubda Əfqanıstan və İranla , Şimalda Qazaxıstan və Özbəkistan şimalında, Qərbdə isə Xəzər dənizi ilə sərhəddir.Rəsmi dili Türkmən dilidir. Digər türk dilləri ilə yaxından əlaqələndirilir.Türkmənistan İslam Əməkdaşlıq Təşkilatı, Türk Şurası, TÜRKSOY və Birləşmiş Millətlər Təşkilatının üzvüdür.E.Ə II əsrdə ölkə ərazisində Margiana dövləti mövcud olmuşdur.E.Ə VI-IV əsrlərdə ölkə Makedonyalı İsgəndərin və Əhmənilər dövlətinin hücumuna məruz qalmışdır.E.Ə III əsrdə ölkə Parfiya patşahlığının (Paytaxtı Nisa) daha sonralar isə Əhmənilər dövlətinin tərkibində olu",
"Kopetdag qoruğu — Türkmənistanın Aşqabad vilayətində qorunan bir ərazidir. 1976-cı ildə təsis edilən bu ərazinin 49.800 hektar ərazisi vardır. Ərzinin 46.000-dən çoxu meşə, 3.600-ü isə çəmənlikdir.Dağ çölləri və dağ meşələrinin qorunması ekosistemlərin və Tuqay ağacları,çay kollarının kompleks şəkildə öyrənilməsi üçün yaradılmışdır.Müdafiə olunan ərazidə Mərkəzi Kopetdağın yüksək və orta dağ qurşağı tutur.Qərbdən Arçman stansiyasından şərqdəki Gyaurs stansiyasına qədər uzanır.Relyefi dağlıqdır.Şimal hissəsi bu sıldırım qayalı yamaclarda yerləşir, cənubu isə nisbətən dikdir.Qoruq dəniz səviyəsindən 700-800 metr yüksəklikdə yerləşir.",
"Berdiməhəmmədov (türkm. Gurbanguly Berdimuhammedow) — Türkmənistan dövlət xadimi, 2007-ci ildən etibarən Türkmənistanın ikinci prezidenti.29 iyun 1957-ci ildə Türkmənistan SSR-in Aşqabat vilayətinin Göytəpə rayonunun Babarap kəndində anadan olub.1979-cu ildə Türkmənistan Dövlət Tibb İnstitutunun ilk öncə Stomatologiya fakültəsini, sonradan isə aspiranturasını bitirmişdir. Tibb elmləri namizədidir. Əmək fəaliyyətinə 1980-ci ildə həkim-stomatoloq kimi başlamışdır.1980-ci ildən 1982-ci ilə qədər Ashqabat rayonunun Errik-Kala kəndindəki kənd poliklinikasında diş həkimi işləmişdir. 1982-ci ildən 1985-ci ilədək Aşqabad bölgəsinin aparıcı müstəqil diş həkimi olmuşdur. 1985-1987-ci illərdə Aşqabat rayonu Keşi kənd şurasının Mərkəzi Rayon Xəstəxanasında diş müalicəsi şöbəsinin rəhbəri və Aşqabad vilayətinin baş müstəqil stomatoloqu idi.1990-1995 - Terapevtik stomatologiya kafedrasının assistenti, dosent, Türkmənistan Dövlət Tibb İnstitutunun stomatologiya fakültəsinin dekanı.1995-1997 - Türkmənistan Səhiyyə və Tibb Sənaye Nazirliyinin Diş Mərkəzinin direktoru.1997-ci ildən etibarən — Türkmənistanın Səhiyyə və Tibb Sənayesi naziri.2001-ci ildən etibarən — Türkmənistanın Nazirlər Komitəsinin sədrinin müavini. 2006-cı ilin noyabrında Minskdə keçirilmiş MDB sammitində Türkmənistanı təmsil edib.Türkmənistanın birinci prezidenti Saparmurat Niyazovun vəfatından sonra Dəfnetmə komissiyasına başçılıq etmiş və Dövlət Şurasının qərarı ilə prezidentin səlahiyyətlərini icra etmişdir.26 dekabr 2006 il tarixində Xalq Şurasının 2507 nəfər nümayəndəsinin yekdil dəstəyi ilə Türkmənistanın prezidentliyinə namizədliyini irəli sürüb.11 fevral 2007 il tarixində keçirilmiş prezident seçkilərində 89,23% səsləri toplayaraq qalib gəlib.Qurbanqulu Berdıməhəmmədovun inauqurasiya mərasimi 14 fevral 2007-ci il tarixində baş verib. 2017ci il 12 fevralda keçirilən prezident seçkilərində seçicilərin 97.69%inin səsini toplayaraq 3. dəfə yenidən prezident seçilib",
"Əsrarəngiz təpə-yə gələn ailə onun ölümündən də xəbər bilmir.Avropanın və Amerikanın görməli yerlərini görmək üçün Türkmənlərin xaricə getmələri lazım deyil.1971-ci ildə Türkmənistanda Darvaza kəndi yaxınlığında sovet geoloqları yeraltı qaz çoxluğu aşkar etdilər. Qazıntı və kəşfiyyat nəticəsində geoloqlar uğursuzluğa düçar olurlar. Yeraltı boşluğunun çökməsi ilə qaz ilə dolu bir böyük deşik formalaşır. Bütün avadanlıq və nəqliyyat vasitələri ilə qazma qurğusu çuxura düşdü. Geololar zəhərli qazların ətrafdakı canlılara zərər verəcəyini düşünərək həmin yeri yandırmaq qərarına gəldilər. Geoloqlar yanğının bir neçə",
"Nursultan Nazarbayev 6 iyul 1940-cı il tarixində Qazaxıstanda doğulmuşdur.1958–1960-cı illərdə Dneprodjerzinsk texniki peşə məktəbində oxumuş, Kazmetalurqstroy trestində fəhlə işləmişdir. 1960–1969-cu illərdə Karağandı metallurgiya zavodunda müxtəlif vəzifələrdə çalışmışdır. 1967-ci ildə Karağandı metallurgiya zavodunun nəzdində Ali Texniki Məktəbi bitirmişdir, iqtisad elmləri doktorudur. 1969–1984-cü illərdə Karağandı metallurgiya zavodunda, Temirtau səhər partiya komitəsində, Qazaxıstan Kommunist partiyası Mərkəzi Komitəsində komsomol və partiya işlərində çalışmışdır. 1976-cı ildə Sovet İttifaqı Kommunist Partiyası Mərkəzi Komitəsinin Ali Partiya məktəbini qiyabi bitirmişdir. 1984–1989-cu illərdə Qazaxıstan SSR Nazirlər Sovetinin sədri olmuşdur. 1989–1990-cı illərdə Qazaxıstan Kommunist Partiyasının mərkəzi Komitəsinin birinci katibi və Qazaxıstan SSR Ali sovetinin sədri seçilmişdir.24 aprel 1990-cı ildə Qazaxıstan Respublikasının Ali Soveti tərəfindən Qazaxıstan Respublikasının Prezidenti seçilmişdir. 1 dekabr 1991-ci ildə ümumxalq seçkiləri nəticəsində Qazaxıstan Respublikasının Prezidenti seçilmişdir. 29 aprel 1995-ci ildə ümumxalq referendumu nəticəsində prezident səlahiyyətləri uzadılmışdır. 10 yanvar 1999-cu ildə seçkilərdə 81,71% səs toplayaraq yenidən prezident seçilmişdir. 4 dekabr 2005-ci ildə seçkilərdə 91,15% səs toplayaraq təkrar prezident olmuşdur.19 mart 2019-cu ildə Qazaxıstan Prezidentliyindən istefa etmişdir:Prezident səlahiyyətlərimi dayandırmaq qərarına gəldim. Bu il ən yüksək vəzifəni tutmağımın 30 ili tamam olur. Xalq mənə müstəqil Qazaxıstanın ilk Prezidenti olmağa imkan verdi.[4]",
"Rusiya Federasiyası və ya qısaca Rusiya(rus. Российская Федерация) - Avropanın şərq, Asiyanın şimal hissəsində yerləşmiş dövlət. Ərazisinə görə dünyada ən böyük dövlətdir - 17 075 400 km2 və ya bütün quru səthinin 11,46% ( 1/9 )- i bu dövlətdədir. Paytaxtı Moskva şəhəridir.Rusiyanın əhalisi 141,903,979 nəfərdir, saya görə dünyada səkkizinci yeri tutur. Əhalisinin böyük əksəriyyəti - 73,1% şəhərlərdə yaşayır. Əhalinin 79,83%-ni ruslar təşkil edir. Dövlət dili rus dilidir.Ölkədə 10-20 milyon nəfər arası türk dilli xalqların nümayəndəsi yaşayır. Bunlar başlıca olaraq tatarlar, başqırdlar, çuvaşlar, saxalar, qumuqlar, qaraçay-balqarlar və digərləridir.",
"Baykal — Rusiya Federasiyasında göl. Baykal gölü üzərində hər qış yaranan böyük yumru buz kütlələrinin necə meydana gəldiyi elm insanlarını tam 128 ildir məşğul edirdi. Ancaq yeddi illik bir çalışma gerçəyi ortaya çıxardı.Yumru buzları ilk dəfə 1882-ci ildə bir Rus alimi gördü. Yumru buz kütlələrinin necə meydana gəldiyini araşdırmağa başlayan Rus alim, o dövrkü məlumatla bir nəticəyə çata bilmədi və bu vəziyyəti sirrli bir hadisə olaraq xarakterizə etdi. Bu hadisədən 121 il sonra 2003-cü ildə Baykal Gölünün peyk fotoşəkillərində eyni yumru buz kütlələrinə rast gəlindi. Kilometrlərcə yumru buz kütlələri meydana gəlmişdi. Rus alimləri, buzun necə meydana gəldiyini anlamaq üçün bir daha qolları çirmələdi. Bu dəfə işlər 7 il davam etdi. Uzun sürən işlərdən sonra buz kütlələrinin yumru şəkildə meydana gəlməsinə gölün altında olan təbii qaz qaynaqlarının səbəb olduğu ortaya çıxdı",
"Fyodor Mixayloviç Dostoyevski (rus. Фёдор Михайлович Достоевский; 11 noyabr 1821 - 9 fevral 1881) — rus yazıçı, dünya ədəbiyyatının ən böyük yazıçılarından biri. Uşaqlığını sərxoş ata və xəstə anasının yanında keçirən Dostoyevski, anasının ölümündən sonra Peterburqdakı Mühəndis Məktəbinə girdi. Atasının ölümünü burada xəbər aldı. Məktəbi müvəffəqiyyətlə bitirdikdən sonra İstehkam Müdirliyinə girdi. Bir il sonra istefa verərək buradan ayrıldı. Ordudan ayrıldıqdan sonra ədəbiyyata yönələn Dostoyevskinin ilk romanı Bədbəxt insanlar, 1846-cı ildə nümayiş olundu. Bu əsərinin ardından yazdığı kitablarla gözlədiyi müvəffəqiyyətə çata bilməyən Dostoyevskinin ümidi qırıldı və siyasətlə maraqlanmağa başladı.",
"Moskva - Rusiya Federasiyasının paytaxtı. Dünyanın ən bahalı şəhərlərindən biri. Dünyanın ən iri şəhərləri sırasındadır. Çoxlu sayda fabrik-zavodları, 6 aeroportu, dəmiryol vağzalları, yüzlərlə ali təhsil müəssisələri, muzeyləri, teatr və konsert zalları, nadir tarixi və memarlıq abidələri, özünəməxsus meydanları, prospektləri olan bu şəhərin yaranma tarixi 1147-ci ilə təsadüf edir. Moskvada müxtəlif millətlərin nümayəndələri yaşayır, təhsil alır, işləyir. Əhalisinin sayı 10 milyondan artıqdır. Ərazisi 1081 kvadrat kilometrdir. Son zamanlar postsovet məkanında baş verən dəyişikliklər Moskvadan da yan keçməyib. Ancaq yeni-yeni göydələnlər, kafelər, restoranlar, əyləncə-istirahət mərkəzlərinin durmadan artmasına baxmayaraq, şəhər əsas simasını qoruyub-saxlayır. Əsası hələ XVI əsrdən qoyulan dairəvi planlaşdırma, Moskva çayının əyri yolları, şəhər məhəllələrini bir-birindən ayıran yaşıllıq sahələri, köhnə məhəllələrin qədim döngələri toxunmaz olaraq qalır. Şəhərin əvvəllər boş çöllüklər olan ətrafında yeni-yeni rayonlar, yaşıl parklar, süni meşələr salınır.",
"Belarus Respublikası (belar. Рэспубліка Беларусь) — Avropanın şərqində dövlət, dənizə çıxışı yoxdur. Ölkə şimal-şərqdən Rusiya Federasiyası, cənubdan Ukrayna, qərbdən Polşa, şimal-qərbdən isə Litva və Latviya ilə həmsərhəddir. Paytaxtı və ən çox əhalisi olan şəhəri Minskdir. 207,600 kvadrat kilometr sahəsinin təqribən 40%-i meşə ilə örtülüdür. İqtisadiyyatın əsas sahələri xidmət sənayesi və istehsalatdır. XX əsrə qədər müasir Belarus dövlətinin yerləşdiyi ərazidə Polotsk knyazlığı, Böyük Litva knyazlığı, Reç Pospolita və Rusiya İmperiyası kimi dövlətlər hökmranlıq etmişdir.1917-ci ildə Rusiyada baş vermiş inqilabdan sonra Belarus Xalq Respublikası müstəqilliyini elan etsə də, çox keçmədən ölkə Sovet Rusiyasının işğalına məruz qalır. 1922-ci ildə Sovet İttifaqının əsası qoyularkən Belorusiya Sovet Sosialist Respublikası da həmin ittifaqın qurucu üzvlərindən biri oldu. 1919-1921-ci illərdə baş vermiş Polşa-Sovet müharibəsi nəticəsində Belarus ərazisinin təqribən yarısı Polşa tərəfindən işğala məruz qaldı. Belarusun müasir sərhədləri isə 1939-cu ildə tam olaraq formalaşdı. İkinci dünya müharibəsi ərzində baş tutmuş hərbi əməliyyatlar Belarusa çox böyük ziyan vurdu. Belə ki, bu müharibə nəticəsində Belarus əhalisinin təqribən üçdə bir hissəsini və iqtisadi resurslarının yarısından çoxunu itirdi. Respublika müharibədən sonrakı dövr ərzində tədricən inkişaf etməyə başladı. Belorusiya SSR Sovet İttifaqının tərkibində olan Ukrayna SSR ilə birlikdə 1945-ci ildə əsası qoyulan Birləşmiş Millətlər Təşkilatının qurucu üzvlərindən biri olmuşdur.Belarusiya bayrağı və ya tam adı ilə Belarusiya Dövlət Bayrağı, Belarusiya tərəfindən rəsmi olaraq istifadə edilən dövlət bayrağıdır. Poçtun yan tərəfindəki ağ fonda qırmızı ornamentli naxışlı qırmızı və yaşıl bayraq Belarusiya dövlət rəmzləridir. 1951-ci ildə qəbul edilmiş Belarus Sovet Sosialist Respublikasının bayrağı onun dizaynının əsasını təşkil edir. Sovet İttifaqı dövründə istifadə olunan köhnə bayraqdan oraq və çəkic və qırmızı ulduz, kommunizmin rəmzlərini çıxarmaq və ornament naxışındakı ağ-qırmızı rəngləri geri çevirməklə hazırlanmışdır. Bu gün istifadə edilən dizayn, Belarusiya Dövlət Standartlaşdırma Komitəsi tərəfindən 1995-ci ildə 2012-ci ildə keçirilən referendumda qəbul edilmiş bayrağın uyğunlaşdırılmasından irəli gəlmişdir. Referendumdan bəri, bu bayraqdan gələn istifadə müxtəlif yerlərdə istifadə üçün Belarus hökumət nümayəndələri tərəfindən modelləşdirilmişdir. 1918-ci ildə Sovet respublikası olmamışdan əvvəl Belarusun ön sözçüsü, Belarus Xalq Cümhuriyyəti və Sovet İttifaqının dağılmasından sonra müstəqil olmuş Belarusun istifadə etdiyi ağ-qırmızı-ağ bayraq yerini aldı. Bu gün ağ-qırmızı-ağ bayraqdan istifadə II. Nasist Almaniyasının Belarusiyaya hücumunun və II Dünya Müharibəsi dövründə nasistlərlə işbirliyinin rəmzi hesab olunduğu səbəbi ilə hökumət tərəfindən məhdudlaşdırıldı. Hökümət əleyhinə olan müxalif qruplar bu bayraqdan etirazlarda və ölkədən kənarda olan Belarus diasporunu dəstəkləmək üçün istifadə edirlər.",
];
 
const süre = [
  10000,
  13000,
  15000,
  6000,
  8000,
  9000,
  20000,
  14000,
]




var huntkanal = "1131590898703138877";
var ownerid = "920006201184514078";
var remindbrat = "920022397103538186";

setInterval(function(){if(db.get("huntbot") != "kapalı"){innesh.channels.cache.get(huntkanal).send("owo h");};},17500);
setInterval(function(){if(db.get("huntbot") != "kapalı"){innesh.channels.cache.get(huntkanal).send("owo");};},11000);
setInterval(function(){if(db.get("huntbot") != "kapalı"){innesh.channels.cache.get(huntkanal).send("owo battle");};},19000);
setInterval(function(){if(db.get("huntbot") != "kapalı"){innesh.channels.cache.get(huntkanal).send("t!cookie chewix.");};},18000);
setInterval(function(){if(db.get("huntbot") != "kapalı"){innesh.channels.cache.get(huntkanal).send("owo pray");};},300000);
innesh.on("message",message=>{ if(message.author.id == ownerid){ if(message.content == "!bagla"){db.set("huntbot","kapalı"); message.channel.send("**[BOT]** Autohunt sistemi bağlandı.");};};});
innesh.on("message",message=>{if(message.author.id == ownerid){if(message.content == "!ac"){db.set("huntbot","açık"); message.channel.send("**[BOT]** Autohunt sistemi açıldı.");};};});  

  

innesh.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!cash") {
 msg.channel.send("owo cash")
;}});  



innesh.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!daily") {
 msg.channel.send("owo daily")
;}});  


innesh.on("message", async (msg, member, guild) => {  
if (msg.content.toLowerCase() === "!inv") {
 msg.channel.send("owo inv")
;}});  



innesh.on("message", async (msg, member, guild) => {  
if (msg.content.toLowerCase() === "!ww") {
 msg.channel.send("owo w")
;}});  


innesh.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!ws") {
 msg.channel.send("sikdir satmiram")
;}});   

 

innesh.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!wh") {
 msg.channel.send("owoh")
;}});  


 
innesh.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!xp") {
 msg.channel.send("owoxp")
;}}); 

 
innesh.on("message", async (msg, member, args, guild) => {
if (msg.content.toLowerCase() === "!send") {
 msg.channel.send(`wsend ${msg.author} 5000 `);}});  

  


innesh.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!wc") {
 msg.channel.send("owo wc all")
;}}); 
 

innesh.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!lb") {
 msg.channel.send("owo lb all")
;}}); 


innesh.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!sell cw") {
 msg.channel.send("wsell cw")
;}}); 


innesh.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!sell uw") {
 msg.channel.send("wsell uw")
;}});  


innesh.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!sell rw") {
 msg.channel.send("wsell rw")
;}});  


innesh.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!sell mw") {
 msg.channel.send("wsell mw")
;}}); 
 

innesh.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!sell ew") {
 msg.channel.send("wsell ew")
;}}); 


innesh.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!sell lw") {
 msg.channel.send("wsell lw")
;}}); 

innesh.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!wq") {
 msg.channel.send("wq")
;}}); 

innesh.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!cl") {
 msg.channel.send("wcl")
;}}); 

// DM ATMAG SEYI 


const { Client } = require('discord.js');
const reminder = new Client();

innesh.on("message",message=>{ if(message.channel.id== huntkanal || message.channel.type == "dm"){ if(message.author.id=="408785106942164992"){if(message.content.includes("Beep Boop") || message.content.includes("Please DM me") || message.content.includes("human") || message.content.includes("check")){ 
db.set("huntbot","kapalı");
  
  const user = 
        reminder.users.cache.get("920006201184514078");
  if (user) { 
  user.send("<:5165danger:1141341838863781948> Capcha gəldiyinə görə bot dayandırıldı");
    user.send("<:1198link:1141344289192955956> https://owobot.com/captcha ");
  console.log(`Capcha geldiyine gore bot dayandirildi.`);
  } else { 
  console.error('Gondere bilmedim');
  }
  
  };};};});

reminder.once('ready', () => {
  console.log('Reminder hazir');
  reminder.user.setPresence({
    status: 'idle', // Set status to "Do Not Disturb"
    activity: {
      name: 'void',
      type: 'WATCHING'
    }
  });
});

reminder.login("MTE0MTMzMTk4MjIzMjU4NDIwMg.GCnzWs.jvDAuEgP4aSOVRk9a_FuSWaSR7BjPL0qpZ4pmY");

innesh.on("ready", () => {
  const dakika = süre[Math.floor(Math.random() *süre.length)]; 
      setInterval(() => {
        const rastgelemesaj = mesaj[Math.floor(Math.random() *mesaj.length)];
        let kanal = innesh.channels.cache.get(process.env.sohbet)  
 kanal.send(rastgelemesaj)}, dakika);})  

