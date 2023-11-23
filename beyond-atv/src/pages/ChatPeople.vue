<template>
  <div class="user-profile-container bg-profile divider-line">
    <div class="text-center">
      <router-link to="/chat" class="btn btn-primary">
        <v-icon style="font-size: 24px; color: white;" left>mdi-arrow-left</v-icon>
      </router-link>

      <v-avatar size="180" class="mx-auto mt-4">
        <v-img :src="userProfileImages[user.id]" :alt="user.name"></v-img>
      </v-avatar>

      <h2 class="white-text mt" :style="getTextColorStyle(user.id)">
        {{ user.name }}
      </h2>

      <br>
      <br>
      <br>

      <v-btn icon color="black" @click="goToChat">
        <v-icon size="27">mdi-chat</v-icon>
      </v-btn>
    </div>

    <div>
      <p :style="getLabelStyle('text-right')">Idade:</p>
      <p :style="getTextStyle('text-right')">{{ user.age }}</p>

      <p :style="getLabelStyle('text-right')">Estado Civil:</p>
      <p :style="getTextStyle('text-right')">{{ user.status }}</p>

      <p :style="getLabelStyle('text-right')">Telefone:</p>
      <p :style="getTextStyle('text-right')">{{ user.phone }}</p>

      <p :style="getLabelStyle('text-right')">Email:</p>
      <p :style="getTextStyle('text-right')">{{ user.email }}</p>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      user: {
        name: '',
        age: '',
        status: '',
        phone: '',
        email: '',
        id: 1
      },
      userMessages: [],
      userProfileImages: {
        0: 'https://i.pinimg.com/originals/c5/5a/f9/c55af91f74010c0fb78a9bfceb65d7dd.jpg',
        1: 'https://www.oibonita.com.br/wp-content/uploads/2019/08/cabelo-curto-cacheado-730x449.jpg',
        2: 'https://cdn.brasildefato.com.br/media/ea3af2d2eccf4d63286a5b24fb3eb8f0.jpg'
      },
    };
  },
  created() {
    this.loadUserData();
    const userId = this.$route.params.id;
    const locale = this.$route.query.locale;
    console.log(locale); 
    this.user.id = userId;
    this.loadUserData();
  },
  methods: {
    getMessageContainerStyle(userId) {
      return {
        'background-color': userId === 0 ? '#2196F3' : '#03bb85',
        'max-width': '300px',
        'margin': '10px',
        'border-radius': '10px',
        'padding': '10px',
        'color': userId === 0 ? '#ffffff' : '#000000',
      };
    },
    goToPeople() {
     if (this.$route.path !== '/chat') {
      this.$router.push('/chat');
     }
      },
    goToChat() {
      this.$router.push('/pags/' + this.user.id);
    },

    getTextColorStyle() {
      return 'color: white;';
    },
    getTextColorStyle1() {
      return 'color: black';
    },
    loadUser() {
      const userId = this.$route.params.id;
      setTimeout(() => {
        this.user.name = this.getUserNameById(userId);
        this.user.age = this.getUserAgeById(userId);
        this.user.status = this.getUserStatusById(userId);
        this.user.phone = this.getUserPhoneById(userId);
        this.user.email = this.getUserEmailById(userId);
      }, 200);
    },
    loadUserData() {
      const userId = this.$route.params.id;
      setTimeout(() => {
        this.user.name = this.getUserNameById(userId);
        this.user.age = this.getUserAgeById(userId);
        this.user.status = this.getUserStatusById(userId);
        this.user.phone = this.getUserPhoneById(userId);
        this.user.email = this.getUserEmailById(userId);
      }, 200);

      this.userMessages = this.getMessagesForUser(userId);
    },
    getUserNameById(userId) {
      const userNames = {
        0: 'Gustavo Oliveira',
        1: 'Evellyn Camily',
        2: 'Ana Lúcia',
      };
      return userNames[userId] || 'Nome nulo';
    },
    getUserAgeById(userId) {
      const userAges = {
        0: 20,
        1: 23,
        2: 30
      };
      return userAges[userId] || 'Idade nulo';
    },
    getUserStatusById(userId) {
      const userStatuses = {
        0: 'Namorando',
        1: 'Solteira',
        2: 'Casada',
      };
      return userStatuses[userId] || 'Estado Civil nulo';
    },
    getUserPhoneById(userId) {
      const userPhones = {
        0: '81999999999',
        1: '81988888888',
        2: '81989898989',
      };
      return userPhones[userId] || 'Telefone nulo';
    },
    getUserEmailById(userId) {
      const userEmails = {
        0: 'GustavoOli@gmail.com',
        1: 'EvellynCamily10@gmail.com',
        2: 'AnaSilva@gmail.com',
      };
      return userEmails[userId] || 'Email Desconhecido';
    },
    getMessagesForUser(userId) {
      const messages = [
        {
          text: 'Hoje fui ao shopping a maior curtição #DiaFeliz',
          id: 0,
        },
        {
          text: 'Comprei um jogo muito massa',
          id: 0
        },
        {
          text: 'Estou me sentindo um pouco doente :( #Triste',
          id: 1,
        },
        {
          text: '#DiadePraia',
          id: 2,
        },
         {
          text: 'Tomei uma caipirosca muito boa',
          id: 2
        }
      ];

      const groupedMessages = {};
      messages.forEach((message) => {
        if (!groupedMessages[message.id]) {
          groupedMessages[message.id] = [];
        }
        groupedMessages[message.id].push(message);
      });

      return groupedMessages[userId] || [];
    },
     getLabelStyle() {
      return `color: gray; font-size: 16px; margin-bottom: 5px;`;
    },

    getTextStyle() {
      return `color: black; font-size: 16px; margin-bottom: 20px;`;
    },
  },
};
</script>


<style>
p {
  font-size: 16px;
}
.bg-profile {
  background-color:  #010124;
  width: 100vw;
  height: 45vh;
}
.divider-line {
  border-top: 2px solid #08eca8;
}
.yellow-underline {
  display: inline;
  border-bottom: 1px solid #027955;
}
.message-container {
  max-width: 300px;
  margin: 10px;
  border-radius: 10px;
  padding: 10px;
  background-color: #03bb85;
}
.message-people{
  max-width: 300px;
  margin: 10px;
  border-radius: 10px; 
  padding: 10px;
}

</style>
