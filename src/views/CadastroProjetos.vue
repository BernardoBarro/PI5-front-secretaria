<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-fifth" style="margin-right: -6%">
      <MenuBox />
    </div>
    <ComponentCadastroProjetos />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MenuBox from "../components/menu/Menu.vue";
import ComponentCadastroProjetos from "../components/ComponentCadastroProjetos.vue";

export default defineComponent({
  name: "CadastroProjetos",
  components: {
    MenuBox,
    ComponentCadastroProjetos,
  },
});
</script>

<style>
main {
  background-color: #f2f2f2;
}
</style>