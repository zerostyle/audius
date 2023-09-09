/* eslint-disable @next/next/no-img-element */
import { Card, Flex, Heading, Inset, Text } from '@radix-ui/themes'
import React, { ReactNode, useCallback } from 'react'
import styles from './TrackItem.module.css'

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
        <Card asChild>
            <li className={styles.item}>
                <Flex
                    gap={{ initial: '0', xs: "6" }}
                    align="center"
                >
                    <Inset side="left">
                        <Flex width="100%" gap={{ initial: '4', xs: "6" }} align="center">
                            <img className={styles.image} src={artwork['150x150']} width={150} height={150} alt={title} />

                            <Flex direction="column" gap="2" justify="center">
                                <Heading className={styles.ellipsis} as="h3" size={{ initial: '3', xs: '5' }}>
                                    {title}
                                </Heading>
                                <Text className={styles.ellipsis}>
                                    {user.name}
                                </Text>
                            </Flex>
                        </Flex>
                    </Inset>

                    <Flex
                        p={{ initial: '2', xs: '4' }}
                        ml="auto"
                    >
                        {children}
                    </Flex>
                </Flex>
            </li>
        </Card>
    )
}
