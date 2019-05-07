export const basic = Behavior({
    methods: {
        $emit() {
            this.triggerEvent.apply(this, arguments);
        },
        getRect(selector, all) {
            return new Promise(resolve => {
                swan.createSelectorQuery()
                    .in(this)[all ? 'selectAll' : 'select'](selector)
                    .boundingClientRect(rect => {
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
        setSlotChild() {
            // 百度小程序 父组件 没法与 slot进去的子组件 通讯 于是做了一层这样的 hack
            let customComponents = this.pageinstance.privateProperties.customComponents;
            let childs = [];
            let keys = Object.keys(customComponents);
            if (this.data.wid) {
                keys.forEach(key => {
                    if (customComponents[key].data.pid === this.data.wid) {
                        customComponents[key].ownerId = this.nodeId;
                        childs.push(customComponents[key]);
                    }
                });
            }
            return new Promise(resolve => {
                resolve(childs);
            });
        },
        getSlotParent() {
            return this.pageinstance.privateProperties.customComponents[this.ownerId];
        }
    }
});
