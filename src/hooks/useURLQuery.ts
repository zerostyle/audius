import { useSearchParams } from "next/navigation"

export function useURLQuery() {
    const searchParams = useSearchParams()
    const genre = searchParams.get('genre') || ''
    const timeRange = searchParams.get('timeRange') || 'week'

    return { genre, timeRange }

}
