
import { Tabs } from '@radix-ui/themes'
import React, { useEffect, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export function TimeRangeSelect() {
    const searchParams = useSearchParams()
    const timeRange = searchParams.get("timeRange") || 'week'
    const pathname = usePathname()
    const router = useRouter()

    const [value, setValue] = useState<string>(timeRange)

    const handleSelect = (newTimeRange: string) => {
        const current = new URLSearchParams(Array.from(searchParams.entries()))
        current.set("timeRange", newTimeRange)
        const search = current.toString()
        const query = search ? `?${search}` : ''
        router.push(`${pathname}${query}`)
    }

    useEffect(() => {
        setValue(timeRange)
    }, [timeRange])

    return (
        <Tabs.Root value={value} onValueChange={handleSelect} >
            <Tabs.List size="2">
                <Tabs.Trigger value="week">Week</Tabs.Trigger>
                <Tabs.Trigger value="month">Month</Tabs.Trigger>
                <Tabs.Trigger value="allTime">All time</Tabs.Trigger>
            </Tabs.List>

        </ Tabs.Root >
    )
}


