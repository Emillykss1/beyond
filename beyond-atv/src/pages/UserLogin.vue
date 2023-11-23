<template>
  <div class="login-container">
    <div class="login-box">
       <center><v-img src="./img/easyychat.png" 
        width="250"
        height="100"></v-img></center>
      <form @submit.prevent="login">
        <h2 class="signup-link">Seja bem vindo!</h2>
        <br>
        <div class="form-group">
          <input type="text" id="username" v-model="username" placeholder="E-mail" class="form-control input-field" />
        </div>
        <br>
        <div class="form-group">
          <input type="password" id="password" v-model="password" placeholder="Senha" class="form-control input-field" />
        </div>
        <br>
        <button type="submit"  @click="goToChat" class="btn btn-primary login-button">Entrar</button>
        <br>
        <br>
        <h3 class="signup-link">
          Não possui conta?, <a href="/cadastro" class="signup-link-text" @click="goToRegistre">cadastre-se</a>
        </h3>
        
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
    this.$store.dispatch("users/login", {
      email: this.email,
      password: this.password
    });
    this.$router.push("/");
    },
     goToChat() {
     if (this.$route.path !== '/') {
      this.$router.push('/');
     }
      },
  },
};
</script>

<style scoped>
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
  padding: 5%; 
  border-radius: 5px;
  text-align: center;
}

.login-title {
  color: #fff;
  font-size: 24px;
  margin-bottom: 20px;
}

.signup-link {
  color: #fff;
  margin-top: 30px;
}

.signup-link a {
  text-decoration: underline;
  color: rgb(101, 158, 223); 
}

.input-login {
 color: #fff;
}

.input-field {
  padding: 10px;
  width: 85%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.login-button {
  background-color: rgb(37, 89, 148);
  color: #fff;
  font-size: 18px;
  border: none;
  padding: 8px 15px;
  border-radius: 9px;
  cursor: pointer;
}
</style>

