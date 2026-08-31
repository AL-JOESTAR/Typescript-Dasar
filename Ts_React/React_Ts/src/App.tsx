import { useState } from "react"

type User = {
  username: string,
  email: string,
}

type ButtonProps = {
  title: string;
  className?: string;
  onClick: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <button
    onClick={props.onClick} 
    className={props.className}>
      {props.title}
    </button>
  )
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
      <Button title="halo ini dari komponen" onClick={() => {}}/>
      </>
    )
}

export default App