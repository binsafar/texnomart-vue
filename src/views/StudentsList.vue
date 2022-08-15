<script>

import {useStudentsStore} from "../stores/students";

export default {
  data() {
    return {
      student: {
        name: '',
        phone: '',
        grade: 1
      },
      dialog: false,
      dialog_nd: false
    }
  },
  setup() {
    const studentStore = useStudentsStore();
    return {studentStore}
  },
  methods: {
    register() {
      console.log(this.student)
      this.dialog = false
    }
  }
}
</script>
<template>
  <div class="container">
    <header class="header">
      <p class="student-p">Students list</p>
      <v-row justify="center">
        <v-btn color="primary" dark
               @click.stop="dialog = true">ADD STUDENT
        </v-btn>
        <v-dialog v-model="dialog" max-width="290">
          <v-card>
            <v-card-title>
              <p>Register student filling out form below:</p>
            </v-card-title>
            <v-card-text class="show-form">
              <input v-model="student.name" class="margin-t" placeholder="Full name:" name="name" type="text">
              <input v-model="student.phone" class="margin-t" placeholder="Phone number: 9989012345678"
                     name="phone_number" type="text">
              <select v-model="student.grade" class="margin-t" name="course" id="">
                <option value="1">1 st grade student</option>
                <option value="2">2 nd grade student</option>
                <option value="3">3 rd grade student</option>
                <option value="4">4 th grade student</option>
              </select>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red darken-1" text
                     @click="dialog = false">
                CLOSE
              </v-btn>
              <v-btn color="green darken-1" text
                     @click="studentStore.register(student);
                     dialog=false">
                REGISTER
              </v-btn>
            </v-card-actions>

          </v-card>
        </v-dialog>
      </v-row>
    </header>
    <div class="student-col">
      <p class="font-weight-bold">Full name</p>
      <p class="font-weight-bold">Phone number</p>
      <p class="font-weight-bold">Grade</p>
      <p></p>
      <p></p>
    </div>
    <div class="wrapper-body"
         v-for="student in studentStore.students"
         :key="student.id">
      <div class="student-col">
        <p>{{ student.name }}</p>
        <p>{{ student.phone }}</p>
        <p>{{ student.grade }}</p>
        <button>edit</button>
        <button v-on:click="studentStore.delete(student.id)">delete</button>
      </div>
    </div>
  </div>
</template>

<style>
.header {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 800px;
  margin: auto;
}

.student-col {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 16px;
}

.student-col button {
  padding: 8px 16px;
  border: 1px solid #333;
  border-radius: 8px;
}

.student-p {
  font-size: 32px;
  margin-top: 16px;
}

.show-form {
  display: flex;
  flex-direction: column;
}

select {
  cursor: pointer;
}

.show-form input {
  outline: none;
  border-bottom: 1px solid #333;
  height: 32px;
}

.margin-t {
  margin-top: 24px;
}
</style>