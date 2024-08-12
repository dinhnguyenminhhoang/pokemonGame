<template>
  <main class="screen">
    <div class="wrapper">
      <img src="../assets/images/fire.png" />
      <h1>CHÚC MỪNG BẠN ĐÃ HOÀN THÀNH</h1>
      <img src="../assets/images/fire.png" />
    </div>
    <p>{{ formattedTime }}</p>
    <button @click="continute">Chơi tiếp</button>
  </main>
</template>

<script>
export default {
  data() {
    return {
      timeFinish: new Date().getTime(),
      timeTaken: 0,
      formattedTime: ''
    }
  },
  mounted() {
    this.calcTime()
  },
  methods: {
    calcTime() {
      const timeCreate = this.$route.params.time
      this.timeTaken = this.timeFinish - new Date(parseInt(timeCreate)).getTime()

      // Convert timeTaken (milliseconds) to a more human-readable format
      this.formattedTime = this.formatTime(this.timeTaken)
    },
    formatTime(ms) {
      const seconds = Math.floor((ms / 1000) % 60)
      const minutes = Math.floor((ms / (1000 * 60)) % 60)
      const hours = Math.floor((ms / (1000 * 60 * 60)) % 24)

      return `${hours}h ${minutes}m ${seconds}s`
    },
    continute() {
      this.$router.push('/')
    }
  }
}
</script>
<style scoped>
.screen {
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
}
.wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
}
.wrapper img {
  width: 56px;
  height: 56px;
}
p {
  font-size: 25px;
}
button {
  padding: 10px 16px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  margin-top: 2px;
  background-color: transparent;
  border-color: var(--light);
  color: var(--light);
}
</style>
