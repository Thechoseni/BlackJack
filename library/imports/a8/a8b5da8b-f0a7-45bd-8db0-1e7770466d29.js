"use strict";
cc._RF.push(module, 'a8b5dqL8KdFvY2wHndwRm0p', 'Card');
// script/poke/Card.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        cardFace: cc.Node

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {
        this.cardMove();
    },


    // update (dt) {},

    init: function init(cardNumber, x, rotation) {
        this.x = x;
        this.node.x = 0;
        this.node.y = 500;
        this.node.rotation = rotation;
        this.cardFace.getComponent(cc.Sprite).spriteFrame = cc.vv.cardPictureList[cardNumber];
    },
    cardMove: function cardMove() {
        this.node.runAction(cc.moveTo(0.5, cc.v2(this.x, 0)));
    }
});

cc._RF.pop();