import React, { useMemo } from 'react'
import { HeartIcon } from './HeartIcon'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Button, Flex } from '@radix-ui/themes'

export function FilterFavoriteButton() {
    const searchParams = useSearchParams()
    const isSelected = !!searchParams.get("favorites")

    const query = useMemo(() => {
        const current = new URLSearchParams(Array.from(searchParams.entries()))

        if (isSelected) {
            current.delete("favorites")
        } else {
            current.set("favorites", 'true')
        }
        const search = current.toString()

        return search ? `?${search}` : ''
    }, [isSelected, searchParams])

    return (
        <Flex justify="start">
            <Link href={`/${query}`}>
                <Button variant="ghost">
                    <HeartIcon {...(isSelected && { fill: "var(--accent-9)", stroke: "var(--accent-9)" })} />
                </Button>
            </Link>
        </Flex>
    )
}
