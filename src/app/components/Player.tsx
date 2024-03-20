import { useRef, useEffect } from "react"
import { useTrackContext } from "../contexts/TrackContext";

export default function Player() {
  const { currentTrackIndex, isPlaying, playTrack, stopTrack, prevTrack, nextTrack, tracks } = useTrackContext();
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const currentAudioRef = audioRef.current

    currentAudioRef?.addEventListener("loadedmetadata", handleNewSongLoaded)
    currentAudioRef?.addEventListener("ended", handleTrackEnded)

    return () => {
      currentAudioRef?.removeEventListener("loadedmetadata", handleNewSongLoaded)
      currentAudioRef?.removeEventListener("ended", handleTrackEnded)
    };
  }, [currentTrackIndex])

  const handleNewSongLoaded = () => {
    if(isPlaying) {
      audioRef.current?.play()
    }
  }

  const handleTrackEnded = () => {
    nextTrack()
  }

  const handlePrev = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()

    prevTrack()
    audioRef.current?.play()
  }

  const handleTogglePlay = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()

    if(!isPlaying) {
      playTrack(currentTrackIndex)
      audioRef.current?.play()
    } else {
      stopTrack()
      audioRef.current?.pause()
    }
  }

  const handleNext = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()

    nextTrack()
    audioRef.current?.play()
  }

  return (
    <div>
      <h2 className="text-xl font-bold p-4 justify-center flex">{`"Greatest Hits" (2024)`}</h2>

      <audio ref={audioRef} src={tracks[currentTrackIndex].file} />

      <div className="flex justify-center gap-8 py-2 text-red-500 items-center">

        <button className="button-icon" onClick={handlePrev}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z" />
          </svg>
        </button>

        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg> */}

        <button className="button-icon" onClick={handleTogglePlay}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
          </svg>
        </button>

        <button className="button-icon" onClick={handleNext}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
          </svg>
        </button>

      </div>

    </div>
  )
}