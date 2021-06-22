"use strict";
cc._RF.push(module, '1a530bnF81NvpLoljpev/+m', 'Coin3');
// script/coin/Coin3.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.node.on("touchstart", this.moveBack, this);
    },
    start: function start() {
        this.coinMove();
    },


    // update (dt) {},

    init: function init(x, y) {
        this.x = x;
        this.y = y;
        this.node.x = this.x;
        this.node.y = this.y;
        cc.vv.coinSum++;
    },
    coinMove: function coinMove() {
        this.node.runAction(cc.moveTo(0.5, cc.v2(cc.vv.row, cc.vv.line + this.y)));
        cc.vv.row += this.node.width / 4;
    },
    updateNumber: function updateNumber() {
        cc.vv.wager += 25;
        cc.vv.remaining -= 25;
    },
    moveBack: function moveBack() {
        var act1 = cc.moveTo(0.5, cc.v2(this.x, this.y));
        var act2 = cc.scaleTo(0.01, 0); //this.node.active=false;//this.node.destroy();
        this.node.runAction(cc.sequence(act1, act2));
        cc.vv.wager -= 25;
        cc.vv.remaining += 25;
        cc.vv.row -= this.node.width / 4;
    }
});

cc._RF.pop();