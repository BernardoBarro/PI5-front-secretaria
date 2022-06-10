<template>
  <h1 class="titulo-cad-membro">CADASTRO DE MEMBRO</h1>
  <div class="circulo-cad-membro"></div>

  <div class="box-1-cad-membro">
    <div class="box-2-cad-membro">
      <div class="circulo-2-cad-membro"></div>
      <img class="img-cad-membro" src="../assets/icon-perfil.png" />
      <br />
      <h2 class="titulo-status-cad-membro">Status</h2>
      <select class="status-cad-membro" name="status" ref="status">
        <option>ATIVO</option>
        <option>AFASTADO</option>
        <option>DESLIGADO</option>
      </select>
    </div>

    <div class="box-3-cad-membro">
      <div class="coluna-esquerda-cad-membro">
        <form class="form-cad-membro" method="get" action="">
          <input type="text" name="ri" placeholder=" RI" ref="ri" /><br />
          <input type="text" name="nome" placeholder=" Nome" ref="nome" /><br />
          <input
            type="text"
            name="genero"
            placeholder=" Genero"
            ref="genero"
          /><br />
          <input
            type="text"
            name="nascimento"
            placeholder=" Data de Nascimento"
            ref="nascimento"
          /><br />
          <input
            type="text"
            name="admissao"
            placeholder=" Data de Admissão"
            ref="admissao"
          /><br />
          <input
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
            type="text"
            name="ocupacao"
            placeholder=" Ocupação"
            ref="ocupacao"
          /><br />
          <input
            type="text"
            name="padrinho"
            placeholder=" Padrinho"
            ref="padrinho"
          /><br />
          <input
            type="text"
            name="email"
            placeholder=" E-mail"
            ref="email"
          /><br />
          <input
            type="text"
            name="senha"
            placeholder=" Senha"
            ref="senha"
          /><br />
          <input
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
        // status: this.$refs.status.value,
        cargo: this.$refs.cargo.value,
      };
      console.log(postData);
      try {
        const res = await fetch("http://localhost:8080/associado", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            charset: "utf-8",
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
.titulo-status-cad-membro {
  color: #ffff;
  font-weight: 600;
  font-size: 20px;
  text-align: left;
  margin-left: 12%;
}

.container-botao-cad-membro {
  align-items: flex-end;
  margin-block-start: auto;
  margin-bottom: 24px;
}

.botao-cad-membro {
  background-color: #f970a4;
  border: none;
  border-radius: 20px;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-left: -93px;
  padding: 8px 40px;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%);
}

.cargo-comissoes-cad-membro {
  width: 77%;
  height: 40px;
  margin-top: 12px;
  outline: none;
  margin-left: 29px;
  border: none;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%) inset;
  background-color: #f2f2f2;
  border-radius: 3px;
  color: #f970a4;
  font-weight: 600;
  letter-spacing: 3px;
}

.status-cad-membro {
  width: 77%;
  height: 40px;
  margin-top: 12px;
  outline: none;
  border: none;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%) inset;
  background-color: #f2f2f2;
  border-radius: 3px;
  color: #f970a4;
  font-weight: 600;
  letter-spacing: 3px;
}

input[type="text"] {
  width: 77%;
  height: 40px;
  margin-top: 10px;
  outline: none;
  margin-left: 29px;
  border: none;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%) inset;
  background-color: #f2f2f2;
  border-radius: 3px;
}

input[type="date"] {
  width: 77%;
  height: 40px;
  margin-top: 12px;
  outline: none;
  margin-left: 29px;
  border: none;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%) inset;
  background-color: #f2f2f2;
  border-radius: 3px;
  color: #f970a4;
}

input[type="e-mail"] {
  width: 77%;
  height: 40px;
  margin-top: 12px;
  outline: none;
  margin-left: 29px;
  border: none;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%) inset;
  background-color: #f2f2f2;
  border-radius: 3px;
}

input[type="e-mail"]::placeholder {
  color: #f970a4;
  font-weight: 600;
  letter-spacing: 3px;
}

input[type="date"]::placeholder {
  font-weight: 600;
  letter-spacing: 3px;
}

input[type="text"]::placeholder {
  color: #f970a4;
  font-weight: 600;
  letter-spacing: 3px;
}

#textarea::placeholder {
  color: #f970a4;
  font-weight: 600;
  letter-spacing: 3px;
  padding: 5px;
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
  background-color: white;
  width: 78%;
  height: 25rem;
  margin-top: 133px;
  margin-bottom: 30px;
  padding: 0;
  border-radius: 38px 5px 5px 5px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
}

.box-2-cad-membro {
  background-color: #f970a4;
  width: 20%;
  height: 25rem;
  padding: 0;
  position: absolute;
  text-align: center;
  border-radius: 38px 0px 0px 5px;
}

.img-cad-membro {
  margin-top: 46px;
}

input[type="radio"] {
  display: none;
}

.cargos-cad-membro {
  background-color: #f2f2f2;
  border: none;
  color: #f970a4;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  padding: 7px 38px;
  width: 76%;
  margin-top: 5px;
  cursor: pointer;
  border-radius: 5px;
}

.cargos-cad-membro:hover {
  background-color: #d91b5c;
}

.box-3-cad-membro {
  width: 52.75%;
  margin-left: 20%;
  height: 25rem;
  padding: 0;
  position: absolute;
  display: inline-block;
}

.inputs-cad-membro {
  margin-top: 3px;
}

.titulo-cad-membro {
  font-size: 40px;
  position: absolute;
  margin-left: 48%;
  margin-top: 1.5%;
  letter-spacing: 6px;
  font-weight: 500;
  color: #ffb0ce;
}

.circulo-cad-membro {
  border-radius: 10px;
  width: 20px;
  height: 20px;
  background-color: #f970a4;
  position: absolute;
  display: inline-block;
  margin-left: 90.5%;
  margin-top: 3%;
}

.circulo-2-cad-membro {
  border-radius: 10px;
  width: 20px;
  height: 20px;
  background-color: #f2f2f2;
  position: absolute;
  display: inline-block;
  margin-left: -26.5%;
  margin-top: 8%;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%) inset;
}

.cargos-cad-membro label span {
  cursor: pointer;
  width: 100%;
}

.cargos-cad-membro label input {
  z-index: 1;
}
.cargos-cad-membro input[type="radio"] {
  all: unset;
}
.cargos-cad-membro input[type="radio"]:checked + span {
  color: #d91b5c;
  font-weight: 700;
}
</style>