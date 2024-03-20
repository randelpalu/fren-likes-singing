import Image from "next/image";
import type { TrackType } from "../types/global.t";
import styles from './styles/Track.module.css';
import { useTrackContext } from "../contexts/TrackContext";

export default function Track({icon, index, ...track}: TrackType & { icon: string, index: number }) {
  const { currentTrackIndex, isPlaying, playTrack, stopTrack, audioRef } = useTrackContext()

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()

    // Player on pause, or some other song playing
    if (!isPlaying || index !== currentTrackIndex) {
      playTrack(index)
    } else {
      stopTrack()
    }
  }

  return(
    <li className={`${styles.track} ${(index === currentTrackIndex) ? 'bg-slate-300' : ''}`}>
      <div className="flex items-center">
        <Image src={icon} width={50} height={50} className="mr-2 rounded-full" alt="Artist icon"/>
        <div>
          <span className="flex items-center">
            <h3 className="text-lg font-semibold">{track.title}</h3>
            <div className="ml-2"></div>
            <h4 className="text-slate-600">{`(${track.duration})`}</h4>
          </span>
          <p className="text-slate-600">{track.artist}</p>
        </div>
      </div>
      <button className="button-icon" onClick={handleClick}>
        <div className="text-slate-400">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
          </svg>
        </div>
      </button>
    </li>
  )
}