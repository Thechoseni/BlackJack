(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/game/BoardLayer.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'cd053qH5+JPnol7FsRHwkbN', 'BoardLayer', __filename);
// script/game/BoardLayer.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        coin1: cc.Node,
        coin2: cc.Node,
        coin3: cc.Node,
        coin4: cc.Node,
        computer: cc.Node,
        player: cc.Node,
        cardPrefab: cc.Prefab,
        computerCardSum: cc.Integer
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        //cc.vv.computerCard=this;
    },
    start: function start() {
        cc.vv.creatOtherCard = this;
        //cc.log(cc.vv.creatOtherCard);
        this.hideChip();
        this.initCard();
    },


    // update (dt) {},
    //隐藏筹码组件
    hideChip: function hideChip() {
        this.coin1.runAction(cc.moveTo(0.4, cc.v2(0, -200)));
        this.coin2.runAction(cc.moveTo(0.3, cc.v2(0, -200)));
        this.coin3.runAction(cc.moveTo(0.2, cc.v2(0, -200)));
        this.coin4.runAction(cc.moveTo(0.1, cc.v2(0, -200)));
    },

    //初始发牌
    initCard: function initCard() {
        this.initNumber();
        for (var i = 0; i < 2; i++) {
            this.creatComputerCard();
            this.creatPlayerCard();
        }
        //cc.log(cc.vv.computerCardNumber);
        //cc.log(cc.vv.playerCardNumber);
    },
    initNumber: function initNumber() {
        this.computerCardSum = 0;
        cc.vv.computerCardRow = -cc.winSize.width / 4;
        cc.vv.computerCardRotation = 15;
        cc.vv.playerCardRow = -cc.winSize.width / 4;
        cc.vv.playerCardRotation = -15;
    },

    //选牌面
    creatCardNumber: function creatCardNumber() {
        while (1) {
            var number = Math.random() * 52 | 0;
            var count = 0;
            for (var i = 0; i < cc.vv.card.length; i++) {
                if (cc.vv.card[i] == number) {
                    count++;
                }
            }
            if (count == 0) {
                cc.vv.card.push(number);
                return number;
            }
        }
    },

    //生成电脑牌
    creatComputerCard: function creatComputerCard() {
        var cardNumber = this.creatCardNumber();
        cc.vv.computerCardNumber.push(cardNumber % 13 + 1);
        var poke = cc.instantiate(this.cardPrefab);
        poke.getComponent("Card").init(cardNumber, cc.vv.computerCardRow, cc.vv.computerCardRotation);
        cc.vv.computerCardRow += poke.width / 2;
        cc.vv.computerCardRotation -= 5;
        cc.vv.computerCard.push(poke);
        if (cc.vv.computerCard.length > 1) {
            for (var i = 1; i < cc.vv.computerCard.length; i++) {
                cc.vv.computerCard[i].getChildByName("cardFace").active = false;
            }
        }
        this.computer.addChild(poke);
    },

    //生成玩家牌
    creatPlayerCard: function creatPlayerCard() {
        var cardNumber = this.creatCardNumber();
        cc.vv.playerCardNumber.push(cardNumber % 13 + 1);
        var poke = cc.instantiate(this.cardPrefab);
        poke.getComponent("Card").init(cardNumber, cc.vv.playerCardRow, cc.vv.playerCardRotation);
        cc.vv.playerCardRow += poke.width / 2;
        cc.vv.playerCardRotation += 5;
        this.player.addChild(poke);
        cc.vv.playerCard.push(poke);
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
        //# sourceMappingURL=BoardLayer.js.map
        