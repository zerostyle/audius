import Link from 'next/link'
import React, { ReactNode } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

type TimeRange = 'week' | 'month' | 'allTime'

type Props = {
    children: ReactNode
    timeRange: TimeRange
}

export function TimeRangeLink({ children, timeRange }: Props) {
    const searchParams = useSearchParams()
    const current = new URLSearchParams(Array.from(searchParams.entries()))
    current.set('timeRange', timeRange)
    const search = current.toString()
    const query = search ? `?${search}` : ''

    return (
        <Link href={`/${query}`}>{children}</Link>
    )
}
