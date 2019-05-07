import Page from '../../common/page';

Page({
  onClickLeft() {
    swan.showToast({ title: '点击返回', icon: 'none' });
  },

  onClickRight() {
    swan.showToast({ title: '点击按钮', icon: 'none' });
  }
});
