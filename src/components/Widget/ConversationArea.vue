<template>
  <div class="conversation-area">
    <ConversationAreaItem
      v-for="(item, index) in MSG"
      :key="index"
      :item="item"
    />
    <button class="add"></button>
    <div class="overlay"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ConversationAreaItem from "@/components/Ui/ConversationAreaItem";

export default {
  name: "ConversationArea",
  components: { ConversationAreaItem },
  computed: {
    ...mapGetters({
      MSG: "GET_MSG",
    }),
  },
};
</script>

<style lang="scss" scoped>
.conversation-area {
  width: 340px;
  flex-shrink: 0;
  border-right: 1px solid var(--border-color);
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
}
.add {
  position: sticky;
  bottom: 25px;
  background-color: var(--theme-color);
  width: 60px;
  height: 60px;
  border: 0;
  border-radius: 50%;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-plus'%3e%3cpath d='M12 5v14M5 12h14'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 28px;
  box-shadow: 0 0 16px var(--theme-color);
  margin: auto auto -55px;
  flex-shrink: 0;
  z-index: 1;
  cursor: pointer;
}

.overlay {
  position: sticky;
  bottom: 0;
  left: 0;
  width: 340px;
  flex-shrink: 0;
  background: var(--overlay-bg);
  height: 80px;
}

@media (max-width: 780px) {
  .conversation-area {
    display: none;
  }
}
</style>
