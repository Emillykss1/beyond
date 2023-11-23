<template>

  <v-card :class="messageProp.name !== 'Eu' ? 'custom-dark-blue' : ''" outlined class="ma-3 accent-4">
    <v-card-subtitle class="font-weight-bold custom-font-size">{{ messageProp.name }}</v-card-subtitle>
   <v-card-text :style="{ color: messageProp.name !== 'Eu' ? 'white' : 'black' }">
      {{ messageProp.text }}
    </v-card-text>

    <v-btn  v-if="messageProp.name === 'Eu'" @click="openModal" icon color="blue">
      <v-icon>mdi-pencil</v-icon>
    </v-btn>

    <v-btn class="text-right" v-if="messageProp.name === 'Eu'" @click="deleteMessage" icon color="blue">
      <v-icon>mdi-delete</v-icon>
    </v-btn>

  </v-card>
</template>

<script>
export default {
  props: {
    messageProp: {
      type: Object,
      required: true
    }
  },
  methods: {
    
    openModal() {
      this.$emit('openModal', this.messageProp);
    },
    deleteMessage() {
      this.$emit('deleteMessage', this.messageProp);
    }
  }
};
</script>

<style scoped>

.custom-dark-blue {
  background-color: #325981;
}

.text-white{
 color: white;
}

.custom-font-size {
  font-size: 17px; 
}
</style>