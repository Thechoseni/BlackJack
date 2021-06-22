

cc.Class({
    extends: cc.Component,

    properties: {
        clickIncident: cc.Node,
        helpInterface: cc.Node,
        volumeControl: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.clickIncident.on("touchstart", this.openHelpInterface, this);
        this.volumeControl.on("touchstart", this.controlVolume, this);
    },

    start() {

    },

    // update (dt) {},

    //跳转至开始游戏
    onButtonStart() {
        cc.director.loadScene("game");
    },
    //打开帮助界面
    openHelpInterface() {
        this.helpInterface.active = !this.helpInterface.active;
    },
    //控制背景音乐
    controlVolume() {
        if (this.node.getComponent(cc.AudioSource).volume > 0) {
            this.node.getComponent(cc.AudioSource).volume = 0;
        }
        else {
            this.node.getComponent(cc.AudioSource).volume = 0.5;
        }
    },
});
