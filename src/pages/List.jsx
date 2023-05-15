import ListItem from '../components/ListItem'

export default function List() {
  return (
    <div className='main pt-20 flex flex-col w-full'>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((item) => (
        <ListItem key={item} />
      ))}
    </div>
  )
}
