const ErrorWrapper = ({ message, status }) => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <h1>{message}</h1>
      {status && <p className='text-xs text-gray-500'>{status}</p>}
    </div>
  )
}

export default ErrorWrapper
