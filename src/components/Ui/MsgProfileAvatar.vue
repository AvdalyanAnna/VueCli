<template>
  <img class="msg-profile" :src="avatar" alt="" />
</template>

<script>
export default {
  name: "MsgProfileAvatar",
  props: {
    avatar: {
      type: String,
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.msg-profile {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 15px;

  &.group {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--border-color);

    svg {
      width: 60%;
    }
  }
}
</style>
