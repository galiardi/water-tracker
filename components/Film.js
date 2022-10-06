export default function Film(props) {
  return (
    <div
      className="fixed z-10 inset-0 min-h-screen bg-gray-300 opacity-0"
      onClick={props.onFilm}
    />
  )
}
