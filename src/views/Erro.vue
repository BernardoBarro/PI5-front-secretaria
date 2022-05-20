<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-fifth" style="margin-right: -6%"></div>
    <ComponentErro />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ComponentErro from "../components/ComponentErro.vue";

export default defineComponent({
  name: "ErroVue",
  components: {
    ComponentErro,
  },
});
</script>

<style>
main {
  background-color: #f2f2f2;
  height: 625px;
}
</style>