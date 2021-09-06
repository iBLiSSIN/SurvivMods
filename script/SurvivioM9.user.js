// ==UserScript==
// @name         Surviv.io - M9 Abusing
// @namespace    http://tampermonkey.net/
// @version      0.1
// @icon         https://static.wikia.nocookie.net/survivio/images/8/83/Loot-weapon-m9.png/revision/latest/scale-to-width-down/683?cb=20180713023444
// @description  M9 M9 M9 M9 M9 M9 M9 M9 M9 M9 M9 M9 M9 M9 M9 M9 M9 M9 M9 M9 M9 M9 M9 M9 M9 M9 M9 M9 M9 M9 M9 M9 M9 M9
// @author       Samer Kizi#0505 and Sylvexn#8178
 
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
    PIXI.utils.TextureCache["loot-weapon-glock.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
    PIXI.utils.TextureCache["loot-weapon-mp5.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
    PIXI.utils.TextureCache["loot-weapon-mac10.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
    PIXI.utils.TextureCache["loot-weapon-ump9.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
    PIXI.utils.TextureCache["loot-weapon-vector.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
    PIXI.utils.TextureCache["loot-weapon-m93r.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
    PIXI.utils.TextureCache["loot-weapon-scorpion.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
    PIXI.utils.TextureCache["loot-weapon-p30l.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
    PIXI.utils.TextureCache["loot-weapon-vss.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
    PIXI.utils.TextureCache["loot-weapon-m9.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
 
    PIXI.utils.TextureCache["loot-weapon-glock-dual.img"]=PIXI.utils.TextureCache["loot-weapon-m9-dual.img"]
    PIXI.utils.TextureCache["loot-weapon-m93r-dual.img"]=PIXI.utils.TextureCache["loot-weapon-m9-dual.img"]
    PIXI.utils.TextureCache["loot-weapon-p30l-dual.img"]=PIXI.utils.TextureCache["loot-weapon-m9-dual.img"]
    PIXI.utils.TextureCache["loot-weapon-m9-dual.img"]=PIXI.utils.TextureCache["loot-weapon-m9-dual.img"]
 
    PIXI.utils.TextureCache["loot-weapon-ak.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
    PIXI.utils.TextureCache["loot-weapon-dp28.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
    PIXI.utils.TextureCache["loot-weapon-garand.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
    PIXI.utils.TextureCache["loot-weapon-m39.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
    PIXI.utils.TextureCache["loot-weapon-mosin.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
    PIXI.utils.TextureCache["loot-weapon-ot38.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
    PIXI.utils.TextureCache["loot-weapon-scar.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
    PIXI.utils.TextureCache["loot-weapon-bar.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
    PIXI.utils.TextureCache["loot-weapon-ots38.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
    PIXI.utils.TextureCache["loot-weapon-an94.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
    PIXI.utils.TextureCache["loot-weapon-pkp.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
    PIXI.utils.TextureCache["loot-weapon-groza.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
    PIXI.utils.TextureCache["loot-weapon-grozas.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
    PIXI.utils.TextureCache["loot-weapon-blr.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
    PIXI.utils.TextureCache["loot-weapon-svd.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
    PIXI.utils.TextureCache["loot-weapon-pkm-lmg.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
    PIXI.utils.TextureCache["loot-weapon-m134.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
    PIXI.utils.TextureCache["loot-weapon-sv98.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
    PIXI.utils.TextureCache["loot-weapon-water.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
 
    PIXI.utils.TextureCache["loot-weapon-ot38-dual.img"]=PIXI.utils.TextureCache["loot-weapon-m9-dual.img"]
    PIXI.utils.TextureCache["loot-weapon-ots38-dual.img"]=PIXI.utils.TextureCache["loot-weapon-m9-dual.img"]
 
    PIXI.utils.TextureCache["loot-weapon-famas.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
    PIXI.utils.TextureCache["loot-weapon-hk416.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
    PIXI.utils.TextureCache["loot-weapon-m249.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
    PIXI.utils.TextureCache["loot-weapon-mk12.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
    PIXI.utils.TextureCache["loot-weapon-qbb97.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
    PIXI.utils.TextureCache["loot-weapon-m4a1.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
    PIXI.utils.TextureCache["loot-weapon-scout.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
    PIXI.utils.TextureCache["loot-weapon-l86.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
 
    PIXI.utils.TextureCache["loot-weapon-mp220.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
    PIXI.utils.TextureCache["loot-weapon-m870.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
    PIXI.utils.TextureCache["loot-weapon-saiga.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
    PIXI.utils.TextureCache["loot-weapon-spas12.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
    PIXI.utils.TextureCache["loot-weapon-usas.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
    PIXI.utils.TextureCache["loot-weapon-m1100.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
    PIXI.utils.TextureCache["loot-weapon-m1014.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
    PIXI.utils.TextureCache["loot-weapon-hawk12g.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
    PIXI.utils.TextureCache["loot-weapon-lasr-gun.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
 
    PIXI.utils.TextureCache["loot-weapon-deagle.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
    PIXI.utils.TextureCache["loot-weapon-deagle-dual.img"]=PIXI.utils.TextureCache["loot-weapon-m9-dual.img"]
 
    PIXI.utils.TextureCache["loot-weapon-awc.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
    PIXI.utils.TextureCache["loot-weapon-scarssr.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
 
    PIXI.utils.TextureCache["loot-weapon-flare-gun.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
    PIXI.utils.TextureCache["loot-weapon-flare-gun-dual.img"]=PIXI.utils.TextureCache["loot-weapon-m9-dual.img"]
 
    PIXI.utils.TextureCache["loot-weapon-colt45.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
    PIXI.utils.TextureCache["loot-weapon-model94.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
    PIXI.utils.TextureCache["loot-weapon-m1911.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
    PIXI.utils.TextureCache["loot-weapon-m1a1.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
    PIXI.utils.TextureCache["loot-weapon-vector45.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
    PIXI.utils.TextureCache["loot-weapon-mkg45.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
 
    PIXI.utils.TextureCache["loot-weapon-colt45-dual.img"]=PIXI.utils.TextureCache["loot-weapon-m9-dual.img"]
    PIXI.utils.TextureCache["loot-weapon-m1911-dual.img"]=PIXI.utils.TextureCache["loot-weapon-m9-dual.img"]
 
    PIXI.utils.TextureCache["loot-weapon-m79.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
 
    PIXI.utils.TextureCache["loot-weapon-potato-cannon.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
    PIXI.utils.TextureCache["loot-weapon-potato-smg.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
 
    PIXI.utils.TextureCache["loot-weapon-heart-cannon.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
 
    PIXI.utils.TextureCache["loot-weapon-rainbow-blaster.img"]=PIXI.utils.TextureCache["loot-weapon-m9.img"]
})();
