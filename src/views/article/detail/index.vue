<template>
  <div class="p-4">
    <SearchFilter />
    <ArticleFunction />
    <ArticleManage />
    <!-- <SiteAnalysis class="!my-4 enter-y" :loading="loading" />
    <div class="md:flex enter-y">
      <VisitRadar class="md:w-1/3 w-full" :loading="loading" />
      <VisitSource class="md:w-1/3 !md:mx-4 !md:my-0 !my-4 w-full" :loading="loading" />
      <SalesProductPie class="md:w-1/3 w-full" :loading="loading" />
    </div> -->
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import SearchFilter from './components/SearchFilter.vue';
  import ArticleFunction from './components/ArticleFunction.vue';
  import ArticleManage from './components/ArticleManage.vue';
  // import VisitSource from './components/VisitSource.vue';
  // import VisitRadar from './components/VisitRadar.vue';
  // import SalesProductPie from './components/SalesProductPie.vue';

  const loading = ref(true);

  setTimeout(() => {
    loading.value = false;
  }, 1500);
</script>
