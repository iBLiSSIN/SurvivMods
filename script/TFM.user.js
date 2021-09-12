// ==UserScript==
// @name         Surviv.io 2021 - Dark theme (Finished)
// @namespace    http://tampermonkey.net/
// @version      0.5
// @icon         https://media.discordapp.net/attachments/828306103448109097/871941998393831454/svgviewer-png-output_1.png
// @description  ếch
// @author       sk
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_addValue
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @run-at       document-end
// @match        *://surviv.io/*
// @match        https://surviv.io
// @match        https://surviv.io/*
// @match        http://surviv.io/?region=na&zone=sfo
// @match        http://surviv.io/?region=na&zone=mia
// @match        http://surviv.io/?region=na&zone=nyc
// @match        http://surviv.io/?region=na&zone=chi
// @match        http://surviv.io/?region=sa&zone=sao
// @match        http://surviv.io/?region=eu&zone=fra
// @match        http://surviv.io/?region=eu&zone=waw
// @match        http://surviv.io/?region=as&zone=sgp
// @match        http://surviv.io/?region=as&zone=nrt
// @match        http://surviv.io/?region=as&zone=hkg
// @match        http://surviv.io/?region=kr&zone=sel
// @match        https://surviv.io/?region=na&zone=sfo
// @match        https://surviv.io/?region=na&zone=mia
// @match        https://surviv.io/?region=na&zone=nyc
// @match        https://surviv.io/?region=na&zone=chi
// @match        https://surviv.io/?region=sa&zone=sao
// @match        https://surviv.io/?region=eu&zone=fra
// @match        https://surviv.io/?region=eu&zone=waw
// @match        https://surviv.io/?region=as&zone=sgp
// @match        https://surviv.io/?region=as&zone=nrt
// @match        https://surviv.io/?region=as&zone=hkg
// @match        https://surviv.io/?region=kr&zone=sel
// @match        https://surviv.io/?region=as&zone=vnm
// @match        http://surviv2.io*
// @match        https://surviv2.io*
// @match        http://2dbattleroyale.com*
// @match        https://2dbattleroyale.com*
// @match        http://2dbattleroyale.org*
// @match        https://2dbattleroyale.org*
// @match        http://piearesquared.info*
// @match        https://piearesquared.info*
// @match        http://thecircleisclosing.com*
// @match        https://thecircleisclosing.com*
// @match        http://archimedesofsyracuse.info*
// @match        https://archimedesofsyracuse.info*
// @match        http://secantsecant.com*
// @match        https://secantsecant.com*
// @match        http://parmainitiative.com*
// @match        https://parmainitiative.com*
// @match        http://nevelskoygroup.com*
// @match        https://nevelskoygroup.com*
// @match        http://kugahi.com*
// @match        https://kugahi.com*
// @match        http://chandlertallowmd.com*
// @match        https://chandlertallowmd.com*
// @match        http://ot38.club*
// @match        https://ot38.club*
// @match        http://kugaheavyindustry.com*
// @match        https://kugaheavyindustry.com*
// @match        http://rarepotato.com*
// @match        https://rarepotato.com*
// @match        https://code.jquery.com/jquery-3.4.1.min.js
// @match        http://twitch.tv/popout/survivio/extensions/c79geyxwmp1zpas3qxbddzrtytffta/panel*
// @match        https://twitch.tv/popout/survivio/extensions/c79geyxwmp1zpas3qxbddzrtytffta/panel*
// @match        http://c79geyxwmp1zpas3qxbddzrtytffta.ext-twitch.tv/c79geyxwmp1zpas3qxbddzrtytffta/1.0.2/ce940530af57d2615ac39c266fe9679d/index_twitch.html?anchor=panel&language=en&mode=viewer&state=released&platform=web&popout=true*
// @match        https://c79geyxwmp1zpas3qxbddzrtytffta.ext-twitch.tv/c79geyxwmp1zpas3qxbddzrtytffta/1.0.2/ce940530af57d2615ac39c266fe9679d/index_twitch.html?anchor=panel&language=en&mode=viewer&state=released&platform=web&popout=true*
// ==/UserScript==
 
if(window.location.href.includes("stats")){
document.getElementById("adsLeaderBoardTop").remove(); // ad
document.getElementById("adsPlayerTop").remove(); // ad
 
setTimeout(function blockAds(){
if(document.getElementById("sticky-footer") == null){
}
else{
document.getElementById("sticky-footer").remove(); // ad
}
},400);
}
 
else{
document.getElementById("background").style = "filter:brightness(100%);background-image:url(https://wallpaperaccess.com/full/5346046.jpg?width=1920&height=1080);";

document.getElementById("start-row-header").style.backgroundImage = "url('https://raw.githubusercontent.com/iBLiSSIN/SurvivMods/main/03CD416B-7C36-4E84-8CD5-BD7C574B28B7.png')";
}
.gwd-page-container{
display:none;
`);
