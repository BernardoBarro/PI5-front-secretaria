<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-fifth" style="margin-right: -6%">
      <MenuBox />
    </div>
    <ComponentInstituicoes />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MenuBox from "../components/menu/Menu.vue";
import ComponentInstituicoes from "../components/ComponentInstituicoes.vue";

export default defineComponent({
  name: "InstituicoesVue",
  components: {
    MenuBox,
    ComponentInstituicoes,
  },
});
</script>

<style scoped>
main {
  background-color: #f2f2f2;
}
</style>