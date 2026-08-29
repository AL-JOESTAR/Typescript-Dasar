import { useState } from "react"

function App () {
const [myState, setMyState] = useState<number>()
const changeState = () => {
  setMyState(1)
}
    return (
      <>
      <button onClick={changeState}>
        Klik bang
      </button>

      <p>state : {myState}</p>
      </>
    )
}

export default App