import { VantComponent } from '../common/component';

VantComponent({
  relation: {
    name: 'col',
    type: 'descendant',
    linked(target: Weapp.Component) {
      if (this.data.gutter) {
        target.setGutter(this.data.gutter);
      }
    }
  },

  props: {
    gutter: Number
  },

  watch: {
    gutter: 'setGutter'
  },

  mounted() {
    this.setSlotChild().then(children => {
      this.children = children || [];
      if (this.data.gutter) {
        this.setGutter();
      }
    });
  },

  methods: {
    setGutter() {
      const { gutter } = this.data;
      const margin = `-${Number(gutter) / 2}px`;
      const style = gutter
        ? `margin-right: ${margin}; margin-left: ${margin};`
        : '';

      this.set({ style });
      this.children && this.children.forEach(col => {
        col.setGutter(this.data.gutter);
      });
    }
  }
});
