(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/game/EndLayer.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '709d7N7hMRHcpUSQinogj5o', 'EndLayer', __filename);
// script/game/EndLayer.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        buttonRestart: cc.Node,
        draw: cc.Node,
        buttonComputerHandBoom: cc.Node,
        buttonComputerWin: cc.Node,
        buttonPlayerHnadBoom: cc.Node,
        buttonPlayerWin: cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {
        this.init();
        this.showComputerHand();
        this.whoWin();
    },


    // update (dt) {},
    onButtonRestart: function onButtonRestart() {
        cc.director.loadScene("game");
    },
    init: function init() {
        this.draw.active = false;
        this.buttonComputerWin.active = false;
        this.buttonPlayerWin.active = false;
        this.buttonComputerHandBoom.active = false;
        this.buttonPlayerHnadBoom.active = false;
    },

    //判断胜负
    whoWin: function whoWin() {
        switch (cc.vv.winner) {
            case "draw":
                this.draw.active = true;
                break;
            case "computerWin":
                this.buttonComputerWin.active = true;
                //cc.vv.remaining-=cc.vv.wager;
                break;
            case "playerWin":
                this.buttonPlayerWin.active = true;
                cc.vv.remaining += cc.vv.wager * 2;
                break;
            case "computerHandBoom":
                this.buttonComputerHandBoom.active = true;
                cc.vv.remaining += cc.vv.wager * 2;
                break;
            case "playerHandBoom":
                this.buttonPlayerHnadBoom.active = true;
                //cc.vv.remaining-=cc.vv.wager;
                break;
            default:
                this.draw.active = true;
                break;

        }
    },

    //展示庄家手牌
    showComputerHand: function showComputerHand() {
        for (var i = 0; i < cc.vv.computerCard.length; i++) {
            cc.vv.computerCard[i].getChildByName("cardFace").active = true;
        }
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
        //# sourceMappingURL=EndLayer.js.map
        