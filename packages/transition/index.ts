import { VantComponent } from '../common/component';
import { transition } from '../mixins/transition';

VantComponent({
  classes: [
    'enter-class',
    'enter-active-class',
    'enter-to-class',
    'leave-class',
    'leave-to-class'
  ],
  props: {
      leaveToClass: String
  },
  options: {
    addGlobalClass: true
  },
  mixins: [transition(true)]
});
