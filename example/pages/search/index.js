import Page from '../../common/page';

Page({
  data: {
    value: ''
  },

  onChange(e) {
    this.setData({
      value: e.detail
    });
  },

  onSearch(event) {
    if (this.data.value) {
      swan.showToast({
        title: '搜索：' + this.data.value,
        icon: 'none'
      });
    }
  },

  onCancel() {
    swan.showToast({
      title: '取消',
      icon: 'none'
    });
  },

  onClear() {
    swan.showToast({
      title: '清空',
      icon: 'none'
    });
  }
});
