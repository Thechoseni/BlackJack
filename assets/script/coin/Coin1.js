

cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.node.on("touchstart", this.moveBack, this);
    },

    start() {
        this.coinMove();
    },

    // update (dt) {},

    init(x, y) {
        this.x = x;
        this.y = y;
        this.node.x = this.x;
        this.node.y = this.y;
        cc.vv.coinSum++;
        if(cc.vv.coinSum%13==0){
            cc.vv.line-=this.node.height/2;
            cc.vv.row=cc.vv.firstRow;
        }
    },
    coinMove() {
        this.node.runAction(cc.moveTo(0.5, cc.v2(cc.vv.row, cc.vv.line + this.y)));
        cc.vv.row += (this.node.width / 4);
    },
    updateNumber() {
        cc.vv.wager += 5;
        cc.vv.remaining -= 5;
    },
    moveBack() {
        var act1=cc.moveTo(0.2, cc.v2(this.x, this.y));
        var act2=cc.scaleTo(0.01,0);//this.node.active=false;//this.node.destroy();
        this.node.runAction(cc.sequence(act1,act2));
        cc.vv.wager -= 5;
        cc.vv.remaining += 5;
        cc.vv.row -= (this.node.width / 4);
        cc.vv.coinSum--;
    },
});
