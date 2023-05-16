import { RiFileList2Line, RiCheckboxMultipleLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function SideBar() {
  const [activeItem, setActiveItem] = useState(1)
  const items = [
    {
      key: 1,
      title: 'Home',
      url: '/',
      icon: <RiFileList2Line />,
    },
    {
      key: 2,
      title: 'Alle To Dos',
      url: '/overview',
      icon: <RiCheckboxMultipleLine />,
    },
  ]
  return (
    <div className='sidebar order-1 mx-auto md:order-[initial] pt-20 pr-8 text-sm uppercase h-full w-auto sticky bottom-0 md:bottom-[initial] md:top-0 left-0'>
      <nav className='h-full'>
        <ul className='h-full flex md:flex-col justify-start items-center'>
          {items.map(({ key, url, icon, title }) => (
            <Link
              key={key}
              to={url}
              className={`sidebar__item ${activeItem === key ? 'sidebar__item--active' : ''} w-full md:my-2 first:my-0 md:border-slate-800 active:opacity-50 md:border-[1px] whitespace-nowrap px-8 py-4 cursor-pointer transition-all`}
              onClick={() => setActiveItem(key)}
            >
              <li
                className='flex flex-col md:flex-row justify-center md:justify-start items-center'
              >
                <div className='pr-2 flex justify-center items-center'>{icon}</div>
                {title}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  )
}
