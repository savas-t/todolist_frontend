import { Link } from 'react-router-dom'
import { RiAddLine } from 'react-icons/ri'

export default function Header({ title, titleToNew, urlToNew }) {
  return (
    <div className='pb-8 flex justify-between items-center min-h-[74px]'>
      <h1 className='text-xl'>{title}</h1>
      {urlToNew && (
        <Link
          to={urlToNew}
          className='p-3 mx-1 relative first:ml-0 last:mr-0 active:opacity-50 group transition-all border-black border-[1px] rounded-full flex justify-center items-center'
        >
          <RiAddLine />
          <p className='absolute bg-white whitespace-nowrap z-[2] invisible group-hover:visible group-active:invisible text-xs bottom-[-40px] py-1 px-2 border-black border-[1px]'>
            {titleToNew}
          </p>
        </Link>
      )}
    </div>
  )
}
