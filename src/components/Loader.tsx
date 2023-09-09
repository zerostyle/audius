import { Flex } from '@radix-ui/themes'
import React from 'react'
import { MutatingDots } from 'react-loader-spinner'


export function Loader() {
    return (
        <Flex justify="center">
            <MutatingDots
                height="100"
                width="100"
                color="#6464D8"
                secondaryColor='#6464D8'
                radius='12.5'
                ariaLabel="Loading"
                visible
            />
        </Flex>
    )
}
