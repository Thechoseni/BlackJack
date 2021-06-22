(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/game/TopUILayer.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '6a842oqXU1MnLfl5PI65dnL', 'TopUILayer', __filename);
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
        //# sourceMappingURL=TopUILayer.js.map
        