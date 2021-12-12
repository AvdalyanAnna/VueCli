<template>
  <div class="app">
    <vHeader />
    <div class="wrapper">
      <ConversationArea />
      <ChatArea />
      <DetailArea />
    </div>
  </div>
</template>

<script>
import vHeader from "@/components/Layouts/vHeader";
import ConversationArea from "@/components/Widget/ConversationArea";
import DetailArea from "@/components/Widget/DetailArea";
import ChatArea from "@/components/Widget/ChatArea";

export default {
  name: "Home",
  components: { vHeader, ConversationArea, DetailArea, ChatArea },
};
</script>

<style lang="scss">
.dark-light {
  width: 22px;
  height: 22px;
  color: var(--settings-icon-color);
  flex-shrink: 0;

  svg {
    width: 100%;
    fill: transparent;
    transition: 0.5s;
  }
}

.dark-mode {
  .detail-area input {
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56.966 56.966' fill='%236f7073'%3e%3cpath d='M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z'/%3e%3c/svg%3e");
  }

  .dark-light svg {
    fill: #ffce45;
    stroke: #ffce45;
  }

  .chat-area-group span {
    color: #d1d1d2;
  }
}
</style>
