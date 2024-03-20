import { useRef, useEffect } from "react"
import { useTrackContext } from "../contexts/TrackContext";

export default function Player() {
  const { currentTrackIndex, isPlaying, playTrack, stopTrack, prevTrack, nextTrack, tracks, audioRef } = useTrackContext();

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
      playTrack(currentTrackIndex)
    }
  }

  const handleTrackEnded = () => {
    nextTrack()
  }

  const handleTogglePlay = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()

    if(!isPlaying) {
      playTrack(currentTrackIndex)
    } else {
      stopTrack()
    }
  }

  const handlePrev = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    prevTrack()
  }

  const handleNext = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    nextTrack()
  }

  return (
    <div>
      <h2 className="text-xl font-bold p-4 justify-center flex">{`"Greatest Hits" (2024)`}</h2>

      <audio ref={audioRef} src={tracks[currentTrackIndex].file} />

      <div className="flex justify-center gap-6 py-2 text-slate-600 items-center">

        <button className="button-icon hover:text-orange-600 hover:scale-110 focus:outline-none" onClick={handlePrev}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z" />
          </svg>
        </button>

        {isPlaying
          ? <button className="button-icon hover:text-orange-600 hover:scale-110 focus:outline-none" onClick={handleTogglePlay}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            </button>
          : <button className="button-icon hover:text-orange-600 hover:scale-110 focus:outline-none" onClick={handleTogglePlay}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
              </svg>
            </button>
        }

        <button className="button-icon hover:text-orange-600 hover:scale-110 focus:outline-none" onClick={handleNext}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
          </svg>
        </button>

      </div>

    </div>
  )
}