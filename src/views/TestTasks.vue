<script>
export default {
  data() {
    return {
      dialog: false
    }
  }
}
</script>
<template>
  <v-row justify="center">
    <v-btn color="primary" dark
           @click.stop="dialog = true">ADD TASK
    </v-btn>
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title>
          ADD TEST
        </v-card-title>

        <v-card-text>
          <input placeholder="Question" class="form-input" type="text">
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text
                 @click="dialog = false">CLOSE
          </v-btn>
          <v-btn color="green darken-1" text
                 @click="dialog = false">ADD
          </v-btn>
        </v-card-actions>

      </v-card>
    </v-dialog>
  </v-row>
</template>

<style>
.form-input {
  outline: none;
  border-bottom: 1px solid #333;
}
</style>
