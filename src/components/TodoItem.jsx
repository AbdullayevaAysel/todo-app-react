const TodoItem = ({ val, id, check, handleDelete, handleChecked }) => {
  return (
    <li className="p-5 border-b-[0.001px] border-light-grayish-blue dark:border-dark-grayish-blue-2 flex item-center justify-between text-dark-grayish-blue-2 dark:bg-very-dark-desaturated-blue">
      <div className="flex item-center">
        <button
          type="check button"
          onClick={() => handleChecked(id, check)}
          className={`${
            check ? "bg-check-background bg-cover" : "border"
          } dark:border-dark-grayish-blue-2 flex items-center justify-center w-[20px] h-[20px] rounded-full me-2`}
        >
          <div
            className={`${
              check && "bg-icon-check"
            } bg-no-repeat w-[10px] h-[10px]`}
          ></div>
        </button>
        <div className="overflow-hidden w-90">
          <p className={`${check && "line-through"} truncate`}>{val}</p>
        </div>
      </div>
      <div
        className=" bg-icon-cross w-[20px] h-[20px] bg-no-repeat cursor-pointer"
        onClick={() => handleDelete(id)}
      ></div>
    </li>
  )
}

export default TodoItem
