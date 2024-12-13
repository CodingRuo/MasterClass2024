<script setup lang=ts>

</script>

<template>
    <div>Home View</div>
    <RouterLink :to="{ name: '/projects/[id]', params: { id: 1 } }">Go to projects</RouterLink>
</template>

<style scoped></style>
