import List from './List'
import Header from '../components/Header'
import axios from 'axios'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const lists = [
    { key: 1, id: '1', name: `Liste`, description: `Das ist eine Liste.` },
    { key: 2, id: '2', name: `Liste`, description: `Das ist eine Liste.` },
    { key: 3, id: '3', name: `Liste`, description: `Das ist eine Liste.` },
    { key: 4, id: '4', name: `Liste`, description: `Das ist eine Liste.` },
    { key: 5, id: '5', name: `Liste`, description: `Das ist eine Liste.` },
  ]

  return (
    <>
      <Header
        title={'Meine Listen'}
        titleToNew={'Neue Liste'}
        urlToNew={'/list/new'}
      />
      <div className='grid grid-cols-3 grid-flow-row gap-4'>
        {lists.map(({ key, id, name, description }) => (
          <List
            key={key}
            id={id}
            name={name}
            description={description}
          />
        ))}
      </div>
    </>
  )
}
