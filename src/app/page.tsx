'use client'

import { Flex } from '@radix-ui/themes'
import { TrackList } from '@/components/TrackList'
import { Suspense } from 'react'
import { Loader } from '@/components/Loader'

export default function Home() {
  return (
    <Flex asChild direction="column" py={{ initial: "5", sm: "6" }} gap="8">
      <main>
        <Suspense fallback={<Loader />}>
          <TrackList />
        </Suspense>
      </main>
    </Flex>
  )
}
