import { Link } from 'react-router-dom'
import {
  RiBallPenLine,
  RiDeleteBinLine,
  RiArrowRightLine,
} from 'react-icons/ri'

export default function List({ id, name, description }) {
  const listActions = [
    {
      key: 1,
      title: 'Löschen',
      icon: <RiDeleteBinLine />,
      url: `list/${id}/delete`,
    },
    {
      key: 2,
      title: 'Ansehen',
      icon: <RiArrowRightLine />,
      url: `list/${id}`,
    },
  ]
  return (
    <div className='list main py-2 px-8 transition-all border-black border-[1px] flex flex-col w-full'>
      <h2 className='text-md pb-8 cursor-default'>{name}</h2>
      <p className='text-sm pb-8 cursor-default'>{description}</p>
      <div className='list__actions py-2 flex'>
        {listActions.map(({ key, url, title, icon }) => (
          <Link
            key={key}
            to={url}
            className='p-3 mx-1 relative first:ml-0 last:mr-0 active:opacity-50 group transition-all border-black border-[1px] rounded-full flex justify-center items-center'
          >
            {icon}
            <p className='absolute whitespace-nowrap bg-white z-[2] invisible group-hover:visible group-active:invisible text-xs bottom-[-40px] py-1 px-2 border-black border-[1px]'>
              {title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
