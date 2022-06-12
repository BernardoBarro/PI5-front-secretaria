<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-fifth" style="margin-right: -6%">
      <MenuBox />
    </div>
    <ComponentPatrocinador />
  </main>
</template>

<script>
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