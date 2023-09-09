import { Select } from '@radix-ui/themes'
import React, { useCallback, useEffect, useState } from 'react'
import { TRENDING_GENRES } from '@/utils/genre'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export function SelectGenre() {
    const searchParams = useSearchParams()
    const currentGenre = searchParams.get("genre")

    const pathname = usePathname()
    const router = useRouter()
    const [value, setValue] = useState<string | undefined>('')

    const handleValueChange = useCallback((genre: string) => {
        const current = new URLSearchParams(Array.from(searchParams.entries()))

        if (!genre) {
            current.delete("genre")
        } else {
            current.set("genre", genre)
        }

        const search = current.toString()
        const query = search ? `?${search}` : ''
        router.push(`${pathname}${query}`)
    }, [pathname, router, searchParams])

    useEffect(() => {
        setValue(!!currentGenre ? currentGenre : '')
    }, [currentGenre])

    return (
        <Select.Root size="2" value={value} defaultValue={value} onValueChange={handleValueChange} >
            <Select.Trigger placeholder="Select a genre..." />
            <Select.Content>
                <Select.Group>
                    <Select.Item value="" >All genres</Select.Item>

                    {TRENDING_GENRES.map((genre) => (
                        <Select.Item value={genre} key={genre}>{genre}</Select.Item>
                    ))}
                </Select.Group>
            </Select.Content>
        </Select.Root>
    )
}
