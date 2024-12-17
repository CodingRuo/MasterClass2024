<script setup lang=ts>
import { columns } from '@/utils/tableColumns/tasksColumns';

usePageStore().pageData.title = 'Tasks';

const tasks = ref<TasksWithProjects | null>(null);

const fetchTasks = async () => {
    const { data, error, status } = await tasksWithProjectsQuery;

    if (error) useErrorStore().setError({ error, customCode: status });

    tasks.value = data;
}

await fetchTasks();

</script>

<template>
    <DataTable v-if="tasks" :columns="columns" :data="tasks" />
</template>

<style scoped></style>
