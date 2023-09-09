'use client'

import { Button, Flex, Heading } from '@radix-ui/themes'
import React, { useCallback, useState } from 'react'
import { TrackItem } from './TrackItem'
import { useGetTrendingTracks } from '@/hooks/useGetTrendingTracks'
import { useURLQuery } from '@/hooks/useURLQuery'
import { SelectGenre } from './SelectGenre'
import { useRouter } from 'next/navigation'
import { TimeRangeSelect } from './TimeRangeSelect'
import { FilterFavoriteButton } from './FilterFavoriteButton'
import { FavoriteButton } from './FavoriteButton'
import { Loader } from './Loader'
import styles from './TrackList.module.css'

export function TrackList() {
    const router = useRouter()

    // Trending tracks
    const { timeRange, genre, isFilteredByFavorite, hasQuery } = useURLQuery()
    const { tracks, isLoading } = useGetTrendingTracks({ time: timeRange, genre })

    // Favorites
    const [favorites, setFavorites] = useState<{ [id: string]: boolean }>({})

    const handleToggleFavorite = useCallback((id: string) => {
        const isFavorite = !!favorites[id]
        setFavorites({ ...favorites, [id]: !isFavorite })
    }, [favorites])

    // Reset filters
    const handleResetFilters = useCallback(() => {
        router.push('/')
    }, [router])


    return (
        <Flex direction='column' gap="6">
            <Flex direction='column' gap="6" px={{ initial: "6", sm: "8" }}>
                <Flex justify="between" align="center">
                    <Heading size={{ initial: "7", sm: "8" }}>Trending</Heading>

                    {hasQuery && (
                        <Button onClick={handleResetFilters}>
                            Reset Filters
                        </Button>
                    )}
                </Flex>

                <div className={styles.filters}>
                    <FilterFavoriteButton />

                    <TimeRangeSelect className={styles.time} />

                    <SelectGenre className={styles.genre} />
                </div>
            </Flex>

            {isLoading && (
                <Loader />
            )}


            {!isLoading && !!tracks?.length && (
                <Flex asChild direction='column' gap="6" px={{ initial: "4", sm: "8" }}>
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
