import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import "../src/css/tailwind.css";
import TestButton from '../src/components/test.vue';

export default {
  title: 'TestButton',
  component: TestButton,
};

export const Text = () => ({
  components: { TestButton },
  template: '<test-button>Hello Button</test-button>',
});
