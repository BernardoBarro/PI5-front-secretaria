<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-fifth" style="margin-right: -6%">
      <MenuBox />
    </div>
    <ComponentPerfil />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MenuBox from "../components/menu/Menu.vue";
import ComponentPerfil from "../components/ComponentPerfil.vue";

export default defineComponent({
  name: "PerfilVue",
  components: {
    MenuBox,
    ComponentPerfil,
  },
});
</script>

<style>
main {
  background-color: #f2f2f2;
}
</style>