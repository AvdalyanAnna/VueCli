<template>
  <div class="chat-msg" :class="{ owner: item.owner }">
    <div class="chat-msg-profile">
      <img
        class="chat-msg-img"
        :src="item.owner ? OWNER.avatar : ACTIVE_MSG.user.avatar"
        alt=""
      />
      <div class="chat-msg-date">{{ item.seen }}</div>
    </div>
    <div class="chat-msg-content">
      <div class="chat-msg-text" v-html="item.text">
        Luctus et ultrices posuere cubilia curae.
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ChatMsg",
  props: {
    item: {
      type: [Array, Object],
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      ACTIVE_MSG: "GET_ACTIVE_MSG",
      OWNER: "GET_OWNER",
    }),
  },
};
</script>

<style lang="scss" scoped>
.chat-msg-img {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.chat-msg-profile {
  flex-shrink: 0;
  margin-top: auto;
  margin-bottom: -20px;
  position: relative;
}

.chat-msg-date {
  position: absolute;
  left: calc(100% + 12px);
  bottom: 0;
  font-size: 12px;
  font-weight: 600;
  color: var(--msg-date);
  white-space: nowrap;
}

.chat-msg {
  display: flex;
  padding: 0 20px 45px;

  &-content {
    margin-left: 12px;
    max-width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  &-text {
    background-color: var(--chat-text-bg);
    padding: 15px;
    border-radius: 20px 20px 20px 0;
    line-height: 1.5;
    font-size: 14px;
    font-weight: 500;

    & + & {
      margin-top: 10px;
    }
  }
}

.chat-msg-text {
  color: var(--chat-text-color);
}

.owner {
  flex-direction: row-reverse;

  .chat-msg-content {
    margin-left: 0;
    margin-right: 12px;
    align-items: flex-end;
  }

  .chat-msg-text {
    background-color: var(--theme-color);
    color: #fff;
    border-radius: 20px 20px 0 20px;
  }

  .chat-msg-date {
    left: auto;
    right: calc(100% + 12px);
  }
}

.chat-msg-text img {
  max-width: 300px;
  width: 100%;
}
</style>
