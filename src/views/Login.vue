<template>
  <ComponentLogin />
</template>

<script>
import { defineComponent } from "vue";
import ComponentLogin from "../components/ComponentLogin.vue";

export default defineComponent({
  name: "LoginVue",
  components: {
    ComponentLogin,
  },
});
</script>