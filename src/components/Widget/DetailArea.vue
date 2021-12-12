<template>
  <div class="detail-area">
    <div class="detail-area-header">
      <MsgProfileAvatar :avatar="ACTIVE_MSG.user.avatar" />
      <div class="detail-title">{{ ACTIVE_MSG.user.name }}</div>
      <div class="detail-subtitle">{{ ACTIVE_MSG.user.subTitle }}</div>
      <div class="detail-buttons">
        <button class="detail-button">
          <svg
            viewbox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="0"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-phone"
          >
            <path
              d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
            />
          </svg>
          Call Group
        </button>
        <button class="detail-button">
          <svg
            viewbox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="0"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-video"
          >
            <path d="M23 7l-7 5 7 5V7z" />
            <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
          </svg>
          Video Chat
        </button>
      </div>
    </div>
    <DetailChanges />
    <DetailPhotos :gallery="ACTIVE_MSG.gallery" />
    <a href="https://twitter.com/AysnrTrkk" class="follow-me" target="_blank">
      <span class="follow-text">
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="css-i6dzq1"
        >
          <path
            d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
          ></path>
        </svg>
        Follow me on Twitter
      </span>
      <span class="developer">
        <img
          src="https://pbs.twimg.com/profile_images/1253782473953157124/x56UURmt_400x400.jpg"
        />
        Aysenur Turk — @AysnrTrkk
      </span>
    </a>
  </div>
</template>

<script>
import MsgProfileAvatar from "@/components/Ui/MsgProfileAvatar";
import DetailChanges from "@/components/Ui/DetailChanges";
import DetailPhotos from "@/components/Ui/DetailPhotos";
import { mapGetters } from "vuex";

export default {
  name: "DetailArea",
  components: { MsgProfileAvatar, DetailChanges, DetailPhotos },
  computed: {
    ...mapGetters({
      ACTIVE_MSG: "GET_ACTIVE_MSG",
    }),
  },
};
</script>

<style lang="scss" scoped>
.detail-area {
  width: 340px;
  flex-shrink: 0;
  border-left: 1px solid var(--border-color);
  margin-left: auto;
  padding: 30px 30px 0 30px;
  display: flex;
  flex-direction: column;
  overflow: auto;
}

.detail-area-header {
  display: flex;
  flex-direction: column;
  align-items: center;

  .msg-profile {
    margin-right: 0;
    width: 60px;
    height: 60px;
    margin-bottom: 15px;
  }
}

.detail-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
}

.detail-subtitle {
  font-size: 12px;
  font-weight: 600;
  color: var(--msg-date);
}

.detail-button {
  border: 0;
  background-color: var(--button-bg-color);
  padding: 10px 14px;
  border-radius: 5px;
  color: var(--button-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  flex-grow: 1;
  font-weight: 500;

  svg {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }

  &:last-child {
    margin-left: 8px;
  }
}

.detail-buttons {
  margin-top: 20px;
  display: flex;
  width: 100%;
}

.follow-me {
  text-decoration: none;
  font-size: 14px;
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: auto;
  overflow: hidden;
  color: #9c9cab;
  padding: 0 20px;
  height: 52px;
  flex-shrink: 0;
  position: relative;
  justify-content: center;

  svg {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }
}

.follow-text {
  display: flex;
  align-items: center;
  transition: 0.3s;
}

.follow-me:hover {
  .follow-text {
    transform: translateY(100%);
  }

  .developer {
    top: 0;
  }
}

.developer {
  position: absolute;
  color: var(--detail-font-color);
  font-weight: 600;
  left: 0;
  top: -100%;
  display: flex;
  transition: 0.3s;
  padding: 0 20px;
  align-items: center;
  justify-content: center;
  background-color: var(--developer-color);
  width: 100%;
  height: 100%;
}

.developer img {
  border-radius: 50%;
  width: 26px;
  height: 26px;
  object-fit: cover;
  margin-right: 10px;
}
@media (max-width: 1120px) {
  .detail-area {
    display: none;
  }
}
</style>
