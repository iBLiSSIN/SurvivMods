// ==UserScript==
// @name         Surviv.io Mods by VN BPM
// @namespace    https://github.com/iBLiSSIN
// @version      2.1
// @description  Original is by dog
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

var shits = ""

// Some important shit for this whole thing to work

var func = {
    webpack_inject2: (w, e, get) => {
        shits = get("03f4982a")
    },
};

if(typeof window.webpackJsonp === 'function') {
    window.webpackJsonp([0], func, ["webpack_inject2"]);
} else {
    window.webpackJsonp.push([
        ["webpack_inject2"],
        func,
        [["webpack_inject2"]]
    ]);
}

// do the magic

Object.keys(shits).forEach(function(key2) {
    if(key2.match(/tree/g)) {
        shits[key2].img.sprite = "https://raw.githubusercontent.com/iBLiSSIN/SurvivMods/main/img/tree.png"
    } else if(key2.match(/bush/g)) {
        shits[key2].img.sprite = "https://raw.githubusercontent.com/iBLiSSIN/SurvivMods/main/img/bush.png"
    } else if(key2.match(/stone/g)) {
        shits[key2].img.sprite = "https://raw.githubusercontent.com/iBLiSSIN/SurvivMods/main/img/stone.png"
    } else if(key2.match(/barrel/g)) {
        shits[key2].img.sprite = "https://raw.githubusercontent.com/iBLiSSIN/SurvivMods/main/img/barrel.png"
    }
})
})();
