<template>
  <div>
    <div class="money">
      <div class="money-item" v-for="(value, name, index) in MONEY" :key="index">
        <div class="title">{{value.Name}}</div>
        <div class="text">
          <div class="price">
            <div>1<span> {{name}} </span></div>
            to
            <div>{{ (1 / value.Now).toFixed(5) }} <span> RUB </span>
            </div>
          </div>
          <div class="trend">{{ (value.Trend).toFixed(5) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "Home",
  computed: {
    ...mapGetters({
      MONEY: 'getMoney'
    })
  },
  mounted() {
    this.SET_MONEY()
  },
  methods: {
    ...mapActions({
      SET_MONEY: 'setMoney'
    })
  }

}
</script>

<style lang="scss">
body {
  background: dodgerblue;
}

.money {
  &-item {
    max-width: 500px;
    width: 100%;
    margin: 10px auto;
    border-radius: 16px;
    padding: 20px;
    box-sizing: border-box;
    background: #fff;

    .title {
      font-size: 24px;
      line-height: 28px;
      color: grey;
    }

    .text {
      display: flex;
      justify-content: space-between;
      margin: 20px 0 0;
      font-size: 20px;
      line-height: 24px;
      color: black;

      .price {
        display: flex;
      }
    }
  }
}
</style>
