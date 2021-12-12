<template>
  <div class="detail-changes">
    <input type="text" placeholder="Search in Conversation" />
    <div class="detail-change">
      Change Color
      <Colors />
    </div>
    <div class="detail-change">
      Change Emoji
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewbox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-thumbs-up"
      >
        <path
          d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import Colors from "@/components/Ui/Colors";

export default {
  name: "DetailChanges",
  components: { Colors },
};
</script>

<style lang="scss" scoped>
.detail-area input {
  background-color: transparent;
  border: none;
  width: 100%;
  color: var(--body-color);
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56.966 56.966' fill='%23c1c7cd'%3e%3cpath d='M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-size: 16px;
  background-position: 100%;
  font-family: var(--body-font);
  font-weight: 600;
  font-size: 14px;
  border-bottom: 1px solid var(--border-color);
  padding: 14px 0;

  &::placeholder {
    color: var(--detail-font-color);
  }
}

.detail-changes {
  margin-top: 40px;
}

.detail-change {
  color: var(--detail-font-color);
  font-family: var(--body-font);
  font-weight: 600;
  font-size: 14px;
  border-bottom: 1px solid var(--border-color);
  padding: 14px 0;
  display: flex;

  svg {
    width: 24px;
    height: 24px;
    margin-left: auto;
  }
}
</style>
