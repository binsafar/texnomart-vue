<script>
import {useStudentsStore} from "../stores/students";

export default {
  data() {
    return {
      cred: {
        login: 'admin',
        password: 'admin'
      }
    }
  },
  setup() {
    const store = useStudentsStore();
    return {store}
  }
}
</script>

<template>
  <div class="container">
    <div v-if="store.auth ===true" class="wrapper">
      <p>YOU ARE LOGGED IN</p>
      <button v-on:click="store.logout()">LOGOUT</button>
    </div>
    <div v-else class="wrapper">
      <p>Authentication</p>
      <input v-model="cred.login" placeholder="Login" type="text">
      <input v-model="cred.password" placeholder="Password" type="password">
      <button v-on:click="store.login(cred.login, cred.password)">LOGIN
      </button>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 400px;
  margin: 8px auto auto;
  border: 3px solid aliceblue;
  padding: 8px 16px;
}

input {
  margin-top: 24px;
  height: 32px;
  border-bottom: 1px solid #333;
  outline: none;
}

button {
  cursor: pointer;
  margin-top: 24px;
  height: 32px;
  border-radius: 8px;
  background-color: aliceblue;
  border: none;
}

.wrapper {
  display: flex;
  flex-direction: column;
}
</style>