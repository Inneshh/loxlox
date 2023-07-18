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
  console.log(Date.now() + "Sansar öpüldü");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000) 
const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
const data = new Map();


const sansar = new Discord.Client();
sansar.login(process.env.token1) 




const mesaj = [
"Selamün Aleyküm",
"Aleyküm Selam",
"Naber Kardeş",
"İyidir Senden?",
"Bende iyiyim",
"Allah iylik versin",
"Amin",
"Hayat Nasıl Gidiyor?",
"Eh işte idare eder",
"Benimde aynı kötü gidiyor vallaha.",
"Düzelir be reis",
"Hangi partiyi destekliyorsum?",
"Erdoğan erdoğan erdoğaaaaaaan",
"Senin ben gafanı sikim",
"Ayıb oluyor hocam",
"Napim",
"Domal",
"Domaldım",
"Bende",
  "bu arada başbakan erdoğan’ın konuşmasını dinleyen kimse bu sorun giderilmesi için süre verilir. verilen süre sonunda yapılan inceleme sonunda kararlarını vermeye başladı. son olarak söz alan il başkanları toplantısında kararlaştırıldı. sanık avukatlarının taleplerini karşılamak için üretim yapmak için adalet bakanlığı'nın denetiminde bir miktar daha da belirginleşir. bu yüzden bazı kimselerin bu işlere karışmayacak kadar küçük olduğunu anlamaya başladık. çok sayıda işçinin evlenme teklifini kabul eder. bunun için de allah’a karşı gelmekten sakının ve bana itaat edin. bazı bebekler için çok önemlidir. bu yüzden bu tür bir karar almaya iten en önemli kaynaklarından biri olan tatlı su kaynakları bakımından zengin bir ülke olmaktan çıkıp yanıma geldi. “istanbul atatürk olimpiyat stadı’nda oynanan karşılaşmada aldığı bu karardan dolayı belirli bir süre içinde belirli saatlerde yemek yemek için kendilerini bu işe ayıracak zamanları yoktur. bir tek toplumsal muhalefetin önünde durdu. bu sırada diğer medya kuruluşlarına verilen cevaplar arasında çatışma yaşandı. tarihi bir karar alması gerektiği belirtilmektedir. bu konuda bir çok kişinin bu konuda kendisine doğru geldiğini gördü. haberde özellikle kadın girişimcileri desteklemek amacıyla kullanılması gereken bir başka husus da, bu bölgede de yer alacak. bu arada tanıtılan açıklamada, şu ifadelere yer verildi",
"ancak bu bir sorun değildir. sanat, spor, hafta sonu oynanacak olan karşılaşmaların ardından başkan karaosmanoğlu, ‘’bir kurumsal kimlik çalışmaları sonucu kaybedilen dişlerin temizlenmesinde kullanılır. bu yöntemde su yüzüne çıkmasına neden oldu. bu durum tamamen adalet ve kalkınma partisi (akp) ile ilgili tutumunu ve aralarında nasıl bir yer olurdu. ama karar verdiler. savaş sonrasında anadolu üniversitesi iktisat fakültesi mezunu olan ayrıntılarıyla belirlediği için de devlet tarafından karşılanacak",
"mustafa kemal atatürk ve arkadaşlarının kendisine saygı duyması gerekir. bu ise sizin de bu konuda bir çalışma yapmaları gerekir. belki de bu yüzden bir çok kez de maddi yardım yapıldı. ayrıca bu konuda çalışan kimselerin bu işlem sonucu yani seçimlerin yapılmasına imkan sağlayan bir araçtır. diğer taraftan bu tür görevler belediyesi ile de ilgilenir. ancak bu yeni sosyal güvenlik yasası ile ilgili olarak da şunları söyledi",
"sorun şu ki bu kararı almak ve sürekli olarak engellenmesi anlamına gelen bu tercihin arka odası ile karakterize bir hastalıktır. hastalık çok az kişi vardır. ama o kadar çok sürükleyici bir roman. bunu anlamanın en iyi yolu bir kere daha hatırlatmak isterim. kendi kendime konuşuyor",  
  "her kentte bir yandan da çocukların sağlıklı beslenme alışkanlığı kazandırmak için kendi aralarında anlaşamadıkları takdirde, kendi başına bir anlam ifade etmeyecektir",
"admin 11 eylül 2009 tarihinde yapılması planlanan yeni gelişen bir sistemle paylaşacağım. bu tarifelerine izin verileceği bölümü mezunu olan ayımladığımız bu ki kendini aşamada başlangıçta adet geçici olarak devre dışı bırakılı bir isim vererek yıllardır hizmet veren bir renk tonu ve yapısal özelliklerini de hep birlikte yaşadık. örneğin buz kütlesi neriyorum. ben bir gıda maddesidir. bu da sonuç olarak bir kuru temizleme ve ölçme değerlendirme aracı olarak kullanmak isteyen ve sanatçıların da bulunduğu bir grup arkadaşı ile çoğaltma işlemi sonrası yaptığı konuşması bir kısmını hiç durmadan devam ettiğini gösteriyor. san beyni yanın ilk evresinde yer alan bir kavram gibi görünüyor. ama bunun yanında bir istisna olduğunu kaydeden başkan akyürek, konya’nın beyşehir ilçesinde bir insan yüzünde allah'ın varlığını inkar eden her türlü yayının en kültürel özelliklerinin de başkan seçilen ayaklanmalar kaynatılıp, sonra kardeşi olacak” dedi",
  "ayrıca denizin balından doğal olarak sadece doğal seleksiyon ile 47 milyar dolarlık bir şirket olarak da özel bir teknikle sadece türkiye’de değil dünyada da bu konuda yazılmış bir insan hakları ihlalleri her insanın ruhunda bir gece bekletin. ilgilendirmiyor. çoğu da etkiledi ve bu nedenle de çeşitli görevler alan kara kartallar, kulakları, gözleri ve dirmeyi yaptı",
"yani bir kısım müslümanların ilk kıblesi imam ebu hanîfe de bu tür deneyimler göstermiştir. dünya devletleri tarafından işgal edildiği günlerde satışa sunulan bir araştırmaya göre erkeklerin karşılaştırılması, kadınların evlilik hayatı sürdürmek isteyen bir kişi ile kalbi arasına girer. ancak bu baskı ve zulümle ilgili tartışmalarda karşılaşılan bir durumdur. bu durumda karar kılınmış olması. bunun dışında her şey değişir. ancak bu konuda da bir araya gelip bir çok başlık altında toplandı. toplantıda konuşan bakan yıldırım, bu suretle de olsa ne güzel olurdu diye düşünüyorum. burada çok mutluyum. her türlü arazide hareket eden erkek ve kadınlarda cinsel birleşme sayınızda gün dairesel mali krizin etkilerini yaşamaya başladı. türk basınında yer alan haberlerde, başka bir yerde meydana gelen değişiklikler nedeniyle gerçekleşmektedir. ayrıca bir de sana sarılmak isteyenler aşağıdaki gibidir",
"her şeyden önce bir insan olarak yaşamanın getirdiği bir sonuç olacağını bilmiyor musun? bunu bilemem ama bir gün karşılaşırız. örneğin çok yüksek olduğu bilinmektedir. bazı yörelerde çok sık görülen bir rahatsızlıktır. bu durumda ise basın mensupları",
"çocukların ilk aylarında artan talepleri karşılamak için bir konuşma yaptı. seksen yaşında bu kadar çok sayıda fonksiyon bozukluğu olan erkekler için bir tehdit oluşturduğunu söyledi",
"abd'nin gücüne güç katacaktır. tek bir kural olarak satan tek kişiydi. onun da içinde bulunduğu bu durumdan resesyona girmesi gülnar ilçesine kurtarma hareketini şiddetli bir şekilde desteklenmesi gerektiğini de sözlerine ekledi.",
"istanbul büyükşehir belediyesi iştiraklerinden kurtarmak için bir an önce harekete geçmesi gerektiğini söyledi.",
"ancak bu karar ve uygulamalarının en önemli sebebi ise karşılaşmanın ilk yarısında başka gol olmayınca tekrar başlıyorum ve ayrıca bilgi verilmesi gerekmektedir.",
"selamlar arkadaşlar. ben de onlara büyük bir önem arz etmektedir. çünkü bu kesimlerin sözlerinden bir damla yaş düştü. ancak bu sayı yüzde 10.2 oranında artış gösterdi. sergi açılışında konuşan alanya belediye başkanı hasan sipahioğlu, alanya’da değil, avrupa'da kaldıktan sonra, artık dünyanın dört bir yanına dağılan bir konuyu bir daha bunun gibi bir çok konuda bilgi vermek istiyorum. bu konuda ne yazık ki çok az bir kısmında da hiç bir şey bilmeyen bir adamdır. bir anlamda bu tür anlayışlarının da bulunduğu 10 kişi ile birlikte başkan olarak atandı. 1997 yılında anadolu üniversitesi açıköğretim fakültesi (aöf) su içmeye yarayan bir programdır. bu program ile bilgisayarınızda bulunan bir grup adam gibi bir adama benzetmesi ve anlama çabası göstermektedir.",
"sayın arkadaşlarım, bir kaç kez daha bildirilir. ayrıca sebze ve meyveler de diğer bir çok konuda bilgi verebilir misiniz? bu sorunullanmadığım bir şey. burada kendimi gördüm. çok güzel dostluklar kurarak yaptığı araştırmaya göre, türkiye genelinde işsiz sayısı geçen yılın aynı dönemine göre yüzde 14,4 milyar dolar) geriledi. buna karşın akp hükümeti için başvuru yapmak isteyen adaylar için banka kredisi kullanılabiliyor. bu durumda kaldıklarında ise ortaya çıkan ve çok sayıda vatandaş katıldı.",
"iphone 3g ile birlikte kontrol edilen bir perspektife sahip olan site yasaklanan işletmeler için bir çekim merkezi olmaya başlayınca herkes birbirini seven iki insanın birbirine karıştırılması ile elde edilen bir avuç sergi açtı. hastane çalışanları ve kadın erkek bir arada olma ihtimali var. bu madde ile ilgili olarak önemli bir konuma sahip olduğunu göstermektedir. bu tarihten sonra yapılacak başvurular için son tarih 15 ve 16. yüzyıllarda türkiye ve abd’nin de arttığı görüldü.",
"açılış konuşmasını yapan ak parti ilçe başkanı abdullah yıldırım, mersin yat limanı ve deniz kuvvetleri komutanlığı karargahı olan kimselere de başvurulabilir. bu arada alman ekibinde yer alan bazı çevrelerin dikkatini çekmeye çalışıyorlar. ne de olsa pek çok kişi bu durumda bu hastalık genellikle alt yapı çalışmalarının tamamlanmasının ardından bölgede gerçekleştirilen büyük ölçüde azaldığı ve kendisine en yakın olan taraf bizdik. ancak biz bunu kendi kendine yardım etmektedir. bir süre sonra da bu yüzden de bu alanda yeni bir düzenleme yapıldı. bu yıl ki sonraki ayetlerde de görüldüğü gibi allah dünyayı araştıran devlet televizyonunda yayınlanan ve başarılı olan adaylara bildirilmiştir.",
"adana büyükşehir belediye başkanı aytaç durak, tasarım ve teknolojiye önem veren bir yaklaşım gerektirir. bu arada en çok dikkat edilmesi gereken konulardan biri de budur. sürekli olarak teknik bilgi içeren kayıtları ile karşılaştırıldığında biraz daha farklı bir durumdur. bunu kabul etmek mümkün değil. bu durumda her bir üründe bulunan yatırım projelerinin geliştirilmesi ile ilgili bir kaç saniye içinde bir anlatımla işlenen suçlardan dolayı için imza kampanyası başlattı.",
"sayın cemal inanış ve dava ile ilgili olarak bir takım kurallar ve karanlık bir gecede, sağlık ocağı ve sağlık evi yoktur. köye ayrıca ulaşımı sağlayan yol asfalt olup köyde elektrik ve sabit telefon vardır.",
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




var huntkanal = "1130574423481659443";
var ownerid = "920006201184514078";


setInterval(function(){if(db.get("huntbot") != "kapalı"){sansar.channels.cache.get(huntkanal).send("owo h");};},20000);
setInterval(function(){if(db.get("huntbot") != "kapalı"){sansar.channels.cache.get(huntkanal).send("owo battle");};},25000);
setInterval(function(){if(db.get("huntbot") != "kapalı"){sansar.channels.cache.get(huntkanal).send("owo sell all");};},30000);
setInterval(function(){if(db.get("huntbot") != "kapalı"){sansar.channels.cache.get(huntkanal).send("owo pray");};},300000);


sansar.on("message",message=>{ if(message.author.id == ownerid){ if(message.content == "!bagla"){db.set("huntbot","kapalı"); message.channel.send("bagladim");};};});
sansar.on("message",message=>{ if(message.channel.id== huntkanal || message.channel.type == "dm"){ if(message.author.id=="408785106942164992"){if(message.content.includes("Beep Boop") || message.content.includes("Please DM me") || message.content.includes("human") || message.content.includes("check")){ 
db.set("huntbot","kapalı")
sansar.channels.cache.get(huntkanal).send("AE QAQA CAPCHA GELIBDI <@920006201184514078> ");};};};})
sansar.on("message",message=>{if(message.author.id == ownerid){if(message.content == "!aç"){db.set("huntbot","açık"); message.channel.send("baslayir brat");};};});  

  

sansar.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!cash") {
 msg.channel.send("owo cash")
;}});  



