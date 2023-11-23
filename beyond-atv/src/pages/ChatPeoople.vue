<template>

  <div class="user-profile-container text-center bg-profile divider-line">
   <router-link to="/chat" class="btn btn-primary">
    <v-icon style="font-size: 24px; color: white;" left>mdi-arrow-left</v-icon>
   </router-link>

    <v-avatar size="180" class="mx-auto mt-4">
      <v-img :src="userProfileImages[user.id]" :alt="user.name"></v-img>
    </v-avatar>

    <h2 class=" white-text" :style="getTextColorStyle(user.id)">
      {{ user.name }}
    </h2>
    
   
    <v-row class="mt-4">
      <v-col>
       <p :style="getLabelStyle('text-right')">Idade:</p>
       <p :style="getTextStyle('text-right', '20px')">{{ user.age }}</p>

       <p :style="getLabelStyle('text-right')">Estado Civil:</p>
       <p :style="getTextStyle('text-right', '20px')">{{ user.status }}</p>

       <p :style="getLabelStyle('text-right')">Telefone:</p>
       <p :style="getTextStyle('text-right', '20px')">{{ user.phone }}</p>

       <p :style="getLabelStyle('text-right')">Email:</p>
       <p :style="getTextStyle('text-right', '20px')">{{ user.email }}</p>

      </v-col>
    </v-row>
    
     <v-btn icon color="black">
       <v-icon size="27">mdi-chat</v-icon>
     </v-btn>

    <h3 class="message-people divider-line mt-6" :style="getTextColorStyle(user.id)">
      Mensagens de {{ user.name }}:
    </h3>

    <ul class="list-unstyled">
      <li v-for="(message, index) in userMessages" :key="index">
        <div class="message-container" :style="getMessageContainerStyle(user.id)">
          {{ message.text }}
        </div>
      </li>
    </ul>
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
    getTextStyle(align, fontSize) {
    const textStyle = `${align ? 'text-align: ' + align + ';' : ''} color: white; font-size: ${fontSize || '16px'};`;
    return textStyle;
     },
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
  },
};
</script>


<style>
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
