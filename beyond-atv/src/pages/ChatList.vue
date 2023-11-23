<template>
  <v-main>
    <v-list>
      <v-list-item v-for="(message, index) in messages" :key="message.id" @click="goToUserProfile(message.id)">
        <v-list-item-title :style="getColorStyle(index)" class="user-list-item">
          {{ message.name }}
        </v-list-item-title>
      </v-list-item>
    </v-list>

    <v-btn class="ml-auto button" color="rgb(37, 89, 148)" @click="goToMessageList">Voltar</v-btn>
  </v-main>
</template>

<script>
export default {
  methods: {
    goToMessageList() {
      this.$router.push('/');
    },
    goToUserProfile(userId) {
      this.$router.push({ name: 'chat-people', params: { id: userId } });
    },
    getColorStyle(index) {
      const colors = ['#00009C', '#00009C', '#00009C']; // Cores mais suaves
      return `color: ${colors[index]}; font-weight: bold;`;
    }
  },
  data() {
    return {
      messages: [
        {
          name: 'Gustavo Oliveira',
          id: 0
        },
        {
          name: 'Evellyn Camily',
          id: 1
        },
        {
          name: 'Ana Lúcia',
          id: 2
        }
      ]
    };
  }
};
</script>

<style scoped>
.user-list-item {
  font-size: 18px;
  padding: 10px;
  border-bottom: 1px solid #ccc;
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
