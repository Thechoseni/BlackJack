(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/coin/Coin1.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'fd169Bycb9I4Lmg6IaW7vkd', 'Coin1', __filename);
// script/coin/Coin1.js

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
        if (cc.vv.coinSum % 13 == 0) {
            cc.vv.line -= this.node.height / 2;
            cc.vv.row = cc.vv.firstRow;
        }
    },
    coinMove: function coinMove() {
        this.node.runAction(cc.moveTo(0.5, cc.v2(cc.vv.row, cc.vv.line + this.y)));
        cc.vv.row += this.node.width / 4;
    },
    updateNumber: function updateNumber() {
        cc.vv.wager += 5;
        cc.vv.remaining -= 5;
    },
    moveBack: function moveBack() {
        var act1 = cc.moveTo(0.2, cc.v2(this.x, this.y));
        var act2 = cc.scaleTo(0.01, 0); //this.node.active=false;//this.node.destroy();
        this.node.runAction(cc.sequence(act1, act2));
        cc.vv.wager -= 5;
        cc.vv.remaining += 5;
        cc.vv.row -= this.node.width / 4;
        cc.vv.coinSum--;
    }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=Coin1.js.map
        