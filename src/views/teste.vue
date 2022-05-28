<template>
  <div id="app">
    <!-- <li v-for="datas in data" :key="datas.pessoa.nome">
      {{ datas.pessoa.nome }}
    </li> -->
    {{ data }}
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      data: {},
    };
  },
  beforeMount() {
    this.getName();
  },

  methods: {
    async getName() {
      const res = await fetch(
        "http://localhost:8080/instituicoes_beneficiadas"
      );
      const data = await res.json();
      this.data = data;
      console.log(data);
    },
  },
};
</script>