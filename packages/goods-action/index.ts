import { VantComponent } from '../common/component';
import { safeArea } from '../mixins/safe-area';

VantComponent({
  mixins: [safeArea()],
  created() {
    this.setSlotChild();
  }
});
