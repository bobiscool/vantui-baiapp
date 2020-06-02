<<<<<<< HEAD
import icons from '../../node_modules//@vant/icons/src/config';
=======
import icons from '../../dist/@vant/icons/src/config';
>>>>>>> 4584cd9b0fe41bb5db5138e177bc5ca689f4e0ab
import Page from '../../common/page';

Page({
  data: {
    icons,
    active: 0
  },

  onSwitch(event) {
    this.setData({
      active: event.detail.index
    });
  }
});
