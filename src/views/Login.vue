<template>
  <div class="login">
    <h1 class="title">Login in the page</h1>
    <form action class="form">

      <label class="col-form-label col-form-label-lg" for="#email">Email:</label>
      <input 
      class="form-control form-control-lg" 
      type="email" 
      id="email" 
      required 
      placeholder="Email">

      <label class="col-form-label col-form-label-lg" for="#password">Password:</label>
      <input 
      class="form-control form-control-lg" 
      type="password" 
      id="password" 
      placeholder="Password">
        <p v-if="error" class = "error">Wrong Password or Wrong Username</p>
      <input class="form-submit" type="submit" value="Login">
    </form>
  </div>
</template>

<script>
export default {
    data: () => ({
    email: "",
    password: "",
    error: false
  }),
  methods: {
    async login() {
        try {
            await auth.login(this.email, this.password);
            const user = {
            email: this.email
            };
        auth.setUserLogged(user);
        this.$router.push("/");
        } catch (error) {
        console.log(error);
        this.error = true;
        }
    }
  }
};
</script>

<style lang="scss" scoped>

</style>