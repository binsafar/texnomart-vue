<script>

</script>

<template>
  <div class="container">
    <div class="wrapper">
      <p>Authentication</p>
      <input placeholder="Login" type="text">
      <input placeholder="Password" type="password">
      <button>LOGIN</button>
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