<script setup>
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink class="router" to="/validation">Validation Form</RouterLink>
        <RouterLink class="router" to="/list-of-students">List of students</RouterLink>
        <RouterLink class="router" to="/auth">Authentication</RouterLink>
        <RouterLink class="router" to="/">Test tasks</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView/>
</template>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 24px 48px;
  background: aliceblue;
}

.router {
  text-decoration: none;
  font-size: 24px;
  color: #333;

}
</style>
