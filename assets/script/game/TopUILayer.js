

cc.Class({
    extends: cc.Component,

    properties: {
        boardLayer: cc.Node,
        buttonDeal: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },

    // update (dt) {},

    onButtonStart() {
        this.buttonDeal.runAction(cc.moveTo(0.5, cc.v2(0, 200)));
        this.boardLayer.active = true;
    },
});
