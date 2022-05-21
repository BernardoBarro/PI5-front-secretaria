<template>
  <ComponentRecuperacaoSenha />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ComponentRecuperacaoSenha from "../components/ComponentRecuperacaoSenha.vue";

export default defineComponent({
  name: "RecuperacaoSenha",
  components: {
    ComponentRecuperacaoSenha,
  },
});
</script>