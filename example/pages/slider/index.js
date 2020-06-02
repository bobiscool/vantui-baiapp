import Page from '../../common/page';

Page({
  data: {
    currentValue: 50
  },

  onChange(event) {
    // swan.showToast({
    //   icon: 'none',
    //   title: `当前值：${event.detail}`
    // });
  },

  onDrag(event) {
    this.setData({
      currentValue: event.detail.value
    });
  }
});
