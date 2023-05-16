import Button from '../components/Button'
import { RiArrowRightLine } from 'react-icons/ri'

export default function NewList() {
  const host = 'http://localhost:5000/todo-list'

  return (
    <form
      action={host}
      method='POST'
      className='w-full flex flex-col items-start justify-start'
    >
      <div className='form__item pb-4 w-full flex justify-between items-center'>
        <label
          htmlFor='name'
          className='pr-8'
        >
          Name
        </label>
        <input
          className='border-[1px] tracking-widest focus:outline-none w-full max-w-[700px] border-black px-4 py-2'
          type='text'
          name='name'
          id='name'
        />
      </div>

      <div className='form__item pb-4 w-full flex justify-between items-center'>
        <label
          htmlFor='beschreibung'
          className='pr-8'
        >
          Beschreibung
        </label>
        <input
          className='border-[1px] tracking-widest focus:outline-none w-full max-w-[700px] border-black px-4 py-2'
          type='text'
          name='beschreibung'
          id='beschreibung'
        />
      </div>

      <div className="self-end pt-8">
        <Button
          title={'Erstellen'}
          icon={<RiArrowRightLine />}
        />
      </div>
    </form>
  )
}
