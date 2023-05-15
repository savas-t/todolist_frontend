import List from './List'

export default function Home() {
  const lists = [
    { key: 1, name: `Liste`, description: `Das ist eine Liste.` },
    { key: 2, name: `Liste`, description: `Das ist eine Liste.` },
    { key: 3, name: `Liste`, description: `Das ist eine Liste.` },
    { key: 4, name: `Liste`, description: `Das ist eine Liste.` },
    { key: 5, name: `Liste`, description: `Das ist eine Liste.` },
  ]

  return (
    <>
      <h1 className='pb-8 text-xl'>Meine Listen</h1>
      <div className='grid grid-cols-3 grid-flow-row gap-4'>
        {lists.map(({ key, name, description }) => (
          <List
            key={key}
            name={name}
            description={description}
          />
        ))}
      </div>  
    </>
  )
}
