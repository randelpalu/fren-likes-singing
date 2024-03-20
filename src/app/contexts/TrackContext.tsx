import { ReactNode, createContext, useContext, useState } from "react";
import type { TrackContextType } from "../types/global.t";
import type { TrackType } from "../types/global.t";

const TrackContext = createContext<TrackContextType>({
  currentTrackIndex: 0,
  isPlaying: false,
  playTrack: () => {},
  stopTrack: () => {},
  prevTrack: () => {},
  nextTrack: () => {},
  tracks: [],
});

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
    // First track.
    if(currentTrackIndex === 0) {
      setCurrentTrackIndex(tracks.length - 1)
    }else{
      setCurrentTrackIndex(currentTrackIndex - 1)
    }
  }

  const nextTrack = () => {
    // Last track
    if(currentTrackIndex === tracks.length - 1) {
      setCurrentTrackIndex(0)
    } else {
      setCurrentTrackIndex(currentTrackIndex + 1)
    }
  }

  // Temporary solution, as we have one album only.
  const tracks: TrackType[] = [
    {
      id: 1,
      artist: 'Allar Mets',
      album: 'Metsalood',
      title: 'Vaikne tuul',
      duration: '0:08',
      file: '/audio/vaikne_tuul.3gpp'
    },
    {
      id: 2,
      artist: 'Allar Mets',
      album: 'Metsalood',
      title: 'Mis nüüd saab ?',
      duration: '0:10',
      file: '/audio/mis_nuud_saab.3gpp'
    },
    {
      id: 3,
      artist: 'Allar Mets',
      album: 'Metsalood',
      title: 'Anna andeks',
      duration: '0:19',
      file: '/audio/anna_andeks.3gpp'
    },
    {
      id: 4,
      artist: 'Allar Mets',
      album: 'Metsalood',
      title: 'Neljapäev',
      duration: '0:20',
      file: '/audio/neljapaev.3gpp'
    },
    {
      id: 5,
      artist: 'Allar Mets',
      album: 'Metsalood',
      title: 'Homne päev',
      duration: '0:07',
      file: '/audio/homne_paev.3gpp'
    },
    {
      id: 6,
      artist: 'Allar Mets',
      album: 'Metsalood',
      title: 'Pühapäev',
      duration: '0:11',
      file: '/audio/puhapaev.3gpp'
    },
    {
      id: 7,
      artist: 'Allar Mets',
      album: 'Metsalood',
      title: 'Juba üleval',
      duration: '0:09',
      file: '/audio/juba_uleval.3gpp'
    },
    {
      id: 8,
      artist: 'Allar Mets',
      album: 'Metsalood',
      title: 'Ah hah aaa',
      duration: '0:07',
      file: '/audio/ah_ha_ha_haa.3gpp'
    },
    {
      id: 9,
      artist: 'Allar Mets',
      album: 'Metsalood',
      title: 'Kodanikujulgus',
      duration: '0:14',
      file: '/audio/kodanikujulgus.3gpp'
    },
    {
      id: 10,
      artist: 'Allar Mets',
      album: 'Metsalood',
      title: 'Anna abi',
      duration: '0:12',
      file: '/audio/anna_abi.3gpp'
    },
    {
      id: 11,
      artist: 'Allar Mets',
      album: 'Metsalood',
      title: 'Viimased päevad',
      duration: '0:08',
      file: '/audio/viimased_paevad.3gpp'
    },
    {
      id: 12,
      artist: 'Allar Mets',
      album: 'Metsalood',
      title: 'Na na naa',
      duration: '0:08',
      file: '/audio/na_na_naa.3gpp'
    },
    {
      id: 13,
      artist: 'Allar Mets',
      album: 'Metsalood',
      title: 'Sangarid',
      duration: '0:17',
      file: '/audio/sangarid.3gpp'
    },
    {
      id: 14,
      artist: 'Allar Mets',
      album: 'Metsalood',
      title: 'Hommik on käes',
      duration: '0:12',
      file: '/audio/hommik_on_kaes.3gpp'
    },
    {
      id: 15,
      artist: 'Allar Mets',
      album: 'Metsalood',
      title: 'Päevad on piiikad',
      duration: '0:15',
      file: '/audio/paevad_on_pikad.3gpp'
    },
    {
      id: 16,
      artist: 'Allar Mets',
      album: 'Metsalood',
      title: 'Joodeldamisdiplom',
      duration: '0:15',
      file: '/audio/joodeldamisdiplom.3gpp'
    },
  ]

  return (
    <TrackContext.Provider value={{currentTrackIndex, isPlaying, playTrack, stopTrack, prevTrack, nextTrack, tracks}}>
      {children}
    </TrackContext.Provider>
  )
}

export const useTrackContext = () => useContext(TrackContext);