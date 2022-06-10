<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-fifth" style="margin-right: -6%">
      <MenuBox />
    </div>
    <ComponentEdicaoPatrocinador />
  </main>
</template>

<script>
import { defineComponent } from "vue";
import MenuBox from "../components/menu/Menu.vue";
import ComponentEdicaoPatrocinador from "../components/ComponentEdicaoPatrocinador.vue";

export default defineComponent({
  name: "EdicaoPatrocinador",
  components: {
    MenuBox,
    ComponentEdicaoPatrocinador,
  },
});
</script>

<style>
main {
  background-color: #f2f2f2;
}
</style>