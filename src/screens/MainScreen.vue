<template>
  <div class="screen">
    <h1>PEKEMON MEMORIES</h1>
    <h3>Select mode to start game</h3>
    <div class="action">
      <button
        @click="navigateToGame(option.itemCount)"
        v-for="option in optionSelect"
        :key="option.id"
        class="btn_select"
      >
        <span>{{ option.title }}</span>
        <span>{{ option.level }}</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main_Screen',
  data() {
    return {
      optionSelect: [
        { id: 1, title: '4x4', level: 'Easy', itemCount: 16 },
        { id: 2, title: '6x6', level: 'Normal', itemCount: 36 },
        { id: 3, title: '8x8', level: 'Hard', itemCount: 64 },
        { id: 4, title: '10x10', level: 'Super Hard', itemCount: 100 }
      ]
    }
  },
  methods: {
    navigateToGame(level) {
      this.$router.push(`/interact/${level}`)
    }
  }
}
</script>

<style scoped>
.screen {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.action {
  display: flex;
  gap: 10px;
}
.btn_select {
  padding: 40px;
}
</style>
