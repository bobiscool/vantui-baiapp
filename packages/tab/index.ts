import { VantComponent } from '../common/component';

VantComponent({
  props: {
    dot: Boolean,
    info: null,
    title: String,
    disabled: Boolean,
    titleStyle: String
  },

  data: {
    width: null,
    inited: false,
    active: false,
    animated: false
  },

  watch: {
    title: 'update',
    disabled: 'update',
    dot: 'update',
    info: 'update',
    titleStyle: 'update'
  },

  methods: {
    update() {
      const parent = this.getSlotParent();
      if (parent) {
        parent.updateTabs();
      }
    }
  }
});
