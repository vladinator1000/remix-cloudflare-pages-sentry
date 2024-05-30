export function loader() {
  throw new Error('about boom')
}

export default function About() {
  return (
    <h1>About</h1>
  )
}
