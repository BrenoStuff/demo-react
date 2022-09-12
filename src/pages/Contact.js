import './Contact.css'
import { useState, useEffect} from 'react' 
import { Link } from 'react-router-dom'
import MainContainer from '../components/MainContainer'
import Header from "../components/Header"
import Footer from '../components/Footer'

const Contact = () => {

  const [count, setCount] = useState(0)
  const [name, setName] = useState('User')

  useEffect(() => {
    console.log(count)
  }, [count])

  return (
    <>
    <Header/>
      <MainContainer>
        <h1>Contador? {count}</h1>
        <button onClick={() => setCount(count + 1)}>Adicionar</button><br/><br/>
        <p>Apenas um teste amigo.</p>
        <h1>Olá {name}</h1>
        <button onClick={() => setName('Breno')}>Breno</button><br/><br/>
        <button onClick={() => setName('Allan')}>Allan</button><br/><br/><br/>
        <Link to='/'>Home</Link>
      </MainContainer>
    <Footer/>
    </>

  )
}

export default Contact