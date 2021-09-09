// ==UserScript==
// @name         Surviv.io trees and bushes remover
// @namespace    https://github.com/iblissin
// @version      2.1
// @description  Cuts trees and makes the bushes really small, exposing any players who hide under them or is near them.
// @author       youtuber vnbpm
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
        shits.tree_03.img.sprite = "https://raw.githubusercontent.com/iBLiSSIN/SurvivMods/main/img/tree.png"
        shits.tree_03sv.img.sprite = "https://raw.githubusercontent.com/iBLiSSIN/SurvivMods/main/img/tree.png"
        shits.tree_06.img.sprite = "https://raw.githubusercontent.com/iBLiSSIN/SurvivMods/main/img/tree.png"
        shits.tree_07.img.sprite = "https://raw.githubusercontent.com/iBLiSSIN/SurvivMods/main/img/tree.png"
        shits.tree_07sp.img.sprite = "https://raw.githubusercontent.com/iBLiSSIN/SurvivMods/main/img/tree.png"
        shits.tree_07su.img.sprite = "https://raw.githubusercontent.com/iBLiSSIN/SurvivMods/main/img/tree.png"
        shits.tree_08.img.sprite = "https://raw.githubusercontent.com/iBLiSSIN/SurvivMods/main/img%20for%20change/big-tree.png"
        shits.tree_08sp.img.sprite = "https://raw.githubusercontent.com/iBLiSSIN/SurvivMods/main/img%20for%20change/big-tree.png"
        shits.tree_08f.img.sprite = "https://raw.githubusercontent.com/iBLiSSIN/SurvivMods/main/img%20for%20change/big-tree.png"
        shits.tree_08su.img.sprite = "https://raw.githubusercontent.com/iBLiSSIN/SurvivMods/main/img%20for%20change/big-tree.png"
        shits.tree_05.img.sprite = "https://raw.githubusercontent.com/iBLiSSIN/SurvivMods/main/img%20for%20change/tree-desert-05.png"
        shits.tree_05c.img.sprite = "https://raw.githubusercontent.com/iBLiSSIN/SurvivMods/main/img%20for%20change/tree-desert-05c.png"
    } else if(key2.match(/bush/g)) {
        shits[key2].img.sprite = "https://raw.githubusercontent.com/iBLiSSIN/SurvivMods/main/img/bush.png"
    } else if(key2.match(/stone/g)) {
        shits.stone_01.img.sprite = "https://raw.githubusercontent.com/iBLiSSIN/SurvivMods/main/img/stone.png"
        shits.stone_01cb.img.sprite = "https://raw.githubusercontent.com/iBLiSSIN/SurvivMods/main/img/stone.png"
        shits.stone_01x.img.sprite = "https://raw.githubusercontent.com/iBLiSSIN/SurvivMods/main/img/stone.png"
        shits.stone_03.img.sprite = "https://raw.githubusercontent.com/iBLiSSIN/SurvivMods/main/img%20for%20change/big%20stone%202.png"
        shits.stone_03cb.img.sprite = "https://raw.githubusercontent.com/iBLiSSIN/SurvivMods/main/img%20for%20change/big%20stone%202.png"
        shits.stone_03x.img.sprite = "https://raw.githubusercontent.com/iBLiSSIN/SurvivMods/main/img%20for%20change/big%20stone%202.png"
        shits.stone_03b.img.sprite = "https://raw.githubusercontent.com/iBLiSSIN/SurvivMods/main/img%20for%20change/big%20stone%202.png"
        shits.stone_03fimg.sprite = "https://raw.githubusercontent.com/iBLiSSIN/SurvivMods/main/img%20for%20change/big%20stone%202.png"
    } else if(key2.match(/barrel/g)) {
        shits[key2].img.sprite = "https://static.wikia.nocookie.net/survivio/images/7/73/A_campfire.png"
    }
})
})();
