<template>
  <Menubar :model="items" class="navbar">
    <template #start>
      <img alt="logo" src="@/assets/ap-logo.png" height="40" class="p-mr-2" />
    </template>
    <template #end>
      <Button
        label="Features"
        class="p-button-gray"
        :style="{ 'margin-right': '5em' }"
      />
      <Button
        label="Login with Google"
        class="p-button-danger"
        icon="pi pi-google"
      />
    </template>
  </Menubar>
  <div class="p-grid home">
    <div class="p-col-6 home-banner">
      <h1 class="title">
        Create. Share. <br />
        Analyze.
      </h1>
      <img src="@/assets/join_blue.svg" class="home-image" />
    </div>
    <div class="p-col-6 poll-area">
      <div class="poll-title">Create your poll</div>
      <Poll />
    </div>
  </div>
</template>

<script>
import Poll from "./Poll.vue";

export default {
  name: "Home",
  components: {
    Poll,
  },
  followSVG: require("../assets/collab.png"),
};
</script>

<style scoped>
.home-image {
  width: 65%;
  margin-top: 80px;
}

.home-banner {
  text-align: center;
  padding-top: 200px;
  background: #2196f3;
  color: white;
}

.home {
  height: 100vh;
}

.poll-area {
  padding-top: 200px;
  padding-left: 100px;
  background: #f8f8f8;
}

.poll {
  padding-top: 80px;
}

.p-grid {
  margin-right: 0;
  margin-left: 0;
  margin-top: 0;
}

.p-menubar {
  padding: 1rem 3rem;
  background: #ffffff;
  color: #495057;
  border: 1px solid #eaeaea;
  border-radius: 3px;
}

.title {
  text-transform: uppercase;
  font-size: 4rem;
  margin-bottom: 30px;
  text-align: left;
  margin-left: 50px;
}

.poll-title {
  font-size: 4rem;
  font-family: "Dancing Script", cursive;
  color: #333;
}

.navbar {
  position: fixed;
  z-index: 1000;
  width: 100%;
}

.p-button-gray {
  background: none;
  color: #333;
  font-weight: 600;
  border: none;
  border-bottom: 2px solid transparent;
}

.p-button-gray:enabled:hover {
  background: none;
  border: none;
  border-bottom: 2px solid #333;
  color: #333;
  border-radius: 0;
}
</style>