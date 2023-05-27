import { ActionLink } from './Action'
import { RiAddLine } from 'react-icons/ri'

export default function Header({ title, titleToNew, urlToNew }) {
  return (
    <div className='py-4 mt-[-0.5rem] md:mt-[-1rem] sticky top-0 bg-white z-[2] flex justify-between items-center min-h-[74px]'>
      <h1 className='text-xl'>{title}</h1>
      {urlToNew && (
        <ActionLink
          url={urlToNew}
          icon={<RiAddLine />}
          title={titleToNew}
        />
      )}
    </div>
  )
}
