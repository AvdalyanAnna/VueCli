<template>
  <div class="chat-area">
    <ChatHeader />
    <div class="chat-area-main">
      <ChatMsg
        v-for="(item, index) in ACTIVE_MSG.msg"
        :key="index"
        :item="item"
      />
    </div>
    <ChatFooter />
  </div>
</template>

<script>
import ChatHeader from "@/components/Widget/Chat/ChatHeader";
import ChatFooter from "@/components/Widget/Chat/ChatFooter";
import ChatMsg from "@/components/Widget/Chat/ChatMsg";
import { mapGetters } from "vuex";
export default {
  name: "ChatArea",
  components: { ChatHeader, ChatFooter, ChatMsg },
  computed: {
    ...mapGetters({
      ACTIVE_MSG: "GET_ACTIVE_MSG",
    }),
  },
};
</script>

<style lang="scss" scoped>
.chat-area {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;

  &-main {
    flex-grow: 1;
  }
}
</style>
