export type TrackType = {
  id: number
  title: string
  artist: string
  album: string
  duration: string
  file: string
}

export type TrackContextType = {
  currentTrackIndex: number
  isPlaying: boolean
  playTrack: (index: number) => void
  stopTrack: () => void
  prevTrack: () => void
  nextTrack: () => void
  tracks: TrackType[]
  audioRef: React.MutableRefObject<HTMLAudioElement|null>
}