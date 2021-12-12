<template>
  <div class="colors">
    <div class="color blue selected" data-color="blue"></div>
    <div class="color purple" data-color="purple"></div>
    <div class="color green" data-color="green"></div>
    <div class="color orange" data-color="orange"></div>
  </div>
</template>

<script>
export default {
  name: "Colors",
};
</script>

<style lang="scss" scoped>
.colors {
  display: flex;
  margin-left: auto;
}

.color {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  cursor: pointer;

  &.selected {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' stroke='%23fff' stroke-width='3' fill='none' stroke-linecap='round' stroke-linejoin='round' class='css-i6dzq1' viewBox='0 0 24 24'%3E%3Cpath d='M20 6L9 17l-5-5'/%3E%3C/svg%3E");
    background-size: 10px;
    background-position: center;
    background-repeat: no-repeat;
  }

  &:not(:last-child) {
    margin-right: 4px;
  }
}
</style>
