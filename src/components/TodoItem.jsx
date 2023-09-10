const TodoItem = ({ val, handleDelete, setComplated, id, check }) => {
  return (
    <li className="p-5 border-b-[0.1px] border-light-grayish-blue flex item-center justify-between text-dark-grayish-blue-2">
      <div className="flex item-center">
        <button type="check button" onClick={() => setComplated(!check)} className={`${check ? 'bg-check-background bg-cover' : 'border'}  flex items-center justify-center w-[20px] h-[20px] rounded-full me-2`}>
          <div className="bg-icon-check bg-no-repeat w-[10px] h-[10px]"></div>
        </button>
        <div className="overflow-hidden w-90">
          <p className="truncate">{val}</p>
        </div>
      </div>
      <div className=" bg-icon-cross w-[20px] h-[20px] bg-no-repeat cursor-pointer" onClick={() => handleDelete(id)}></div>
    </li>
  )
}

export default TodoItem