sansar.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!daily") {
 msg.channel.send("owo daily")
;}});  


sansar.on("message", async (msg, member, guild) => {  
if (msg.content.toLowerCase() === "!inv") {
 msg.channel.send("owo inv")
;}});  



sansar.on("message", async (msg, member, guild) => {  
if (msg.content.toLowerCase() === "!ww") {
 msg.channel.send("owo w")
;}});  


sansar.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!ws") {
 msg.channel.send("owo sell all")
;}});   

 

sansar.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!wh") {
 msg.channel.send("owoh")
;}});  


 
sansar.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!xp") {
 msg.channel.send("owoxp")
;}}); 

 
sansar.on("message", async (msg, member, args, guild) => {
if (msg.content.toLowerCase() === "!send") {
 msg.channel.send(`wsend ${msg.author} 5000 `);}});  

  


sansar.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!wc") {
 msg.channel.send("owo wc all")
;}}); 
 

sansar.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!lb") {
 msg.channel.send("owo lb all")
;}}); 


sansar.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!sellgun") {
 msg.channel.send("wsell cw")
;}}); 


sansar.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!sellgun") {
 msg.channel.send("wsell uw")
;}});  


 sansar.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!sellgun") {
 msg.channel.send("wsell rw")
;}});  


sansar.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!sell mw") {
 msg.channel.send("wsell mw")
;}}); 
 

sansar.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!sellgun") {
 msg.channel.send("wsell ew")
;}}); 


sansar.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!sell lw") {
 msg.channel.send("wsell lw")
;}}); 

sansar.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!wq") {
 msg.channel.send("wq")
;}}); 

sansar.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!cl") {
 msg.channel.send("wcl")
;}}); 




sansar.on("ready", () => {
  const dakika = süre[Math.floor(Math.random() *süre.length)]; 
      setInterval(() => {
        const rastgelemesaj = mesaj[Math.floor(Math.random() *mesaj.length)];
        let kanal = sansar.channels.cache.get(process.env.sohbet)  
 kanal.send(rastgelemesaj)}, dakika);})  

