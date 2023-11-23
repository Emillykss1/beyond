<template>
  <v-app-bar fixed bottom color="#424242">
    <v-text-field v-model="textInput" @keyup.enter="sendMessage" solo hide-details label="Enviar mensagem..."></v-text-field>
    <v-btn @click="sendMessage" icon color="blue">
      <v-icon>mdi-send</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      textInput: ''
    };
  },
  methods: {
    sendMessage() {
      let message = {
        name: 'Eu',
        text: this.textInput
      };
      this.$emit('novaPostagem', message)
      this.textInput = ''
    }
  }
}
</script>
