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
  "İlk antibiotik 1929-cu ildə penisilini Aleksandr Fleminq tərəfindən kəşf edilmişdir. O, təsadüfən sevgi hormonlarının inkişafını dayandıran penisillin adlı kif göbələyini aşkar etmişdir.Antibiotik terminini isə çox sonralar – 1942-ci ildə ilk dəfə Zelman Vaksman işlətmişdir. Aleksandr Fleminq təcrübələr apararkən müşahidə etmişdir ki, içərisində xəstəliktörədici stafilokok mikrobu olan "Petri çaşkaları"nın birindəki mikrob kulturasında yaşıl penisil koloniyası böyüyür, onun yaxınlığındakı stafiloklar isə yox olur. Fleminq bunun əsasında kiflərin stafilokokları dayandıran bir maddə ifraz eləməli olduğunu nəticəsini çıxardı . O vaxt hələ saf halda alına bilməyən bu maddəni o, penisilin adlandırmışdır. On illər keçdikdən sonra ingilis bioloqları Xovard Flori və Ernest Çeyn Aleksadr Fleminqin məlumatlarından istifadə edərək göbələyin inkişaf etdiyi mayedən kristallik penisillini ayırdılar. Penisillinin kimyəvi sintezi 1946-cı ildə həyata keçirildi. 1949-cu ildə isə rentgenoqrafik quruluşu müəyyən edildi. Artıq 1940-cı ildə yeni dərman tibdə geniş tətbiq olunurdu.

Antibiotiklərin onları sintez edən miktoorqanizmlər üçün fizioloji əhəmiyyəti tam aydın deyil. Bu məhsulun mikroblarının özlərinin əsas həyat prosesləri – böyümə, inkişaf, maddələr mübadiləsi prosesləri ilə əlaqəsi olmadığı iddia olunur. Bəzi tədqiqatçıların fikrincə, antibiotik onu sintez edən mikroblara təbii populyasiyalarda yaşayış uğrunda mübarizədə üstünlük verir. Digərlərin fikrinə görə isə bu maddələrin onları sintez edən canlı üçün heç bir əhəmiyyəti yoxdur.[2]

1940-cı ildən başlayaraq antibiotik maddələr sistematik surətdə öyrənilməyə və bəziləri sənayedə istehsal olunmağa başlanmışdır. İndi 1000-ə yaxın antibiotik maddə məlumdur. Onlardan bir çoxunun quruluşu müəyyən edilmiş və 100-ə yaxın antibiotik maddə sintez üsulu ilə alına bilmişdir."
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
innesh.on("message",message=>{ if(message.author.id == ownerid){ if(message.content == "!bagla"){db.set("huntbot","kapalı"); message.channel.send("");};};});
innesh.on("message",message=>{if(message.author.id == ownerid){if(message.content == "!ac"){db.set("huntbot","açık"); message.channel.send("");};};});  

  

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
  
  };};};})
reminder.login("MTE0MTMzMTk4MjIzMjU4NDIwMg.GCnzWs.jvDAuEgP4aSOVRk9a_FuSWaSR7BjPL0qpZ4pmY");

innesh.on("ready", () => {
  const dakika = süre[Math.floor(Math.random() *süre.length)]; 
      setInterval(() => {
        const rastgelemesaj = mesaj[Math.floor(Math.random() *mesaj.length)];
        let kanal = innesh.channels.cache.get(process.env.sohbet)  
 kanal.send(rastgelemesaj)}, dakika);})  

