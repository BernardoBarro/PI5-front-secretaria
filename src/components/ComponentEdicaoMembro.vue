<template>
  <h1 class="titulo-det-pro">EDIÇÃO MEMBROS</h1>
  <div class="circulo-det-pro"></div>

  <div class="box-1-edi-mem">
    <div class="circulo-2-det-pro"></div>

    <div class="coluna-esquerda-edi-membro">
      <form>
        <input
          id="input-edi-mem"
          type="text"
          name="ri"
          placeholder=" RI"
          ref="ri"
          v-bind:value="ri"
          disabled
        /><br />
        <input
          id="input-edi-mem"
          type="text"
          name="nome"
          placeholder=" Nome"
          ref="nome"
          v-bind:value="nome"
        /><br />
        <input
          id="input-edi-mem"
          type="text"
          name="genero"
          placeholder=" Genero"
          ref="genero"
          v-bind:value="genero"
        /><br />
        <input
          id="input-edi-mem"
          type="text"
          name="nascimento"
          placeholder=" Data de Nascimento"
          ref="nascimento"
          v-bind:value="nascimento"
        /><br />
        <input
          id="input-edi-mem"
          type="text"
          name="admissao"
          placeholder=" Data de Admissão"
          ref="admissao"
          v-bind:value="admissao"
        /><br />
        <input
          id="input-edi-mem"
          type="text"
          name="telefone"
          placeholder=" Telefone"
          ref="telefone"
          v-bind:value="telefone"
        /><br />
      </form>
    </div>

    <div class="coluna-direita-edi-membro">
      <form>
        <input
          id="input-edi-mem"
          type="text"
          name="cep"
          placeholder=" CEP"
          ref="cep"
          v-bind:value="cep"
        /><br />
        <input
          id="input-edi-mem"
          type="text"
          name="ocupacao"
          placeholder=" Ocupação"
          ref="ocupacao"
          v-bind:value="ocupacao"
        /><br />
        <input
          id="input-edi-mem"
          type="text"
          name="padrinho"
          placeholder=" Padrinho"
          ref="padrinho"
          v-bind:value="padrinho"
        /><br />
        <input
          id="input-edi-mem"
          type="text"
          name="email"
          placeholder=" E-mail"
          ref="email"
          v-bind:value="email"
        /><br />
        <input
          id="input-edi-mem"
          type="text"
          name="status"
          placeholder=" Status"
          ref="status"
          v-bind:value="status"
          disabled
        /><br />
        <input
          id="input-edi-mem"
          type="text"
          name="cargo"
          placeholder=" Cargo"
          ref="cargo"
          v-bind:value="cargo"
        /><br />
        <br />
      </form>
    </div>
  </div>

  <div class="container-botao-det-pro">
    <router-link :to="{ name: 'membros' }">
      <input
        class="botao-editar-det-pro"
        type="submit"
        name="editar"
        value="Editar"
        @click="putData"
      />
    </router-link>
    <router-link :to="{ name: 'membros' }">
      <input
        class="botao-excluir-det-pro"
        type="submit"
        name="excluir"
        value="Excluir"
        @click="deleteDataById"
      />
    </router-link>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import router from "../router";

export default defineComponent({
  name: "ComponentEdicaoProjetos",
  data() {
    return {
      data: {},
      ri: {},
      nome: {},
      genero: {},
      nascimento: {},
      admissao: {},
      telefone: {},
      cep: {},
      ocupacao: {},
      padrinho: {},
      email: {},
      status: {},
      cargo: {},
    };
  },
  beforeMount() {
    this.getName();
  },
  methods: {
    async getName() {
      const res = await fetch(
        "http://localhost:8080/associado/" + router.currentRoute.value.params.ri
      );
      const data = await res.json();
      this.data = data;
      this.ri = data.ri;
      this.nome = data.pessoa.nome;
      this.genero = data.pessoa.genero;
      this.nascimento = data.pessoa.nascimento;
      this.admissao = data.admissao;
      this.telefone = data.pessoa.telefone;
      this.cep = data.pessoa.endereco.cep;
      this.ocupacao = data.pessoa.ocupacao;
      this.padrinho = data.padrinho;
      this.email = data.pessoa.email;
      this.status = data.status;
      this.cargo = data.cargo.nome;
    },
    async putData() {
      const {
        nome,
        genero,
        nascimento,
        admissao,
        telefone,
        cep,
        ocupacao,
        padrinho,
        email,

        cargo,
      } = this.$refs;
      const putData = {
        nome: nome.value,
        genero: genero.value,
        nascimento: nascimento.value,
        admissao: admissao.value,
        telefone: telefone.value,
        cep: cep.value,
        ocupacao: ocupacao.value,
        padrinho: padrinho.value,
        email: email.value,
        cargo: cargo.value,
      };

      console.log(putData);
      try {
        const res = await fetch(
          "http://localhost:8080/associado/" +
            router.currentRoute.value.params.ri,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              charset: "utf-8",
            },
            body: JSON.stringify(putData),
          }
        );
        if (!res.ok) {
          const message = `An error has occured: ${res.status} - ${res.statusText}`;
          throw new Error(message);
        }
      } catch (err) {
        this.putResult = err.message;
      }
    },
  },
});
</script>

<style scoped>
.container-botao-det-pro {
  align-items: flex-end;
  margin-block-start: auto;
  margin-bottom: 24px;
}

.botao-excluir-det-pro {
  background-color: var(--terceira-color);
  border: none;
  border-radius: 20px;
  color: var(--principal-color);
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-left: -275px;
  padding: 8px 40px;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%);
  width: 125px;
}

.botao-editar-det-pro {
  background-color: var(--terceira-color);
  border: none;
  border-radius: 20px;
  color: var(--principal-color);
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-left: -125px;
  padding: 8px 40px;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%);
  width: 125px;
}

#input-edi-mem {
  width: 50%;
  height: 40px;
  margin-top: 10px;
  outline: none;
  margin-left: 29px;
  border: none;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%) inset;
  background-color: var(--principal-color);
  border-radius: 3px;
  color: var(--terceira-color);
  padding-left: 11px;
  font-weight: 600;
}

#input-edi-mem::placeholder {
  color: var(--terceira-color);
  font-weight: 600;
}

.box-1-edi-mem {
  background-color: var(--segunda-color);
  width: 78%;
  height: 25rem;
  margin-top: 133px;
  margin-bottom: 30px;
  padding: 0;
  border-radius: 38px 5px 5px 5px;
  text-align: center;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
}

.coluna-esquerda-edi-membro {
  width: 55%;
  position: absolute;
  margin-left: -4%;
}

.coluna-direita-edi-membro {
  width: 55%;
  margin-left: 28%;
  position: absolute;
}

form {
  margin-top: 33px;
}

.titulo-det-pro {
  font-size: 40px;
  position: absolute;
  margin-left: 56%;
  margin-top: 1.5%;
  letter-spacing: 6px;
  font-weight: 500;
  color: var(--terceira-color);
}

.circulo-det-pro {
  border-radius: 10px;
  width: 20px;
  height: 20px;
  background-color: var(--terceira-color);
  position: absolute;
  display: inline-block;
  margin-left: 90.5%;
  margin-top: 3%;
}

.circulo-2-det-pro {
  border-radius: 10px;
  width: 20px;
  height: 20px;
  background-color: var(--principal-color);
  position: absolute;
  display: inline-block;
  margin-left: -37%;
  margin-top: 2%;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%) inset;
}
</style>