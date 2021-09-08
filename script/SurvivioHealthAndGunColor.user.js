// ==UserScript==
// @name         Surviv.io Gun Color And Show Health
// @namespace    http://tampermonkey.net/
// @version      3.7.1
// @description  No copyright more 
// @author       VN BPM
// @match        *://surviv.io/*
// @match        *://surviv2.io/*
// @match        *://2dbattleroyale.com/*
// @match        *://2dbattleroyale.org/*
// @match        *://piearesquared.info/*
// @match        *://thecircleisclosing.com/*
// @match        *://archimedesofsyracuse.info/*
// @match        *://secantsecant.com/*
// @match        *://parmainitiative.com/*
// @match        *://nevelskoygroup.com/*
// @match        *://kugahi.com/*
// @match        *://chandlertallowmd.com/*
// @match        *://ot38.club/*
// @match        *://kugaheavyindustry.com/*
// @match        *://drchandlertallow.com/*
// @match        *://rarepotato.com/*
// @grant        none
// ==/UserScript==
 
// <==========GUN_HUD==========> \\
(function() {
    'use strict';
    var elems = document.getElementsByClassName('ui-weapon-name')
    console.log(elems);
    for (var ii = 0; ii < elems.length; ii++) {
        elems[ii].addEventListener('DOMSubtreeModified', function() {
            var weaponName = this.textContent;
            var border = 'solid';
            switch (weaponName) {
                    // <---------- Default ----------> \\
                default:
                    border = '#FFFFFF';
                    border = 'solid';
                    break;
// <------------------------------MELEES------------------------------> \\
                case "Fists":
                    border += '#FFFFFF';
                    break;
                    // <-----Karmabit----->
                case "Karambit":
                    border +='#76787A';
                    break;
                case "Karambit Rugged":
                    border +='#16163B';
                    break;
                case "Karmabit Prismatic":
                    border +='#34D682';
                    break;
                case "Karmabit Drowned":
                    border +='#0CBCCC';
                    break;
                    // <-----Bayonet----->
                case "Bayonet":
                    border +='#76787A';
                    break;
                case "Bayonet Rugged":
                    border +='#76787A';
                    break;
                case "Bayonet Woodland":
                    border +='#5AA415';
                    break;
                    // <-----Huntsman----->
                case "Huntsman":
                    border +='#76787A';
                    break;
                case "Huntsman Rugged":
                    border +='#A0441E';
                    break;
                case "Huntsman Burnished":
                    border +='#DACF76';
                    break;
                    // <-----Bowie----->
                case "Bowie":
                    border +='#76787A';
                    break;
                case "Bowie Vintage":
                    border +='#B6B6B6';
                    break;
                case "Bowie Frontier":
                    border +='#BA4B2E';
                    break;
                    // <-----Axe----->
                case "Wood Axe":
                    border +='#95500E';
                    break;
                case "Blood Axe":
                    border +='#568A09';
                    break;
                case "Fire Axe":
                    border +='#B40000';
                    break;
                    // <-----Katana----->
                case "Katana":
                    border +='#858585';
                    break;
                case "Katana Rusted":
                    border +='#875F37';
                    break;
                case "Katana Orchid":
                    border +='#C189CB';
                    break;
                    // <-----Naginata----->
                case 'Naginata':
                    border += '#3C3C3C';
                    break;
                    // <-----Machetes----->
                case "Machete": //Machete Taiga
                    border +='#685F40';
                    break;
                case "Kukri": //Tallow's Kukri
                    border +='#685F40';
                    break;
                    // <-----Hammers----->
                case "Stone Hammer":
                    border +='#585A5C';
                    break;
                case "Sledgehammer":
                    border +='#585A5C';
                    break;
                    // <-----Hook----->
                case "Hook":
                    border +='#888A8B';
                    break;
                    // <-----Pan----->
                case "Pan":
                    border +='#484848';
                    break;
                    // <-----Knuckles----->
                case "Knuckles":
                    border +='#63452D';
                    break;
                case "Knuckles Rusted":
                    border +='#63452D';
                    break;
                case "Knuckles Heroic":
                    border +='#90700D';
                    break;
                    // <-----Saw----->
                case "Bonesaw": //Bonesaw Rusted
                    border += '#461904';
                    break;
                    // <-----Cobalt----->
                case "Spade": //Trench Spade
                    border +='#DACF59';
                    break;
                case "Crowbar": //Scouting Crowbar
                    border +='#ACD563';
                    break;
                case "Kukri": //Marksman's Recurve
                    border +='#8DCEDB';
                    break;
                case "Bonesaw": //The Separator
                    border +='#DC79DC';
                    break;
                case "Katana": //Hakai no Katana
                    border +='#C76A67';
                    break;
                case "War Hammer": //Panzerhammer
                    border +='#EAB963';
                    break;
                    // <===GUNS===>
                    // <---------- YELLOW: 9mm ----------> \\
                case 'CZ-3A1':
                case 'G18C':
                case 'M9':
                case 'M93R':
                case 'MAC-10':
                case 'MP5':
                case 'P30L':
                case 'Dual P30L':
                case 'UMP9':
                case 'Vector':
                case 'VSS':
                    border += '#FFAE00';
                    break;
                    // <---------- RED: 12 Gauge ----------> \\
                case 'M1100':
                case 'M870':
                case 'MP220':
                case 'Saiga-12':
                case 'SPAS-12':
                case 'Super 90':
                case 'USAS-12':
                    border += '#FF0000';
                    break;
                    // <---------- BLUE: 7.62 mm ----------> \\
                case 'AK-47':
                case 'M134':
                case 'AN-94':
                case 'BAR M1918':
                case 'BLR 81':
                case 'DP-28':
                case 'Groza':
                case 'Groza-S':
                case 'M1 Garand':
                case 'M39 EMR':
                case 'Mosin-Nagant':
                case 'OT-38':
                case 'OTs-38':
                case 'PKP Pecheneg':
                case 'SCAR-H':
                case 'SV-98':
                case 'SVD-63':
                    border += '#0066FF';
                    break;
                    // <---------- GREEN: 5.56mm ----------> \\
                case 'FAMAS':
                case 'L86A2':
                case 'M249':
                case 'M416':
                case 'M4A1-S':
                case 'Mk 12 SPR':
                case 'QBB-97':
                case 'Scout Elite':
                    border += '#039E00';
                    break;
                    // <---------- Purple: .45 ACP ----------> \\
                case 'M1911':
                case 'M1A1':
                case 'Mk45G':
                case 'Model 94':
                case 'Peacemaker':
                case 'Vector 45':
                    border += '#7900FF';
                    break;
                    // <---------- 40mm ----------> \\
                case 'M79':
                    border += '#0CDDAB';
                    break;
                    // <---------- FLARE ----------> \\
                case 'Flare Gun':
                    border += '#D44600';
                    break;
                    // <---------- .50 AE ----------> \\
                case 'DEagle 50':
                    border += '#292929';
                    break;
                    // <---------- .308 Subsonic ----------> \\
                case 'AWM-S':
                case 'Mk 20 SSR':
                    border += '#465000';
                    break;
                    // <---------- Potato ----------> \\
                case 'Potato Cannon':
                case 'Spud Gun':
                    border += '#935924';
                    break;
                    // <---------- CURSED: 9 mm ----------> \\
                case 'M9 Cursed':
                    border += '#323232';
                    break;
                    // <---------- Bugle ----------> \\
                case 'Bugle':
                    border += '#F2BC21';
                    break;
                    // <---------- Trowables ----------> \\
                case 'Frag':
                    border += '#837516';
                    break;
                case 'Mine':
                    border += '#837516';
                    break;
                case 'MIRV':
                    border += '#940000';
                    break;
                case 'Potato':
                    border += '#958359';
                    break;
                case 'Smoke':
                    border += '#DDDDDD';
                    break;
                case 'Snowball':
                    border += '#74D4F8';
                    break;
                case 'Strobe':
                    border += '#FFF205';
                    break;
                case 'Iron Bomb':
                    border += '#00FF00';
                    break;
            }
            // <---------- GUN END ----------> \\
            console.log(border);
            this.parentNode.style.border = border;
        }, false);
    }
})();
// <========== ARMOR HUD ==========> \\
(function() {
    'use strict';
    var elems = document.getElementsByClassName('ui-armor-level');
    console.log(elems);
    for (var ii = 0; ii < elems.length; ii++) {
        elems[ii].addEventListener('DOMSubtreeModified', function() {
            var armorlv = this.textContent;
            var border = 'solid';
            switch (armorlv) {
                default: border = '#000000';
                    border = 'solid';
                    break;
                case 'Lvl. 0':
                    border += '#FFFFFF';
                    break;
                case 'Lvl. 1':
                    border += '#FFFFFF';
                    break;
                case 'Lvl. 2':
                    border += '#808080';
                    break;
                case 'Lvl. 3':
                    border += '#0C0C0C';
                    break;
                case 'Lvl. 4':
                    border += '#FFF00F';
                    break;
            }
            console.log(border);
            this.parentNode.style.border = border;
        }, false);
    }
})();
// <==========ARMOR_END==========> \\
// <==========HUD_END==========> \\
(function() {
    'use strict';
    var num = 0;
    var sound = new Audio("data:audio/wav;base64,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");
 
    var HP = document.createElement("span");
    HP.setAttribute("id","my_Health");
    HP.style.color = "white";
    HP.style.fontSize = "25px";
    HP.style.display = "block";
    document.getElementById("ui-boost-counter").before(HP);
 
    var warn = document.createElement("span");
    warn.style.color = "red";
    warn.style.fontSize = "20px";
    warn.style.display = "none";
    document.getElementById("ui-equipped-ammo-wrapper").prepend(warn);
 
    setInterval(function(){
        HP.innerHTML ="Health: " + Math.round(document.getElementById("ui-health-actual").style.width.slice(0,-1));
        if(document.getElementById("game-area-wrapper").style.display == "block" && document.getElementById("ui-stats").style.display == "none"){
            if(HP.innerHTML.slice(5,8) <= 25 && num == 0){
                HP.style.color = "red";
                warn.style.display = "block";
                sound.play();
            } else {
                if(HP.innerHTML.slice(5,8) > 25){
                    HP.style.color = "white";
                    warn.style.display = "none";
                    sound.pause();
                    num = 0;
                }
            }
        } else {
            sound.pause();
        }
    },500);
    window.addEventListener("keydown",function(event){
        if(event.key == " "){
            sound.pause();
            num = 1;
        }
    });
})();
// ==/UserScript==
 
var first = true;
(function() {
    'use strict';
 
    const times = [];
    let fps;
 
    function refreshLoop() {
        window.requestAnimationFrame(() => {
            const now = performance.now();
            while (times.length > 0 && times[0] <= now - 1000) {
                times.shift();
            }
            times.push(now);
            fps = times.length;
            if (first) {
                var obj = document.createElement("P");
                var text = document.createTextNode("FPS: " + Math.round(fps).toString());
                obj.appendChild(text);
                obj.setAttribute("id", "fps");
                document.getElementById("ui-top-left").appendChild(obj);
                var credit = document.createElement("P");
                credit.appendChild(txt);
                document.getElementById("ui-top-left").appendChild(credit);
                first = false;
            } else {
                document.getElementById("fps").innerHTML = "FPS: " + Math.round(fps).toString();
            }
            refreshLoop();
        });
    }
    refreshLoop();
})();
