<template>
  <div class="card" :class="{ disable: isDisable }">
    <div class="card__inner" :class="{ 'is-flipped': isFlipped }" @click="ontoggleFlipCard">
      <div class="cardface card__face-front">
        <div class="card__content"></div>
      </div>
      <div class="cardface card__face-back">
        <div
          class="card__content"
          :style="{
            backgroundImage: `url(${'https://pokemon-game-jade.vercel.app/src/assets/' + imgBackFace})`
          }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardFlip',
  props: {
    imgBackFace: {
      type: String,
      required: true
    },
    currentCard: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isFlipped: false,
      isDisable: false
    }
  },
  methods: {
    ontoggleFlipCard() {
      if (this.isDisable) return false
      this.isFlipped = !this.isFlipped
      if (this.isFlipped) this.$emit('onFlip', this.currentCard)
    },
    onFlipBack() {
      this.isFlipped = false
    },
    onEnabaleDisable() {
      this.isDisable = true
    }
  }
}
</script>

<style scoped>
.card {
  display: inline-block;
  margin-right: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  cursor: pointer;
  height: 180px;
}
.card__inner {
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  position: relative;
  transform-style: preserve-3d;
}
.card__inner.is-flipped {
  transform: rotateY(180deg);
}
.cardface {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card__face-front {
  box-shadow: 0px 3px 10px 3px rgba(255, 255, 255, 0.2);
}
.card__face-back {
  box-shadow: 0px 3px 10px 3px rgba(0, 0, 0, 0.2);
  background: var(--light);
}
.card__face-front .card__content {
  background-image: url('../assets/images/icon_back.png');
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  background-size: 40px 40px;
}
.card__face-back .card__content {
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  background-size: contain;
}
.card__face-back {
  transform: rotateY(180deg);
}
.disable {
  cursor: default;
}
</style>
