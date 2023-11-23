<template>
  <v-main>
      <v-app-bar style="background-color: rgb(13, 47, 87)">
      <v-app-bar-title class="text-white">ChatEasy</v-app-bar-title>
    </v-app-bar>
      <v-row>
        <v-col class="text-right mt-2">
          <v-btn class="btn btn-primary button mr-2" color="withe" @click="goToChatList">Todos os perfis</v-btn>
          <v-btn class="btn btn-primary button" color="#ff6961" @click="deleteAllMessages">Deletar tudo</v-btn>
        </v-col>
      </v-row>
      
      <div ref="messageContainer" style="overflow-y: auto; max-height: calc(100vh - 64px - 56px); padding: 10px;">
         <message-card v-for="(message, index) in messages" :key="index" :messageProp="message" @openModal="openModal" @deleteMessage="deleteMessage" />
      </div>
        <message-card :messageProp="message" @openModal="openModal" @deleteMessage="deleteMessage" />
      
      <BottomBar @novaPostagem="addMessage" />
      <ModalEditar v-if="isModalVisible" :messageToEdit="messageToEdit" @saveEdit="saveEdit" />
    </v-main>
</template>

<script>

import ModalEditar from '../components/ModalEditar.vue';
import MessageCard from '../components/MessageCard.vue';
import BottomBar from '../components/BottomBar.vue';


export default {
  components: {
    ModalEditar,
    MessageCard,
    BottomBar
  },
  data() {
    return {
      isModalVisible: false,
      messageToEdit: null,
      
      messages: [
        {
          name: 'Gustavo Oliveira',
          text: 'Hoje fui ao shopping a maior curtição #DiaFeliz',
          id: 0
        },
        {
          name: 'Gustavo Oliveira',
          text: 'Comprei um jogo muito massa',
          id: 0
        },
        {
          name: 'Evellyn Camily',
          text: 'Estou me sentindo um pouco doente :( #Triste',
          id: 1
        },
        {
          name: 'Ana Lúcia',
          text: '#DiadePraia',
          id: 2
        },
        {
          name: 'Ana Lúcia',
          text: 'Tomei uma caipirosca muito boa',
          id: 2
        }
      ]
      
    };
  },
  computed: {
    totalMessages() {
      return this.messages.length;
    }
  },
  methods: {
    getTextColorStyle() {
    return 'color: white;'; 
  },
    goToChatList() {
     if (this.$route.path !== '/chat') {
      this.$router.push('/chat');
     }
      },
    addMessage(e) {
      this.messages.push(e);
      this.$nextTick(() => {
        this.scrollToBottom();
      });
    },
    openModal(message) {
      this.messageToEdit = message;
      this.isModalVisible = true;
    },
    saveEdit(editedMessage) {
      const messageIndex = this.messages.indexOf(this.messageToEdit);
      if (messageIndex !== -1) {
        this.$set(this.messages[messageIndex], 'text', editedMessage);
      }
      this.isModalVisible = false;
    },
    deleteMessage(message) {
      if (message.name === 'Eu') {
        this.messages = this.messages.filter((m) => m !== message);
      }
    },
    deleteAllMessages() {
      this.messages = []
    },
    scrollToBottom() {
  const messageContainer = this.$refs.messageContainer;
  const bottomBarHeight = this.$refs.bottomBar ? this.$refs.bottomBar.$el.clientHeight : 0;
  const totalHeight = messageContainer.scrollHeight + bottomBarHeight;
  
  
  messageContainer.scrollTop = totalHeight - messageContainer.clientHeight;
}
  }
}
</script>

<style>

.text-white {
  color: white !important;
}
.button {
  color: #fff;
  font-size: 18px;
  border: none;
  padding: 8px 15px;
  border-radius: 9px;
  cursor: pointer;
}



</style>