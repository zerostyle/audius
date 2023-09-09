/* eslint-disable @next/next/no-img-element */
import { Box, Card, Flex, Heading, Text } from '@radix-ui/themes'
import { type } from 'os'
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
            <Flex asChild gap="6" align="center" justify="between">
                <li>
                    <Flex gap="6" align="center">
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
