// ==UserScript==
// @name         Surviv.io Small Cheat
// @namespace    http://tampermonkey.net/
// @version      2.6
// @icon         https://static.wikia.nocookie.net/survivio/images/8/83/Loot-weapon-m9.png/revision/latest/scale-to-width-down/683?cb=20180713023444
// @description  thêm một số thứ linh tinh cho vui :))
// @author       VNBPM
 
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
// @grant        none
 
// ==/UserScript==
 
(function() {
      'use strict'
    PIXI.utils.TextureCache["part-smoke-02.img"]=PIXI.utils.TextureCache["part-smoke-01.img"]
    PIXI.utils.TextureCache["part-smoke-02.img"]=PIXI.utils.TextureCache["part-smoke-01.img"]
    PIXI.utils.TextureCache["map-barrel-01.img"]=PIXI.utils.TextureCache["campfire.img"]
 
    PIXI.utils.TextureCache["proj-smoke-nopin-nolever.img"]=PIXI.utils.TextureCache["donut.img"]
 
    PIXI.utils.TextureCache["loot-melee-woodaxe.img"]=PIXI.utils.TextureCache["map-piano-01.img"]
    PIXI.utils.TextureCache["loot-melee-woodaxe-bloody.img"]=PIXI.utils.TextureCache["map-piano-01.img"]
    PIXI.utils.TextureCache["loot-melee-machete-taiga.img"]=PIXI.utils.TextureCache["face-poo.img"]
 
    PIXI.utils.TextureCache["proj-frag-nopin-nolever-01.img"]=PIXI.utils.TextureCache["pineapple.img"]
    PIXI.utils.TextureCache["proj-frag-nopin-nolever-01.img"]=PIXI.utils.TextureCache["pineapple.img"]
    PIXI.utils.TextureCache["proj-mirv-nopin-nolever.img"]=PIXI.utils.TextureCache["baguette.img"]
    PIXI.utils.TextureCache["proj-smoke-nopin-nolever.img"]=PIXI.utils.TextureCache["donut.img"]
 
    PIXI.utils.TextureCache["gun-mp220-01.img"]=PIXI.utils.TextureCache["map-toilet-04.img"]
})();
// ==/UserScript==
 
(function() {
    'use strict';
 
var throwables = ""
 
// Some important shit for this whole thing to work
 
var func = {
    webpack_inject1: (w, e, get) => {
        throwables = get("035f2ecb")
    },
};
 
if(typeof window.webpackJsonp === 'function') {
    window.webpackJsonp([0], func, ["webpack_inject1"]);
} else {
    window.webpackJsonp.push([
        ["webpack_inject1"],
        func,
        [["webpack_inject1"]]
    ]);
}
 
// do the magic
 
Object.keys(throwables).forEach(function(key1) {
    throwables[key1].worldImg.scale = .25
})
})();
// Survivio Mods
 
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
document.getElementById("background").style = "filter:brightness(50%);background-image:url(https://media.discordapp.net/attachments/828306103448109097/868375068529557504/latest.png?width=1920&height=1080);";
 
document.getElementById("start-row-header").style = "filter:brightness(100%);background-image:url(https://raw.githubusercontent.com/iBLiSSIN/SurvivMods/main/03CD416B-7C36-4E84-8CD5-BD7C574B28B7.png?width=1920&height=1080);";
}
