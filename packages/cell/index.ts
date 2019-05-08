import { link } from '../mixins/link';
import { VantComponent } from '../common/component';

VantComponent({
  classes: [
    'label-class',
    'value-class',
    'right-icon-class',
    'hover-class'
  ],
  options: {
    addGlobalClass: true
  },
  mixins: [link],

  props: {
    title: null,
    value: null,
    icon: String,
    size: String,
    label: String,
    center: Boolean,
    isLink: Boolean,
    required: Boolean,
    clickable: Boolean,
    titleWidth: String,
    titleClass: String,
    customStyle: String,
    arrowDirection: String,
    useLabelSlot: Boolean,
    border: {
      type: Boolean,
      value: true
    }
  },

  methods: {
    onClick(event: Weapp.Event) {
      this.$emit('click', event.detail);
      this.jumpLink();
    }
  }
});
