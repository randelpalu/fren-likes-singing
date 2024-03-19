import Track from "./Track";

export default function Album() {
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

  return(
      <ul className="py-4">
        {tracks.map((track) => (
          <Track key={track.id} {...track} icon={'/images/rounded.png'}/>
        ))}
      </ul>
  )
}