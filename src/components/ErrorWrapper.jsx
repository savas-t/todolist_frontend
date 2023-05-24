export default function ErrorWrapper({ message, status }) {
  return (
    <div className='w-full h-full'>
      <h1>{message}</h1>
      {status && <p className='text-xs text-gray-500'>{status}</p>}
    </div>
  )
}
