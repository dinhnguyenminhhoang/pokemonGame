<template>
  <div class="screen">
    <h1 class="header">PEKEMON MEMORIES</h1>
    <h3 class="des">Select mode to start game</h3>
    <div class="action">
      <button
        @click="navigateToGame(option.itemCount)"
        v-for="option in optionSelect"
        :key="option.id"
        class="btn_select"
      >
        <span class="title">{{ option.title }}</span>
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
.action button {
  border: 2px dashed var(--light);
  background-color: transparent !important;
  color: var(--light);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2;
  font-weight: 600;
  border-radius: 6px;
  width: 140px;
  height: 100px;
  cursor: pointer;
}
.action button:hover {
  scale: 1.1;
  transition: all 0.4s ease-in-out;
}
.action span {
  font-size: 14px;
  font-weight: 300;
  width: 100%;
}
.action .title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 6px;
}
.header {
  font-size: 40px;
}
.des {
  font-size: 20px;
  margin-bottom: 6px;
}
</style>
