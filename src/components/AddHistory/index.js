import './index.css'

const AddingHistories = props => {
  const {listOfHistory, deleteButton} = props
  const deleteItem = () => {
    deleteButton(listOfHistory.id)
  }
  return (
    <li className="HistoryContainer">
      <div className="EachHistoryContainer">
        <div>
          <p>{listOfHistory.timeAccessed}</p>
        </div>
        <div className="EachHistoryUrlContainer">
          <img
            src={listOfHistory.logoUrl}
            className="logourl"
            alt="domain logo"
          />
          <p key="domainUrl">{listOfHistory.title}</p>
        </div>
      </div>
      <div>
        <div>
          <button
            type="button"
            data-testid="delete"
            className="deleteButton"
            onClick={deleteItem}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default AddingHistories
