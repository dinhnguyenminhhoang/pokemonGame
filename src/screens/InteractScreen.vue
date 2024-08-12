<template>
  <main>
    <div class="screen">
      <h1>hello view</h1>
      <div class="card__wrapper">
        <card-flip
          v-for="(card, index) in settings.cardsContext"
          :key="index"
          @onFlip="checkRule($event)"
          :img-back-face="`images/${card}.png`"
          :currentCard="{
            value: card,
            index: index
          }"
          ref="cards"
        />
      </div>
    </div>
  </main>
</template>

<script>
import CardFlip from '@/components/Card.vue'
import { shuffled } from '@/utils/array'
import { useRoute } from 'vue-router'
export default {
  components: {
    CardFlip
  },
  data() {
    const { params } = useRoute()
    return {
      settings: {
        totalOfBlocks: params.level,
        cardsContext: [],
        startedAt: null
      },
      rule: []
    }
  },
  mounted() {
    this.onCreateBlocks()
  },
  methods: {
    onCreateBlocks() {
      const fristCard = Array.from(
        {
          length: this.settings.totalOfBlocks / 2
        },
        (_, i) => i + 1
      )
      const secondCard = [...fristCard]
      this.settings.cardsContext = [
        ...shuffled(shuffled(shuffled(shuffled(fristCard)))),
        ...shuffled(shuffled(shuffled(shuffled(secondCard))))
      ]
      this.settings.startedAt = new Date().getTime()
    },
    checkRule(card) {
      if (this.rule.length === 2) {
        return
      }
      this.rule.push(card)
      if (this.rule.length === 2) {
        if (this.rule[0].value === this.rule[1].value) {
          this.$refs.cards[this.rule[0].index].onEnabaleDisable()
          this.$refs.cards[this.rule[1].index].onEnabaleDisable()
          this.rule = []
          const disbaleElements = document.querySelectorAll('.screen .card.disable')
          if (disbaleElements?.length === this.settings.cardsContext.length - 2) {
            this.$router.push(`/resualt/${this.settings.startedAt}`)
          }
        } else {
          setTimeout(() => {
            this.$refs.cards[this.rule[0].index].onFlipBack()
            this.$refs.cards[this.rule[1].index].onFlipBack()
            this.rule = []
          }, 400)
        }
      }
    }
  }
}
</script>
<style scoped lang="css">
.card__wrapper {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
}
</style>
