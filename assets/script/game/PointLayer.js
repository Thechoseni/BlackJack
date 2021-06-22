

cc.Class({
    extends: cc.Component,

    properties: {
        wager: cc.Node,
        remaining: cc.Node,

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        this.schedule(this.updateLabel, 0.1);
    },

    // update (dt) {},

    updateLabel() {
        this.updataWager();
        this.updateRemaining();
    },
    updataWager() {
        if (cc.vv.wager <= 0) {
            cc.vv.wager = 0;
            this.wager.getComponent(cc.Label).string = 0;
            return;
        }
        this.wager.getComponent(cc.Label).string = cc.vv.wager;
    },
    updateRemaining() {
        if (cc.vv.remaining <= 0) {
            cc.vv.remaining = 0;
            this.remaining.getComponent(cc.Label).string = 0;
            return;
        }
        this.remaining.getComponent(cc.Label).string = cc.vv.remaining;
    },
});
