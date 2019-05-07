export const basic = Behavior({
  methods: {
    $emit() {
      this.triggerEvent.apply(this, arguments);
    },

    getRect(selector: string, all: boolean) {
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
    }
  }
});
