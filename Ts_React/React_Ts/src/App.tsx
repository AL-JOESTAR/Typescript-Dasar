import { useState } from "react"

type User = {
  username: string,
  email: string,
}

function App () {
const [myState, setMyState] = useState<number>()
const [currentUser, setCurrentUser] = useState<User>()

const changeState = () => {
  setMyState(1)
//   setCurrentUser({
//     email: "test@gmail.com",
//     username: "jaya yata"
//   })
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