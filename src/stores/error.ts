import type { CustomError, ExtendedPostgrestError } from '@/types/error'
import type { PostgrestError } from '@supabase/supabase-js'

export const useErrorStore = defineStore('error-store', () => {
    const activeError = ref<null | CustomError | ExtendedPostgrestError>(null)
    const isCustomError = ref(false)

    const setError = ({
        error,
        customCode,
    }: {
        error: string | PostgrestError | Error
        customCode?: number
    }) => {
        if (typeof error === 'string') isCustomError.value = true

        if (typeof error === 'string' || error instanceof Error) {
            const customError =
                typeof error === 'string'
                    ? (new Error(error) as CustomError)
                    : (error as CustomError)
            customError.customCode = customCode || 500
            activeError.value = customError
        } else {
            const postgrestError = error as ExtendedPostgrestError
            postgrestError.statusCode = customCode || 500
            activeError.value = postgrestError
        }
    }

    const clearError = () => {
        activeError.value = null
        isCustomError.value = false
    }

    return {
        activeError,
        setError,
        isCustomError,
        clearError,
    }
})
