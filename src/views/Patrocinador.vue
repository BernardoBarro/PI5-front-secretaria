<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-fifth" style="margin-right: -6%">
      <MenuBox />
    </div>
    <ComponentPatrocinador />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MenuBox from "../components/menu/Menu.vue";
import ComponentPatrocinador from "../components/ComponentPatrocinador.vue";

export default defineComponent({
  name: "PatrocinadorVue",
  components: {
    MenuBox,
    ComponentPatrocinador,
  },
});
</script>

<style>
main {
  background-color: #f2f2f2;
}
</style>