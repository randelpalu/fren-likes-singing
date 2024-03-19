import Image from "next/image";
import type { Track } from "../types/global.t";
import styles from './styles/Track.module.css';

export default function Track({icon, ...track}: Track & { icon: string }) {
  return(
    <li className={styles.track}>
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
      <p className="text-slate-600">{track.duration}</p>
    </li>
  )
}