import { Button } from '@radix-ui/themes'
import React, { useCallback } from 'react'
import { HeartIcon } from './HeartIcon'

type Props = {
    id: string
    isFavorite: boolean
    onClick: (id: string) => void
}

export function FavoriteButton({ id, isFavorite, onClick }: Props) {
    const handleClick = useCallback(() => {
        onClick(id)
    }, [id, onClick])

    return (
        <Button onClick={handleClick} variant="ghost" size="3">
            <HeartIcon {...(!!isFavorite && { fill: "var(--accent-9)", stroke: "var(--accent-9)" })} />
        </Button>
    )
}

