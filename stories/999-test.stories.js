import "../src/css/tailwind.css";

const test = () =>
  import(/* webpackChunkName: "test" */ "../src/components/test.vue");

export default {
  title: "test",
  component: test,
};

export const Text = () => ({
  components: { test },
  template: "<test></test>",
});
