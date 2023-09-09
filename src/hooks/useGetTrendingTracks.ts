import { API_BASE_URL } from "@/constants"
import useSWR from "swr"
import useSWRImmutable from "swr/immutable"

const sample = (arr: string[]): string =>
    arr[Math.floor(Math.random() * arr.length)]

const hostFetcher = (host: string) => fetch(host).then((r) => r.json()
    .then((j) => j.data)
    .then((d) => sample(d))
    .catch((err) => console.log(err)))

const trackFetcher = (resource: string, init: RequestInit) => fetch(resource, init).then(res => res.json().then((j) => j.data))


export function useGetTrendingTracks({ time, genre }: { time: string, genre: string }) {
    const { data: host, isLoading: isHostLoading } = useSWRImmutable(API_BASE_URL, hostFetcher)

    const urlParams = new URLSearchParams({ time, genre })

    //const { data: tracks, isLoading: isTracksLoading } = useSWR(`${host}/v1/tracks/trending?time=${time}&genre=${genre}`, trackFetcher)
    const { data: tracks, isLoading: isTracksLoading } = useSWR(`${host}/v1/tracks/trending?${urlParams.toString()}`, trackFetcher)

    return { tracks, isLoading: isTracksLoading || isHostLoading }
}
