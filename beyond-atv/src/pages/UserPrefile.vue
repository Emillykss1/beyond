<template>
  <v-main>
    <v-app-bar class="custom-app">
      <v-app-bar-title class="text-white">{{ user.name }}</v-app-bar-title>
    </v-app-bar>
    <v-btn class="btn btn-primary button mt-2" color="withe" @click="goToPeople">Todos</v-btn>
    <div class="conversation-container" ref="messageContainer" style="overflow-y: auto; max-height: calc(100vh - 64px); padding: 10px;">
      <div v-for="(message, index) in userMessages" :key="index" :class="{'sent-message': message.id === user.id, 'received-message': message.id !== user.id}">
        <div class="message-bubble">
          {{ message.text }}
        </div>
      </div>
    </div>

    <BottomBar @novaPostagem="addMessage" />
  </v-main>
</template>

<script>
import BottomBar from '@/components/BottomBar.vue';

export default {
  components: {
    BottomBar
  },
  data() {
    return {
      user: {
        name: 'Nome do Usuário',
        id: 0
      },
      userMessages: []
    };
  },
  created() {
    this.loadUserData();
    this.loadUserData();
    this.$on('novaPostagem', this.addMessage);
  },
  methods: {
    goToPeople() {
     if (this.$route.path !== '/chat') {
      this.$router.push('/chat');
     }
      },
    loadUserData() {
      const userId = parseInt(this.$route.params.id);
      this.user.id = userId;
      this.user.name = this.getUserNameById(userId);
      this.userMessages = this.getMessagesForUser(userId);
    },
    getUserNameById(userId) {
     const userNames = {
     0: 'Gustavo',
     1: 'Evellyn',
     2: 'Ana Lúcia'
     };
      return userNames[userId];
     },
    getMessagesForUser(userId) {
      const messages = [
        {
          text: 'Oii, como você está?',
          id: 0
        },
        {
          text: 'Iai vamos pro shopping junstas?',
          id: 1
        },
        {
          text: 'Você já asisstiu o filme novo da Netflix',
          id: 2
        }
      ];

      return messages.filter((message) => message.id === userId);
    },
    addMessage(message) {
      this.userMessages.push(message);
    }
  }
};
</script>

<style>
.custom-app {
  background-color: rgb(13, 47, 87) !important;
}
.text-white {
  color: white !important;
}
.conversation-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.sent-message {
  align-self: flex-end;
  background-color: #03bb85;
  color: white;
  padding: 10px;
  border-radius: 10px;
  margin: 5px;
}
.received-message {
  align-self: flex-start;
  background-color: #f2f2f2;
  color: black;
  padding: 10px;
  border-radius: 10px;
  margin: 5px;
}
.message-bubble {
  max-width: 100%;
}
</style>
