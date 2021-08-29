// ==UserScript==
// @name         Surviv.io ceilings remover
// @namespace    https://github.com/iBLiSSIN
// @version      2.0
// @description  Removes ceilings, allowing you to look through buildings, bunkers, containers etc.
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
 
(function() {
    'use strict';
 
var ceilings = ""
 
// Hope it work
 
var func = {
    webpack_inject: (w, e, get) => {
        ceilings = get("03f4982a")
    },
};
 
if(typeof window.webpackJsonp === 'function') {
    window.webpackJsonp([0], func, ["webpack_inject"]);
} else {
    window.webpackJsonp.push([
        ["webpack_inject"],
        func,
        [["webpack_inject"]]
    ]);
}
 
// do the work
 
Object.keys(ceilings).forEach(function(key) {
    if(ceilings[key].type === "building") {
        for(var ceilImg in ceilings[key].ceiling.imgs) {
            ceilings[key].ceiling.imgs[ceilImg].sprite = "https://raw.githubusercontent.com/iBLiSSIN/SurvivMods/main/img/lock.png"
        }
    }
})
})();
