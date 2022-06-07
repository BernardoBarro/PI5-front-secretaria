<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-fifth" style="margin-right: -6%">
      <MenuBox />
    </div>
    <ComponentEdicaoInstituicao />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MenuBox from "../components/menu/Menu.vue";
import ComponentEdicaoInstituicao from "../components/ComponentEdicaoInstituicao.vue";

export default defineComponent({
  name: "DetalhesInstituicao",
  components: {
    MenuBox,
    ComponentEdicaoInstituicao,
  },
});
</script>

<style>
main {
  background-color: #f2f2f2;
}
</style>