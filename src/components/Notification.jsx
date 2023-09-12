const Notification = ({ message}) => {
  return <>
  <div className="absolute bg-[#fff] p-3 shadow-lg bottom-5 right-5">
     {message}
  </div>
  </>
}

export default Notification
