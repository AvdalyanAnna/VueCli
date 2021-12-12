<template>
  <div class="search-bar">
    <input type="text" placeholder="Search..." />
  </div>
</template>

<script>
export default {
  name: "Search",
};
</script>

<style lang="scss" scoped>
.search-bar {
  height: 80px;
  z-index: 3;
  position: relative;
  margin-left: 280px;

  input {
    height: 100%;
    width: 100%;
    display: block;
    background-color: transparent;
    border: none;
    color: var(--body-color);
    padding: 0 54px;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56.966 56.966' fill='%23c1c7cd'%3e%3cpath d='M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-size: 16px;
    background-position: 25px 48%;
    font-family: var(--body-font);
    font-weight: 600;
    font-size: 15px;

    &::placeholder {
      color: var(--input-chat-color);
    }
  }
}

.dark-mode {
  .search-bar input {
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56.966 56.966' fill='%236f7073'%3e%3cpath d='M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z'/%3e%3c/svg%3e");
  }
}

@media (max-width: 780px) {
  .search-bar {
    margin-left: 0;
    flex-grow: 1;

    input {
      padding-right: 10px;
    }
  }
}
</style>
