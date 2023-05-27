import axios from 'axios'
import List from '../components/List'
import Header from '../components/Header'
import ErrorWrapper from '../components/ErrorWrapper'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const host = 'http://localhost:5000'
  const [lists, setLists] = useState([])
  const [fetchError, setFetchError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const abortController = new AbortController()
    const signal = AbortController.signal

    const fetchData = async () => {
      try {
        setLoading(true)

        const response = await axios.get(host + '/todo-lists', {
          timeout: 5000,
          signal,
        })

        setLists([...response.data])
        setLoading(false)
      } catch (error) {
        setFetchError(true)
        setLoading(false)
      }
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
        title={'Home'}
        titleToNew={'Neue Liste'}
        urlToNew={'/list/new'}
      />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4'>
        {lists.map(({ id, name }) => (
          <List
            key={id}
            id={id}
            name={name}
          />
        ))}
      </div>
    </>
  )
}
