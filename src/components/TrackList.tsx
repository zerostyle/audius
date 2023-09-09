'use client'

import { Button, Flex, Heading } from '@radix-ui/themes'
import React, { useCallback, useState } from 'react'
import { TrackItem } from './TrackItem'
import { useGetTrendingTracks } from '@/hooks/useGetTrendingTracks'
import { useURLQuery } from '@/hooks/useURLQuery'
import { SelectGenre } from './SelectGenre'
import { useRouter, useSearchParams } from 'next/navigation'
import { TimeRangeSelect } from './TimeRangeSelect'
import { FilterFavoriteButton } from './FilterFavoriteButton'
import { FavoriteButton } from './FavoriteButton'
import { Loader } from './Loader'

type Props = {}


export function TrackList({ }: Props) {
    const router = useRouter()
    // Search params
    const searchParams = useSearchParams()
    const isFilteredByFavorite = !!searchParams.get('favorites')
    const hasQuery = searchParams.size > 0

    // Trending tracks
    const { timeRange, genre } = useURLQuery()
    const { tracks, isLoading } = useGetTrendingTracks({ time: timeRange, genre })

    // Favorites
    const [favorites, setFavorites] = useState<{ [id: string]: boolean }>({})

    const handleToggleFavorite = useCallback((id: string) => {
        const isFavorite = !!favorites[id]
        setFavorites({ ...favorites, [id]: !isFavorite })
    }, [favorites])

    const handleResetFilters = useCallback(() => {
        router.push('/')
    }, [router])


    return (
        <Flex direction='column' gap="6">
            <Flex justify="between" align="center">
                <Heading size="8">Trending</Heading>

                {hasQuery && (
                    <Button onClick={handleResetFilters}>
                        Reset Filters
                    </Button>
                )}
            </Flex>

            <Flex justify="between">
                <FilterFavoriteButton />

                <TimeRangeSelect />

                <SelectGenre />
            </Flex>

            {isLoading && (
                <Loader />
            )}


            {!isLoading && !!tracks?.length && (
                <Flex asChild direction='column' gap="6">
                    <ol>
                        {tracks.map((track: any) => {
                            const isFavorite = !!favorites[track.id]

                            if (isFilteredByFavorite && !isFavorite) return null

                            return (
                                <TrackItem key={track.id} track={track}  >
                                    <FavoriteButton id={track.id} isFavorite={isFavorite} onClick={handleToggleFavorite} />
                                </TrackItem>
                            )
                        })}
                    </ol>
                </Flex>
            )}
        </Flex >

    )
}
