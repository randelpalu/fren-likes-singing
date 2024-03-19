import Album from "./components/Album";
import Player from "./components/Player";

export default function Home() {
  return (
    <div className="main-container container mx-auto mt-8 max-w-lg relative">
      <div className="bg-slate-50 rounded-lg">
        <Player />
        <Album />
      </div>
    </div>
  );
}
