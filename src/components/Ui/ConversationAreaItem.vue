<template>
  <div
    class="msg"
    :class="[{ online: item.user.online }, { active: item.active }]"
  >
    <MsgProfileAvatar :avatar="item.user.avatar" />
    <div class="msg-detail">
      <div class="msg-username">{{ item.user.name }}</div>
      <div class="msg-content">
        <span class="msg-message">{{ item.lastMsg }}</span>
        <span class="msg-date">{{ item.lastMsgDate }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import MsgProfileAvatar from "@/components/Ui/MsgProfileAvatar";
export default {
  name: "ConversationAreaItem",
  components: { MsgProfileAvatar },
  props: {
    item: {
      type: [Array, Object],
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.msg {
  display: flex;
  align-items: center;
  padding: 20px;
  cursor: pointer;
  transition: 0.2s;
  position: relative;

  &:hover {
    background-color: var(--msg-hover-bg);
  }

  &.active {
    background: var(--active-conversation-bg);
    border-left: 4px solid var(--theme-color);
  }

  &.online:before {
    content: "";
    position: absolute;
    background-color: #23be7e;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    border: 2px solid var(--theme-bg-color);
    left: 50px;
    bottom: 19px;
  }
}

.msg-username {
  margin-bottom: 4px;
  font-weight: 600;
  font-size: 15px;
}

.msg-detail {
  overflow: hidden;
}

.msg-content {
  font-weight: 500;
  font-size: 13px;
  display: flex;
}

.msg-message {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--msg-message);
}

.msg-date {
  font-size: 14px;
  color: var(--msg-date);
  margin-left: 3px;

  &:before {
    content: "•";
    margin-right: 2px;
  }
}
</style>
