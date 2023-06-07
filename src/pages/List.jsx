import axios from 'axios'
import Header from '../components/Header'
import Loading from '../components/Loading'
import { ActionButton } from '../components/Action'
import { RiAddLine, RiArrowRightLine, RiCheckLine } from 'react-icons/ri'
import ErrorWrapper from '../components/ErrorWrapper'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from '../components/Button'

const NewEntry = ({ id, onDataChange }) => {
  const host = 'http://localhost:5000'

  const [active, setActive] = useState(false)
  const [name, setName] = useState('')
  const [beschreibung, setBeschreibung] = useState('')

  const addEntry = async () => {
    try {
      await axios.post(host + `/todo-list/${id}/entry`, {
        name,
        beschreibung,
      })

      setActive(false)
      onDataChange()
    } catch (error) {
      // Show error modal
      alert('Das hat nicht geklappt.')
    }
  }

  if (active === false)
    return (
      <ActionButton
        title={'Neuer Eintrag'}
        icon={<RiAddLine />}
        action={() => setActive(true)}
      />
    )

  return (
    <li
      style={active ? {} : { display: 'none' }}
      className='w-full my-4 first:mt-0 p-4 border-black border-[1px] flex flex-col justify-start items-start'
    >
      <div className='pb-8 w-full'>
        <h2 className='pb-2'>Neuer Eintrag</h2>
        <input
          type='text'
          name='name'
          className='p-2 mb-2 w-full tracking-widest text-sm border border-black'
          placeholder='Name'
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='text'
          name='beschreibung'
          className='p-2 w-full tracking-widest text-sm border border-black'
          placeholder='Beschreibung'
          onChange={(e) => setBeschreibung(e.target.value)}
        />
      </div>

      <Button
        icon={<RiArrowRightLine />}
        title={'Erstellen'}
        onClick={addEntry}
      />
    </li>
  )
}

const List = () => {
  const host = 'http://localhost:5000'

  // URL parameters
  const { id } = useParams()

  // Data states
  const [entries, setEntries] = useState([])
  const [listName, setListName] = useState(null)

  // Request states
  const [fetchError, setFetchError] = useState(false)
  const [loading, setLoading] = useState(false)

  // Changed backend data state
  const [dataChange, setDataChange] = useState(false)
  const handleDataChange = () => setDataChange(true)

  // Delete entry
  const deleteEntry = async (list_id, entry_id) => {
    try {
      const response = await axios.delete(
        host + `/todo-list/${list_id}/entry/${entry_id}`,
        { data: { list_id, entry_id } }
      )
      handleDataChange()
    } catch (error) {
      // Handle error
      console.error(error)
    }
  }

  useEffect(() => {
    // Initialize abort controller for axios request errors
    const abortController = new AbortController()
    const signal = AbortController.signal

    const fetchData = async () => {
      // Start loading state
      setLoading(true)

      try {
        // GET request
        const response = await axios.get(host + `/todo-list/${id}`, {
          timeout: 5000,
          signal,
        })

        setListName(response.data.name)
        setEntries([...response.data.entries])
      } catch (error) {
        setFetchError(true)
      }

      // End loading state
      setLoading(false)
    }

    fetchData()

    return () => {
      abortController.abort()
      setDataChange(false)
    }
  }, [dataChange])

  if (loading) return <Loading />

  if (fetchError)
    return <ErrorWrapper message='Konnte keine Daten abfragen :(' />

  return (
    <>
      <Header title={`Liste '${listName}'`} />
      <ul>
        {entries.map(({ id, list_id, name, beschreibung }) => (
          <li
            key={id}
            className='w-full my-4 first:mt-0 p-4 border-black border-[1px] flex flex-col md:flex-row justify-between items-start md:items-center'
          >
            <div className='pb-8 md:pb-0'>
              <h2 className={beschreibung ? 'pb-2' : ''}>{name}</h2>
              <p className='max-w-[600px] text-xs'>{beschreibung}</p>
            </div>

            <ActionButton
              title={'Erledigt'}
              icon={<RiCheckLine />}
              action={() => deleteEntry(list_id, id)}
            />
          </li>
        ))}
        <NewEntry
          id={id}
          onDataChange={handleDataChange}
        />
      </ul>
    </>
  )
}

export default List
