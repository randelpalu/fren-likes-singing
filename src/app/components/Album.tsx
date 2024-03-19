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
    <div className="bg-slate-50 rounded-lg">
      <h2 className="text-xl font-bold p-4">{`"Greatest Hits" (2024)`}</h2>

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564Z" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
      </svg>

      <ul className="py-4">
        {tracks.map((track) => (
          <Track key={track.id} {...track} icon={'/images/rounded.png'}/>
        ))}
      </ul>
    </div>
  )
}