<template>
  <h1 class="titulo-cad-membro">CADASTRO DE MEMBRO</h1>
  <div class="circulo-cad-membro"></div>

  <div class="box-1-cad-membro">
    <div class="box-2-cad-membro">
      <div class="circulo-2-cad-membro"></div>
      <img class="img-cad-mem" src="../assets/icon-membro.png" />
    </div>

    <div class="box-3-cad-membro">
      <div class="coluna-esquerda-cad-membro">
        <form class="form-cad-membro" method="get" action="">
          <input type="text" name="ri" placeholder=" RI" ref="ri" /><br />
          <input type="text" name="nome" placeholder=" Nome" ref="nome" /><br />
          <input
            id="input-cad-mem"
            type="text"
            name="genero"
            placeholder=" Genero"
            ref="genero"
          /><br />
          <input
            id="input-cad-mem"
            type="text"
            name="nascimento"
            placeholder=" Data de Nascimento"
            ref="nascimento"
          /><br />
          <input
            id="input-cad-mem"
            type="text"
            name="admissao"
            placeholder=" Data de Admissão"
            ref="admissao"
          /><br />
          <input
            id="input-cad-mem"
            type="text"
            name="telefone"
            placeholder=" Telefone"
            ref="telefone"
          /><br />
        </form>
      </div>

      <div class="coluna-direita-cad-membro">
        <form method="get" action="">
          <input type="text" name="cep" placeholder=" CEP" ref="cep" /><br />
          <input
            id="input-cad-mem"
            type="text"
            name="ocupacao"
            placeholder=" Ocupação"
            ref="ocupacao"
          /><br />
          <input
            id="input-cad-mem"
            type="text"
            name="padrinho"
            placeholder=" Padrinho"
            ref="padrinho"
          /><br />
          <input
            id="input-cad-mem"
            type="text"
            name="email"
            placeholder=" E-mail"
            ref="email"
          /><br />
          <input
            id="input-cad-mem"
            type="text"
            name="senha"
            placeholder=" Senha"
            ref="senha"
          /><br />
          <input
            id="input-cad-mem"
            type="text"
            name="cargo"
            placeholder=" Cargo"
            ref="cargo"
          /><br />
          <br />
        </form>
      </div>
    </div>
  </div>
  <div class="container-botao-cad-membro">
    <router-link :to="{ name: 'membros' }">
      <input
        class="botao-cad-membro"
        type="submit"
        name="salvar"
        value="Salvar"
        @click="postData"
      />
    </router-link>
  </div>
</template>

<script >
import { defineComponent } from "vue";

export default defineComponent({
  name: "ComponentCadastromembro",
  data() {
    return {
      postResult: null,
    };
  },
  methods: {
    fortmatResponse(res) {
      return JSON.stringify(res, null, 2);
    },
    async postData() {
      console.log("aqui antes do POST");
      const postData = {
        ri: this.$refs.ri.value,
        nome: this.$refs.nome.value,
        genero: this.$refs.genero.value,
        nascimento: this.$refs.nascimento.value,
        admissao: this.$refs.admissao.value,
        telefone: this.$refs.telefone.value,
        cep: this.$refs.cep.value,
        ocupacao: this.$refs.ocupacao.value,
        padrinho: this.$refs.padrinho.value,
        email: this.$refs.email.value,
        senha: this.$refs.senha.value,
        cargo: this.$refs.cargo.value,
      };
      console.log(postData);
      try {
        const res = await fetch("http://localhost:8080/associado", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            charset: "utf-8",
            Authorization:'Bearer ${token}
          },
          body: JSON.stringify(postData),
        });

        if (!res.ok) {
          const message = `An error has occured: ${res.status} - ${res.statusText}`;
          throw new Error(message);
        }
      } catch (err) {
        this.postResult = err.message;
      }
    },
  },
});
</script>

<style>
.container-botao-cad-membro {
  align-items: flex-end;
  margin-block-start: auto;
  margin-bottom: 24px;
}

.botao-cad-membro {
  background-color: var(--terceira-color);
  border: none;
  border-radius: 20px;
  color: var(--principal-color);
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-left: -93px;
  padding: 8px 40px;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%);
}

#input-cad-mem {
  width: 77%;
  height: 40px;
  margin-top: 10px;
  outline: none;
  margin-left: 29px;
  border: none;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%) inset;
  background-color: var(--principal-color);
  border-radius: 3px;
}

#input-cad-mem::placeholder {
  color: var(--terceira-color);
  font-weight: 600;
  letter-spacing: 3px;
}

.coluna-esquerda-cad-membro {
  width: 55%;
  position: absolute;
  margin-left: 4%;
  margin-top: -2%;
}

.coluna-direita-cad-membro {
  width: 55%;
  margin-left: 54%;
  position: absolute;
  margin-top: -2%;
}

.box-1-cad-membro {
  background-color: var(--segunda-color);
  width: 78%;
  height: 25rem;
  margin-top: 133px;
  margin-bottom: 30px;
  padding: 0;
  border-radius: 38px 5px 5px 5px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
}

.box-2-cad-membro {
  background-color: var(--terceira-color);
  width: 20%;
  height: 25rem;
  padding: 0;
  position: absolute;
  text-align: center;
  border-radius: 38px 0px 0px 5px;
}

.box-3-cad-membro {
  width: 52.75%;
  margin-left: 20%;
  height: 25rem;
  padding: 0;
  position: absolute;
  display: inline-block;
}

.img-cad-mem {
  height: 59%;
  max-width: 100%;
  margin-top: 43%;
  margin-left: 6%;
}

.titulo-cad-membro {
  font-size: 40px;
  position: absolute;
  margin-left: 48%;
  margin-top: 1.5%;
  letter-spacing: 6px;
  font-weight: 500;
  color: var(--terceira-color);
}

.circulo-cad-membro {
  border-radius: 10px;
  width: 20px;
  height: 20px;
  background-color: var(--terceira-color);
  position: absolute;
  display: inline-block;
  margin-left: 90.5%;
  margin-top: 3%;
}

.circulo-2-cad-membro {
  border-radius: 10px;
  width: 20px;
  height: 20px;
  background-color: var(--principal-color);
  position: absolute;
  display: inline-block;
  margin-left: -2.5%;
  margin-top: 8%;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%) inset;
}
</style>