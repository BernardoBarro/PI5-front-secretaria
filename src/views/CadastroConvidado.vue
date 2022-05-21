<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-fifth" style="margin-right: -6%">
      <MenuBox />
    </div>
    <ComponentCadastroConvidado />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MenuBox from "../components/menu/Menu.vue";
import ComponentCadastroConvidado from "../components/ComponentCadastroConvidado.vue";

export default defineComponent({
  name: "CadastroConvidado",
  components: {
    MenuBox,
    ComponentCadastroConvidado,
  },
});
</script>

<style>
main {
  background-color: #f2f2f2;
}
</style>