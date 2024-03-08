import { useEffect, useState } from "react";
import { PropsUserData, UserCard } from "../components/UserCard";

export function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const [dataUser, setDatauser] = useState({} as PropsUserData);

  useEffect(() => {
    console.log(`Effect ${count}`);// component DidMount
    setCount2((value) => value +1); // derived states
    return () => console.log("Closed")
  }, [count])//componentUpdate

  console.log("Render");// componentWillMount
  useEffect(() => {
    fetch("https://api.github.com/users/MatheusBarrosLima")
    .then((resp) => resp.json())
    .then((data) => setDatauser(data))
    .then((error) => console.error(error));
  })
  // useEffect(() => {
  //   fetch("")
  // }, []);
  return(
    <>
      <h1>Class 04 Effects</h1>
      <p>Count: {count}</p>
      <p>Count2: {count2}</p>
      <button onClick={() => setCount((value) => value +1)}>Add</button>
      
      <UserCard 
        avatar_url={dataUser.avatar_url}
        name={dataUser.name}
        bio={dataUser.bio}
      />
    </>
  );
}