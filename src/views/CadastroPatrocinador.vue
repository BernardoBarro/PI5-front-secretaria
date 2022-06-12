<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-fifth" style="margin-right: -6%">
      <MenuBox />
    </div>
    <ComponentCadastroPatrocinador />
  </main>
</template>

<script>
import { defineComponent } from "vue";
import MenuBox from "../components/menu/Menu.vue";
import ComponentCadastroPatrocinador from "../components/ComponentCadastroPatrocinador.vue";

export default defineComponent({
  name: "CadastroProjetos",
  components: {
    MenuBox,
    ComponentCadastroPatrocinador,
  },
});
</script>