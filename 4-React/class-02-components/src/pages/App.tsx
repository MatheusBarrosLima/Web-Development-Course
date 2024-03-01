import { ButtonApp } from "../components/ButtonApp";
import { UserCard } from "../components/UserCard";

export function App() {
  return (
    <>
    <h1>Class 02 Components</h1>
    <ButtonApp name= "Play" />
    <ButtonApp name= "Stop" />
    <ButtonApp name= "<<" />
    <ButtonApp name= ">>" />

    <UserCard name= "Matheus" role="Web Developer" color="lightblue"/>
    <UserCard name= "Amilton" role="Web Developer" color="lightgreen"/>    
    </>
  )
}