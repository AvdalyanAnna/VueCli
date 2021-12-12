<template>
  <div class="detail-photos">
    <div class="detail-photo-title">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewbox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-image"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
      Shared photos
    </div>
    <div class="detail-photo-grid">
      <img
        v-for="(item, index) in gallery"
        :key="index"
        :src="item.img"
        alt="gallery-item"
      />
    </div>
    <div class="view-more">View More</div>
  </div>
</template>

<script>
export default {
  name: "DetailPhotos",
  props: {
    gallery: {
      type: [Array, Object],
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.detail-photo-title {
  display: flex;
  align-items: center;

  svg {
    width: 16px;
  }
}

.detail-photos {
  margin-top: 30px;
  text-align: center;
}

.detail-photo-title {
  color: var(--detail-font-color);
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 20px;

  svg {
    margin-right: 8px;
    width: 26px;
    height: 26px;
  }
}

.detail-photo-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 6px;
  grid-row-gap: 6px;
  grid-template-rows: repeat(3, 60px);

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 8px;
    object-position: center;
  }
}

.view-more {
  color: var(--theme-color);
  font-weight: 600;
  font-size: 15px;
  margin: 25px 0;
}
</style>
