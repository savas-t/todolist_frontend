import axios from 'axios'
import Header from '../components/Header'
import ErrorWrapper from '../components/ErrorWrapper'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function List() {
  const host = 'http://localhost:5000'

  // URL parameters
  const { id } = useParams()

  // Data states
  const [entries, setEntries] = useState([])
  const [listName, setListName] = useState(null)

  // Request states
  const [fetchError, setFetchError] = useState(false)
  const [loading, setLoading] = useState(false)

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
    }
  }, [])

  if (loading) return <h1>Datenabfrage ...</h1>

  if (fetchError)
    return <ErrorWrapper message='Konnte keine Daten abfragen :(' />

  return (
    <>
      <Header
        title={`Liste '${listName}'`}
        urlToNew={`/list/${id}/entry/new`}
        titleToNew={'Neues To Do'}
      />
      <ul>
        {entries.map(({ id, list_id, name, beschreibung }) => (
          <li
            key={id}
            data-list={list_id}
            className='w-full my-4 first:mt-0 p-4 border-black border-[1px] flex flex-col md:flex-row justify-between items-start md:items-center'
          >
            <div className='pb-8 md:pb-0'>
              <h2 className={beschreibung ? 'pb-2' : ''}>{name}</h2>
              <p className='max-w-[600px] text-xs'>{beschreibung}</p>
            </div>

            <div className=''>Action</div>
          </li>
        ))}
      </ul>
    </>
  )
}
