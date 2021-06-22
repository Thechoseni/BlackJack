"use strict";
cc._RF.push(module, '6a842oqXU1MnLfl5PI65dnL', 'TopUILayer');
// script/game/TopUILayer.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        boardLayer: cc.Node,
        buttonDeal: cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {},


    // update (dt) {},

    onButtonStart: function onButtonStart() {
        this.buttonDeal.runAction(cc.moveTo(0.5, cc.v2(0, 200)));
        this.boardLayer.active = true;
    }
});

cc._RF.pop();