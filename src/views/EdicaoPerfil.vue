<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-fifth" style="margin-right: -6%">
      <MenuBox />
    </div>
    <ComponentEditPerfil />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MenuBox from "../components/menu/Menu.vue";
import ComponentEditPerfil from "../components/ComponentEditPerfil.vue";

export default defineComponent({
  name: "EdicaoPerfil",
  components: {
    MenuBox,
    ComponentEditPerfil,
  },
});
</script>

<style>
main {
  background-color: #f2f2f2;
}
</style>