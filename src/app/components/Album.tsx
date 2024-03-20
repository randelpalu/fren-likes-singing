import { useTrackContext } from "../contexts/TrackContext";
import Track from "./Track";

export default function Album() {
  const { tracks } = useTrackContext()

  return(
      <ul className="py-4">
        {tracks.map((track) => (
          <Track key={track.id} {...track} icon={'/images/rounded.png'}/>
        ))}
      </ul>
  )
}