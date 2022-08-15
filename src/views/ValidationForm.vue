<script>

</script>

<template>
  <div class="container">
    <p>Validation form:</p>
    <input minlength="13" maxlength="13" placeholder="Phone number: 998901234567" name="phone" type="tel">
    <input maxlength="20" placeholder="Name" name="name" type="text">
    <input minlength="9" maxlength="9" placeholder="Passport" name="passport" type="text">
    <input maxlength="14" minlength="14" placeholder="PINFL" name="PINFL" type="number">
    <p>Date of birth:</p>
    <input name="birth_date" type="date">
    <button type="submit">SUBMIT</button>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 500px;
  border: 3px solid aliceblue;
  margin: 8px auto auto;
  padding: 8px 16px;
  border-radius: 8px;
}

p {
  margin-top: 24px;
}

input {
  margin-top: 24px;
  height: 32px;
  outline: none;
  border-bottom: 1px solid #333;
}

button {
  cursor: pointer;
  margin-top: 24px;
  height: 32px;
  border-radius: 8px;
  background-color: aliceblue;
  border: none;
}
</style>