import { Link } from 'react-router-dom'
import { RiAddLine } from 'react-icons/ri'

export default function Header({ title, titleToNew, urlToNew }) {
  return (
    <div className='pb-8 flex justify-between items-center relative'>
      <h1 className='text-xl'>{title}</h1>
      {urlToNew && (
        <Link
          to={urlToNew}
          className='p-3 mx-1 first:ml-0 last:mr-0 active:opacity-50 group transition-all border-black border-[1px] rounded-full flex justify-center items-center'
        >
          <RiAddLine />
          <p className='absolute bg-white whitespace-nowrap z-[2] opacity-0 group-hover:opacity-100 group-active:opacity-0 text-xs bottom-[-8%] py-1 px-2 border-black border-[1px]'>
            {titleToNew}
          </p>
        </Link>
      )}
    </div>
  )
}
