(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/game/buttonLayer.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '7b917DnkbRJtZgl+4yqo3UV', 'buttonLayer', __filename);
// script/game/buttonLayer.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        buttonDistributional: cc.Node,
        buttonStop: cc.Node,
        buttonDouble: cc.Node,
        buttonDeal: cc.Node,
        endLayer: cc.Node

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {
        this.buttonMove();
        this.schedule(this.handBoom, 0.5);
    },


    // update (dt) {},
    buttonMove: function buttonMove() {
        var x = this.node.width / 8;
        this.buttonDistributional.runAction(cc.moveTo(0.1, cc.v2(-3 * x, 15)));
        this.buttonStop.runAction(cc.moveTo(0.2, cc.v2(-x, 15)));
        this.buttonDouble.runAction(cc.moveTo(0.3, cc.v2(x, 15)));
        this.buttonDeal.runAction(cc.moveTo(0.4, cc.v2(3 * x, 15)));
    },


    //按钮事件
    onButtonDeal: function onButtonDeal() {
        cc.vv.creatOtherCard.creatPlayerCard();
        cc.vv.creatOtherCard.creatComputerCard();
    },
    onButtonStop: function onButtonStop() {
        this.creatWinner();
    },
    onButtonDouble: function onButtonDouble() {
        cc.vv.remaining -= cc.vv.wager;
        cc.vv.wager += cc.vv.wager;
    },


    //爆牌判断
    handBoom: function handBoom() {
        var computerCardNumberSum = this.sumComputer();
        var playerCardNumberSum = this.sumPlayer();
        if (computerCardNumberSum > 21 && playerCardNumberSum <= 21) {
            cc.log("玩家获胜");
            cc.vv.winner = "computerHandBoom";
            this.endLayer.active = true;
        } else if (playerCardNumberSum > 21 && computerCardNumberSum <= 21) {
            cc.log("电脑获胜");
            cc.vv.winner = "playerHandBoom";
            this.endLayer.active = true;
        } else if (playerCardNumberSum > 21 && computerCardNumberSum > 21) {
            cc.log("平局");
            cc.vv.winner = "draw";
            this.endLayer.active = true;
        } else {
            return;
        }
    },

    //判断胜者
    creatWinner: function creatWinner() {
        var computerCardNumberSum = this.sumComputer();
        var playerCardNumberSum = this.sumPlayer();
        if (computerCardNumberSum == playerCardNumberSum) {
            cc.log("平局");
            cc.vv.winner = "draw";
            this.endLayer.active = true;
        } else if (computerCardNumberSum > playerCardNumberSum) {
            cc.log("电脑获胜");
            cc.vv.winner = "computerWin";
            this.endLayer.active = true;
        } else {
            cc.log("玩家获胜");
            cc.vv.winner = "playerWin";
            this.endLayer.active = true;
        }
    },
    sumComputer: function sumComputer() {
        var computerCardNumberSum = 0;
        for (var i = 0; i < cc.vv.computerCardNumber.length; i++) {
            if (cc.vv.computerCardNumber[i] > 1 && cc.vv.computerCardNumber[i] <= 10) {
                computerCardNumberSum += cc.vv.computerCardNumber[i];
            } else if (cc.vv.computerCardNumber[i] > 10) {
                computerCardNumberSum += 10;
            } else if (cc.vv.computerCardNumber[i] == 1) {
                if (computerCardNumberSum + 11 > 21) {
                    computerCardNumberSum += 1;
                } else {
                    computerCardNumberSum += 11;
                }
            } else {
                computerCardNumberSum += cc.vv.computerCardNumber[i];
            }
        }
        //cc.log(computerCardNumberSum);
        return computerCardNumberSum;
    },
    sumPlayer: function sumPlayer() {
        var playerCardNumberSum = 0;

        for (var i = 0; i < cc.vv.playerCardNumber.length; i++) {
            if (cc.vv.playerCardNumber[i] > 1 && cc.vv.playerCardNumber[i] <= 10) {

                playerCardNumberSum += cc.vv.playerCardNumber[i];
            } else if (cc.vv.playerCardNumber[i] > 10) {

                playerCardNumberSum += 10;
            } else if (cc.vv.playerCardNumber[i] == 1) {
                if (playerCardNumberSum + 11 > 21) {

                    playerCardNumberSum += 1;
                } else {

                    playerCardNumberSum += 11;
                }
            } else {
                playerCardNumberSum += cc.vv.playerCardNumber[i];
            }
        }

        return playerCardNumberSum;
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
        //# sourceMappingURL=buttonLayer.js.map
        