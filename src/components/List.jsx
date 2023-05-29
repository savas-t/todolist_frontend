import axios from 'axios'
import { ActionButton, ActionLink } from './Action'
import { RiDeleteBinLine, RiArrowRightLine } from 'react-icons/ri'

export default function List({ id, name, onDataChange }) {
  const host = 'http://localhost:5000'

  const deleteList = async () => {
    try {
      const response = await axios.delete(host + `/todo-list/${id}`)
      onDataChange()
    } catch (error) {
      // Show error modal
      alert('Das hat nicht geklappt.')
    }
  }

  return (
    <div className='list main p-6 transition-all border-black border-[1px] flex flex-col justify-between w-full min-w-[200px]'>
      <h2 className='text-md pb-8 cursor-default'>{name}</h2>
      <div className='list__actions pt-2 flex'>
        <ActionButton
          title={'Löschen'}
          icon={<RiDeleteBinLine />}
          action={deleteList}
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
