export default function Button({ title, icon, onClick }) {
  return (
    <button className='sidebar__item flex justify-between items-center my-2 first:my-0 border-slate-800 active:opacity-30 border-[1px] whitespace-nowrap px-8 py-2 cursor-pointer transition-all'>
      {title}
      {icon ?? (
        <div className='mx-4 flex justify-center items-center'>{icon}</div>
      )}
    </button>
  )
}
