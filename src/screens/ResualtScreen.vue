<template>
  <main>
    <h1>You finished the game in {{ formattedTime }}</h1>
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
    }
  }
}
</script>
