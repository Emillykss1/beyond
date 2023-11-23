<template>
  <v-dialog v-model="dialog" max-width="290">
    <v-card>
      <v-card-title class="text-h5">
        Editar mensagem
      </v-card-title>
      <v-card-text>
        <v-text-field v-model="editedMessage" label="Nova mensagem"></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="saveEdit">
          Salvar
        </v-btn>
        <v-btn color="red darken-1" text @click="closeModal">
          Cancelar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    messageToEdit: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      dialog: true,
      editedMessage: this.messageToEdit.text
    };
  },
  methods: {
    saveEdit() {
      this.$emit('saveEdit', this.editedMessage);
      this.dialog = false;
    },
    closeModal() {
      this.dialog = false;
    }
  }
};
</script>
