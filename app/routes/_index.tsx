export function loader() {
  throw new Error('boom')
}

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1>Hello, world!</h1>
    </div>
  )
}
