"use strict";
cc._RF.push(module, '8b080QXDrNLlbijO4mlPJ19', 'CoinLayer');
// script/game/CoinLayer.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        coin1: cc.Node,
        coin2: cc.Node,
        coin3: cc.Node,
        coin4: cc.Node,
        coinPrefab1: cc.Prefab,
        coinPrefab2: cc.Prefab,
        coinPrefab3: cc.Prefab,
        coinPrefab4: cc.Prefab,
        buttonDeal: cc.Node,
        buttonPour: cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {
        this.coinComeOnTheStage();
        this.schedule(this.stopBetting, 0.1);
    },


    // update (dt) {},
    //代币出场
    coinComeOnTheStage: function coinComeOnTheStage() {
        var x = this.node.width / 8;
        cc.vv.row = -3 * x;
        cc.vv.firstRow = cc.vv.row;
        this.coin1.runAction(cc.moveTo(0.1, cc.v2(-3 * x, 15)));
        this.coin2.runAction(cc.moveTo(0.2, cc.v2(-x, 15)));
        this.coin3.runAction(cc.moveTo(0.3, cc.v2(x, 15)));
        this.coin4.runAction(cc.moveTo(0.4, cc.v2(3 * x, 15)));
    },

    //创建硬币
    creatCoin1: function creatCoin1() {
        this.hintDeal();
        var coin = cc.instantiate(this.coinPrefab1);
        coin.getComponent("Coin1").init(this.coin1.x, this.coin1.y);
        coin.getComponent("Coin1").updateNumber();
        this.node.addChild(coin);
    },
    creatCoin2: function creatCoin2() {
        this.hintDeal();
        var coin = cc.instantiate(this.coinPrefab2);
        coin.getComponent("Coin2").init(this.coin2.x, this.coin2.y);
        coin.getComponent("Coin2").updateNumber();
        this.node.addChild(coin);
    },
    creatCoin3: function creatCoin3() {
        this.hintDeal();
        var coin = cc.instantiate(this.coinPrefab3);
        coin.getComponent("Coin3").init(this.coin3.x, this.coin3.y);
        coin.getComponent("Coin3").updateNumber();
        this.node.addChild(coin);
    },
    creatCoin4: function creatCoin4() {
        this.hintDeal();
        var coin = cc.instantiate(this.coinPrefab4);
        coin.getComponent("Coin4").init(this.coin4.x, this.coin4.y);
        coin.getComponent("Coin4").updateNumber();
        this.node.addChild(coin);
    },

    //余额为0时停止下注
    stopBetting: function stopBetting() {
        if (cc.vv.remaining <= 0) {
            this.coin1.active = false;
            this.coin2.active = false;
            this.coin3.active = false;
            this.coin4.active = false;
        } else if (cc.vv.remaining > 0) {
            this.coin1.active = true;
            this.coin2.active = true;
            this.coin3.active = true;
            this.coin4.active = true;
        }
    },

    //发牌提示
    hintDeal: function hintDeal() {
        this.buttonDeal.runAction(cc.moveTo(0.5, cc.v2(0, 0)));
        this.buttonPour.runAction(cc.moveTo(0.5, cc.v2(0, 200)));
    }
});

cc._RF.pop();