/* eslint-disable @next/next/no-img-element */
import { Card, Flex, Heading, Text } from '@radix-ui/themes'
import React, { ReactNode, useCallback } from 'react'

type Track = {
    id: string
    title: string
    artwork: any
    user: {
        name: string
    }
}

type Props = {
    children?: ReactNode
    track: Track
}

export function TrackItem({ children, track }: Props) {
    const { artwork, title, user } = track

    return (
        <Card>
            <Flex asChild p={{ initial: "3", xs: '0' }} gap={{ initial: '4', xs: "6" }} align="center" justify="between" direction={{ initial: "column", xs: "row" }}>
                <li>
                    <Flex gap={{ initial: '4', xs: "6" }} align="center" direction={{ initial: "column", xs: "row" }}>
                        <img src={artwork['150x150']} width={150} height={150} alt={title} />

                        <Flex direction="column" gap="2" justify="center">
                            <Heading as="h3">{title}</Heading>
                            <Text>{user.name}</Text>
                        </Flex>
                    </Flex>

                    <Flex p="4">
                        {children}
                    </Flex>
                </li>
            </Flex>
        </Card>
    )
}
