<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-fifth" style="margin-right: -6%"></div>
    <ComponentErro />
  </main>
</template>

<script>
import { defineComponent } from "vue";
import ComponentErro from "../components/ComponentErro.vue";

export default defineComponent({
  name: "ErroVue",
  components: {
    ComponentErro,
  },
});
</script>