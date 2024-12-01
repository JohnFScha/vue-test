<template>
  <div>{{ character?.name }}</div>
</template>

<script lang="ts" setup>
import { getCharacterByIdAPI } from '@/api';
import { CharacterResult } from '@/types/character';
import {ref, Ref, onMounted} from 'vue';
import { useRoute } from 'vue-router';

const character = ref<CharacterResult | Record<string, string | number>>({})

onMounted(async() => {
  const params = useRoute()
  const id = params.params.id.toString()
  character.value = await getCharacterByIdAPI(id)
})

</script>

<style scoped></style>