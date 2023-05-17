import axios from 'axios'
import Button from '../components/Button'
import Header from '../components/Header'
import { RiArrowRightLine } from 'react-icons/ri'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function NewList() {
  const host = 'http://localhost:5000/todo-list'

  // Automatic navigator
  const navigate = useNavigate()

  // Input value states
  const [name, setName] = useState('')
  const [beschreibung, setBeschreibung] = useState('')

  /**
   * callback to submit POST request
   * @param {*} event
   */
  const handleSubmit = (event) => {
    event.preventDefault()

    axios
      .post(host, {
        name: name,
        beschreibung: beschreibung,
      })
      .then((response) => {
        // TODO: Handle response
        navigate('/')
      })
      .catch((error) => {
        // TODO: Handle error
      })
  }

  return (
    <>
      <Header title={'Neue Liste'} />
      <form
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
            onChange={(event) => setName(event.target.value)}
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
            onChange={(event) => setBeschreibung(event.target.value)}
          />
        </div>

        <div className='self-end pt-8'>
          <Button
            title={'Erstellen'}
            icon={<RiArrowRightLine />}
            onClick={handleSubmit}
          />
        </div>
      </form>
    </>
  )
}
