import { Link } from 'react-router-dom'

const ActionButton = ({ title, icon, action }) => {
  return (
    <button
      onClick={action}
      className='p-3 mx-1 relative first:ml-0 last:mr-0 active:opacity-50 group transition-all border-black border-[1px] rounded-full flex justify-center items-center'
    >
      {icon}
      <p className='absolute tracking-widest whitespace-nowrap bg-white z-[2] invisible group-hover:visible group-active:invisible text-xs bottom-[-40px] py-1 px-2 border-black border-[1px]'>
        {title}
      </p>
    </button>
  )
}

const ActionLink = ({ title, icon, url }) => {
  return (
    <Link
      to={url}
      className='p-3 mx-1 relative first:ml-0 last:mr-0 active:opacity-50 group transition-all border-black border-[1px] rounded-full flex justify-center items-center'
    >
      {icon}
      <p className='absolute tracking-widest whitespace-nowrap bg-white z-[2] invisible group-hover:visible group-active:invisible text-xs bottom-[-40px] py-1 px-2 border-black border-[1px]'>
        {title}
      </p>
    </Link>
  )
}

export { ActionButton, ActionLink }
