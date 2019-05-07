import Page from '../../common/page';

Page({
  onChange(event) {
    swan.showToast({
      icon: 'none',
      title: `切换至第${event.detail}项`
    });
  }
});
