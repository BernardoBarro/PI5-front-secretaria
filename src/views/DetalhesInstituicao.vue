<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-fifth" style="margin-right: -6%">
      <MenuBox />
    </div>
    <ComponentDetalhesInstituicao />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MenuBox from "../components/menu/Menu.vue";
import ComponentDetalhesInstituicao from "../components/ComponentDetalhesInstituicao.vue";

export default defineComponent({
  name: "DetalhesInstituicao",
  components: {
    MenuBox,
    ComponentDetalhesInstituicao,
  },
});
</script>

<style>
main {
  background-color: #f2f2f2;
}
</style>