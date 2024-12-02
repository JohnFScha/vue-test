<template>
  <nav class="pagination">
    <!-- First Page -->
    <button :disabled="currentPage === 1" @click="goToPage(1)" class="btn btn-square bg-base-100 text-white hover:bg-black/75"
      title="First page">
      <ChevronFirst :size="35" />
    </button>

    <!-- Previous Page -->
    <button :disabled="currentPage === 1" @click="goToPage(currentPage - 1)" title="Previous page"
      class="btn btn-square bg-base-100 text-white hover:bg-white/75">
      <ChevronLeft :size="35" />
    </button>

    <!-- Page Numbers -->
    <span v-for="page in visiblePages" :key="page">
      <button :class="{ active: currentPage === page }" @click="goToPage(page)" class="btn btn-circle btn-error">
        {{ page }}
      </button>
    </span>

    <!-- Next Page -->
    <button :disabled="currentPage === totalPages" @click="goToPage(currentPage + 1)"
      class="btn btn-square bg-base-100 text-white hover:bg-black/75" title="Next page">
      <ChevronRight :size="35" />
    </button>

    <!-- Last Page -->
    <button :disabled="currentPage === totalPages" @click="goToPage(totalPages)" title="Lest page"
      class="btn btn-square bg-base-100 text-white hover:bg-black/75">
      <ChevronLast :size="35" />
    </button>
  </nav>
</template>

<script lang="ts" setup>
import { computed, defineProps, defineEmits } from "vue";
import { useCharacterStore } from "@/store";
import { ChevronFirst, ChevronLast, ChevronRight, ChevronLeft } from 'lucide-vue-next'
const store = useCharacterStore();

// Props
const props = defineProps({
  offset: {
    type: Number,
    required: true, // Current offset
  },
  siblingCount: {
    type: Number,
    default: 2, // Number of pages to display before and after the current page
  },
});

// Emits
const emit = defineEmits(["update:offset"]);

// Computed Properties
const currentPage = computed(() => Math.floor(store.offset / 9) + 1);
const totalPages = computed(() => Math.ceil(store.totalPages! / 9));

// Calculate visible pages
const visiblePages = computed(() => {
  const pages = [];
  const start = Math.max(1, currentPage.value - props.siblingCount);
  const end = Math.min(totalPages.value, currentPage.value + props.siblingCount);

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }
  return pages;
});

// Handlers
function goToPage(page: number) {
  const newOffset = (page - 1) * 9;
  emit("update:offset", newOffset); // Emit new offset for API request
}
</script>

<style scoped>
.pagination {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 1rem;
}

button {
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
}

button[disabled] {
  cursor: not-allowed;
  opacity: 0.5;
}

button.active {
  font-weight: bold;
  text-decoration: underline;
}
</style>
