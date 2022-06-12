<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-fifth" style="margin-right: -6%">
      <MenuBox />
    </div>
    <ComponentPerfil />
  </main>
</template>

<script>
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
