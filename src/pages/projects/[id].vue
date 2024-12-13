<script setup lang=ts>
import { useRoute } from 'vue-router';

const route = useRoute();

</script>

<template>
    <div>Project {{ route.params?.id }}</div>
</template>

<style scoped></style>
