import { Link } from 'react-router-dom'
import { ActionButton, ActionLink } from './Action'

import {
  RiBallPenLine,
  RiDeleteBinLine,
  RiArrowRightLine,
} from 'react-icons/ri'

export default function List({ id, name }) {
  return (
    <div className='list main p-6 transition-all border-black border-[1px] flex flex-col justify-between w-full min-w-[200px]'>
      <h2 className='text-md pb-8 cursor-default'>{name}</h2>
      <div className='list__actions pt-2 flex'>
        <ActionButton
          title={'Löschen'}
          icon={<RiDeleteBinLine />}
          action={() => console.log('hi')}
        />
        <ActionLink
          title={'Ansehen'}
          url={`list/${id}`}
          icon={<RiArrowRightLine />}
        />
      </div>
    </div>
  )
}
