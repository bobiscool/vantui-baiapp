export const link = Behavior({
  properties: {
    url: String,
    linkType: {
      type: String,
      value: 'navigateTo'
    }
  },

  methods: {
    jumpLink(urlKey = 'url') {
      const url = this.data[urlKey];
      if (url) {
        swan[this.data.linkType]({ url });
      }
    }
  }
});
