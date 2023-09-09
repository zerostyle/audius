import { useSearchParams } from "next/navigation"

export function useURLQuery() {
    const searchParams = useSearchParams()
    const genre = searchParams.get('genre') || ''
    const timeRange = searchParams.get('timeRange') || 'week'
    const isFilteredByFavorite = !!searchParams.get('favorites')
    const hasQuery = genre !== '' || isFilteredByFavorite || timeRange !== 'week'

    return { genre, timeRange, hasQuery, isFilteredByFavorite }

}
