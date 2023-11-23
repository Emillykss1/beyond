<template>
  <div class="login-container">
    <div class="login-box">
      <div class="back-button">
        <router-link to="/login" class="btn btn-primary">
          <v-icon left>mdi-arrow-left</v-icon>
        </router-link>
      </div>
      <center>
        <v-img src="./img/easyychat.png" width="300" height="100"></v-img>
      </center>

      <h1 class="login-title">Cadastro</h1>
      <form @submit.prevent="register">
        <div class="input-group">
          <div class="input-box" id="funcionarios">
            <div class="input-login">
              <label for="firstname">Nome</label>
            </div>

            <input v-model="username" id="firstname" type="text" name="firstname" placeholder="Digite seu nome" required class="custom-input">
          </div>
        </div>
        <br>
        <div class="input-box">
          <div class="input-login">
            <label for="number">Celular</label>
          </div>
          <input v-model="phoneNumber" id="number" type="tel" name="number" placeholder="(xx) xxxxx-xxxx" required class="custom-input">
        </div>
        <br>
        <div class="input-group">
          <div class="input-box" id="funcionarios">
            <div class="input-login">
              <label for="email">E-mail</label>
            </div>

            <input v-model="email" id="email" type="email" name="email" placeholder="Digite seu e-mail" required class="custom-input">
          </div>
        </div>
        <br>
        <div class="input-group">
          <div class="input-box" id="funcionarios">
            <div class="input-login">
              <label for="password">Senha</label>
            </div>
            <input v-model="password" id="password" type="password" name="password" placeholder="Digite sua senha" required class="custom-input">
          </div>
        </div>
        <br>
        <br>
        <button type="submit" class="btn btn-primary login-button">Cadastrar</button>
        <br>
      </form>
    </div>
  </div>
</template>


<script>
import { mapActions } from 'vuex'; // Importando o mapActions do Vuex

export default {
  data() {
    return {
      username: '',
      phoneNumber: '',
      email: '',
      password: '',
    };
  },
  methods: {
    ...mapActions('users', ['create']), // Mapeando a ação 'create' do módulo 'users'

    async register() {
      try {
        await this.create({
          email: this.email,
          password: this.password,
          // Inclua outros campos conforme necessário para sua ação 'create'
        });
      } catch (error) {
        console.error('Erro ao criar usuário:', error);
      }
    },
  },
};
</script>



<style scoped>

.back-button {
  display: flex;
  align-items: center;
  position: absolute;
  top: 30px; 
  left: 50px; 
}

.custom-input {
  background-color: #fff;
  color: #000;
  font-size: 18px;
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.input-box {
  text-align: left;
}


.login-container {
  background-color: #f0e5f6;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-box {
  background-color: rgb(13, 47, 87);
  margin: 0 auto;
  padding: 6%;
  border-radius: 5px;
  text-align: center;
  width: 80%; 
  max-width: 400px; 
}

.login-title {
  color: #fff;
  font-size: 24px;
  margin-bottom: 20px;
}

.signup-link {
  color: #fff;
  margin-top: 20px;
}

.signup-link a {
  text-decoration: underline;
  color: #f8b0ff;
}

.input-login {
  color: #fff;
}

.input-field {
  padding: 10px;
  width: 100%;
  border: 1px solid #fff;
  border-radius: 5px;
}

.login-button {
  background-color: rgb(37, 89, 148);
  color: #fff;
  font-size: 20px;
  border: none;
  padding: 8px 15px;
  border-radius: 9px;
  cursor: pointer;
}
</style>
