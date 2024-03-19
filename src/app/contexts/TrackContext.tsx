import { ReactNode, createContext, useState } from "react";

const TrackContext = createContext({});

export const TrackProvider = ({
  children
}: Readonly<{
  children: ReactNode
}>) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const playTrack = (index: number) => {
    setCurrentTrackIndex(index)
    setIsPlaying(true)
  }

  const stopTrack = () => {
    setIsPlaying(false)
  }

  const prevTrack = () => {
    if(isPlaying){
      stopTrack()
    }
    // First track.
    if(currentTrackIndex === 0) {
      playTrack(tracks.length - 1)
    }else{
      playTrack(currentTrackIndex - 1)
    }
  }

  const nextTrack = () => {
    if(isPlaying){
      stopTrack()
    }
    // Last track.
    if(currentTrackIndex === tracks.length - 1) {
      playTrack(0)
    }else{
      playTrack(currentTrackIndex + 1)
    }
  }

  const tracks = [
    {
      id: 1,
      artist: 'Allar Mets',
      album: 'Metsalood',
      title: 'Esimene',
      duration: '0:10'
    },
    {
      id: 2,
      artist: 'Allar Mets',
      album: 'Metsalood',
      title: 'Teine',
      duration: '0:10'
    },
    {
      id: 3,
      artist: 'Allar Mets',
      album: 'Metsalood',
      title: 'Kolmas',
      duration: '0:10'
    },
    {
      id: 4,
      artist: 'Allar Mets',
      album: 'Metsalood',
      title: 'Neljas',
      duration: '0:10'
    },
    {
      id: 5,
      artist: 'Allar Mets',
      album: 'Metsalood',
      title: 'Viies',
      duration: '0:10'
    },
  ]

  return (
    <TrackContext.Provider value={{currentTrackIndex, isPlaying, playTrack, stopTrack, prevTrack, nextTrack}}>
      {children}
    </TrackContext.Provider>
  )
}