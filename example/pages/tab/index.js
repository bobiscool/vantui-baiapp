import Page from '../../common/page';

Page({
  data: {
    tabs: [1, 2, 3, 4],
    tabsMore: [1, 2, 3, 4, 5, 6, 7, 8]
  },

  onClickDisabled(event) {
    swan.showToast({
      title: `标签 ${event.detail.index + 1} 已被禁用`,
      icon: 'none'
    });
  },

  onChange(event) {
    swan.showToast({
      title: `切换到标签 ${event.detail.index + 1}`,
      icon: 'none'
    });
  },

  onClickNavRight() {
    swan.showToast({
      title: '点击right nav',
      icon: 'none'
    });
  },

  onClick(event) {
    swan.showToast({
      title: `点击标签 ${event.detail.index + 1}`,
      icon: 'none'
    });
  }
});
