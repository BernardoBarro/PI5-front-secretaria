<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-fifth" style="margin-right: -6%">
      <MenuBox />
    </div>
    <ComponentCadastroGeral />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MenuBox from "../components/menu/Menu.vue";
import ComponentCadastroGeral from "../components/ComponentCadastroGeral.vue";

export default defineComponent({
  name: "CadastroGeral",
  components: {
    MenuBox,
    ComponentCadastroGeral,
  },
});
</script>

<style>
main {
  background-color: #f2f2f2;
}
</style>