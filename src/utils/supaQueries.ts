import type { QueryData } from '@supabase/supabase-js'

const tasksWithProjectsQuery = supabase.from('tasks').select(`*, projects(id, name, slug)`)

const projectsQuery = supabase.from('projects').select()

const projectQuery = (slug: string) =>
    supabase
        .from('projects')
        .select(`*, tasks(id, name, status, due_date)`)
        .eq('slug', slug)
        .single()

const taskQuery = (id: string) =>
    supabase.from('tasks').select(`*, projects(id,name,slug)`).eq('id', id).single()

type TasksWithProjects = QueryData<typeof tasksWithProjectsQuery>
type Projects = QueryData<typeof projectsQuery>
type Project = QueryData<ReturnType<typeof projectQuery>>
type Task = QueryData<ReturnType<typeof taskQuery>>

export { projectQuery, projectsQuery, taskQuery, tasksWithProjectsQuery }

export type { Project, Projects, Task, TasksWithProjects }
