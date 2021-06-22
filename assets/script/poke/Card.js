

cc.Class({
    extends: cc.Component,

    properties: {
        cardFace: cc.Node,

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        this.cardMove();
    },

    // update (dt) {},

    init(cardNumber, x, rotation) {
        this.x = x;
        this.node.x = 0;
        this.node.y = 500;
        this.node.rotation = rotation;
        this.cardFace.getComponent(cc.Sprite).spriteFrame = cc.vv.cardPictureList[cardNumber];
    },
    cardMove() {
        this.node.runAction(cc.moveTo(0.5, cc.v2(this.x, 0)));
    },
});
