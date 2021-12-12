<template>
  <div class="header">
    <Logo />
    <Search />
    <UserSettings />
  </div>
</template>

<script>
import Logo from "@/components/Logo";
import Search from "@/components/Widget/Header/Search";
import UserSettings from "@/components/Widget/Header/UserSettings";
export default {
  name: "vHeader",
  components: { Logo, Search, UserSettings },
};
</script>

<style lang="scss" scoped>
.header {
  height: 80px;
  width: 100%;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  padding: 0 20px;
}
</style>
