(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/base/global.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'e95b2h3J5ZKSYiXXVFKdBc7', 'global', __filename);
// script/base/global.js

"use strict";

cc.vv = cc.vv || {};
//控制硬币排列
cc.vv.coinSum = 0;
cc.vv.row = 0;
cc.vv.firstRow = 0;
cc.vv.line = 300;
//玩家余额
cc.vv.remaining = 1000;
//玩家赌注
cc.vv.wager = 0;
//牌面
cc.vv.cardPictureList = [];
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
//牌排列
cc.vv.computerCardRow = 0;
cc.vv.computerCardRotation = 15;
cc.vv.playerCardRow = 0;
cc.vv.playerCardRotation = -15;
//调用发牌
cc.vv.creatOtherCard = undefined;
//赢家
cc.vv.winner = null;

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
        //# sourceMappingURL=global.js.map
        