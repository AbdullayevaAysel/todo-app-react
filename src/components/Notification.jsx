const Notification = ({val, text}) => {
  return <>
  <div className="absolute bg-[#fff] p-3 shadow-lg bottom-5 right-5">
    {val} {text}
  </div>
  </>
}

export default Notification
