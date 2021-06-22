"use strict";
cc._RF.push(module, '48ebe9jevtESopgPK0w+zqW', 'WelcomeMainScript');
// script/welcome/WelcomeMainScript.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        clickIncident: cc.Node,
        helpInterface: cc.Node,
        volumeControl: cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.clickIncident.on("touchstart", this.openHelpInterface, this);
        this.volumeControl.on("touchstart", this.controlVolume, this);
    },
    start: function start() {},


    // update (dt) {},

    //跳转至开始游戏
    onButtonStart: function onButtonStart() {
        cc.director.loadScene("game");
    },

    //打开帮助界面
    openHelpInterface: function openHelpInterface() {
        this.helpInterface.active = !this.helpInterface.active;
    },

    //控制背景音乐
    controlVolume: function controlVolume() {
        if (this.node.getComponent(cc.AudioSource).volume > 0) {
            this.node.getComponent(cc.AudioSource).volume = 0;
        } else {
            this.node.getComponent(cc.AudioSource).volume = 0.5;
        }
    }
});

cc._RF.pop();