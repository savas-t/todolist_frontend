const Button = ({ title, icon, onClick }) => {
  return (
    <button
      className='button tracking-widest group flex justify-between items-center my-2 first:my-0 border-slate-800 active:opacity-30 border-[1px] whitespace-nowrap px-8 py-2 cursor-pointer transition-all'
      onClick={onClick}
    >
      {title}
      {icon && (
        <div className='pl-4 flex group-hover:translate-x-2 justify-center items-center transition-transform'>
          {icon}
        </div>
      )}
    </button>
  )
}

export default Button
