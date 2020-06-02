import { VantComponent } from '../common/component';

VantComponent({
  field: true,

  relation: {
    name: 'radio',
    type: 'descendant',
    linked(target: Weapp.Component) {
      const { value, disabled } = this.data;
      target.set({
        value: value,
        disabled: disabled || target.data.disabled
      });
    }
  },
  created: function() {
    this.setSlotChild().then(children => {
      this.children = children || [];
      let value = this.data.value;
      if (this.data.disabled) {
        this.children.forEach(child => {
        child.set({ disabled: true || child.data.disabled });
        });
      }
      if(value) {
          this.children.forEach(child => {
            child.set({ value });
          });
      }
    });
  },
  props: {
    value: null,
    disabled: Boolean
  },

  watch: {
    value(value) {
      const children = this.children || [];
      children.forEach(child => {
        child.set({ value });
      });
    },

    disabled(disabled: boolean) {
      const children = this.children || [];
      children.forEach(child => {
        child.set({ disabled: disabled || child.data.disabled });
      });
    }
  }
});
