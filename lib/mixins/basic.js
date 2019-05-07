"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.basic = Behavior({
    methods: {
        $emit: function () {
            this.triggerEvent.apply(this, arguments);
        },
        getRect: function (selector, all) {
            var _this = this;
            return new Promise(function (resolve) {
                swan.createSelectorQuery()
                    .in(_this)[all ? 'selectAll' : 'select'](selector)
                    .boundingClientRect(function (rect) {
                    if (all && Array.isArray(rect) && rect.length) {
                        resolve(rect);
                    }
                    if (!all && rect) {
                        resolve(rect);
                    }
                })
                    .exec();
            });
        },
        setSlotChild: function () {
            var _this = this;
            // 百度小程序 父组件 没法与 slot进去的子组件 通讯 于是做了一层这样的 hack
            var customComponents = this.pageinstance.privateProperties.customComponents;
            var childs = [];
            var keys = Object.keys(customComponents);
            if (this.data.wid) {
                keys.forEach(function (key) {
                    if (customComponents[key].data.pid === _this.data.wid) {
                        customComponents[key].ownerId = _this.nodeId;
                        childs.push(customComponents[key]);
                    }
                });
            }
            return new Promise(function (resolve) {
                resolve(childs);
            });
        },
        getSlotParent: function () {
            return this.pageinstance.privateProperties.customComponents[this.ownerId];
        }
    }
});
