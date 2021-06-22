(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/game/GameMainScript.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '0206114NudJqrBjeXN5VMJT', 'GameMainScript', __filename);
// script/game/GameMainScript.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        backWelcome: cc.Node,
        volumeControl: cc.Node,
        bottomPour: cc.Node

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.backWelcome.on("touchstart", this.onTouchStart, this);
        this.volumeControl.on("touchstart", this.controlVolume, this);
    },
    start: function start() {
        this.initNumber();
        this.loadCrad();
        this.bottomPourHint();
    },


    // update (dt) {},

    //返回首界面
    onTouchStart: function onTouchStart() {
        cc.director.loadScene("welcome");
    },

    //控制背景音乐
    controlVolume: function controlVolume() {
        if (this.node.getComponent(cc.AudioSource).volume > 0) {
            this.node.getComponent(cc.AudioSource).volume = 0;
        } else {
            this.node.getComponent(cc.AudioSource).volume = 0.5;
        }
    },

    //下注提示
    bottomPourHint: function bottomPourHint() {
        this.bottomPour.runAction(cc.moveTo(0.5, cc.v2(0, 0)));
    },

    //加载牌面
    loadCrad: function loadCrad() {
        cc.loader.loadResDir("cardPicture", cc.SpriteFrame, function (err, list) {
            if (err) {
                cc.log(err);
            } else {
                for (var i = 0; i < list.length; i++) {
                    cc.vv.cardPictureList.push(list[i]);
                }
            }
        });
    },

    //数据初始化
    initNumber: function initNumber() {
        cc.vv.wager = 0;
        //电脑手牌
        cc.vv.computerCard = [];
        //电脑牌面
        cc.vv.computerCardNumber = [];
        //玩家手牌
        cc.vv.playerCard = [];
        //玩家牌面
        cc.vv.playerCardNumber = [];
        //已发牌计数
        cc.vv.card = [];
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
        //# sourceMappingURL=GameMainScript.js.map
        