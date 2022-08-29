import './Contact.css'
import { Link } from 'react-router-dom'
import MainContainer from '../components/MainContainer'
import Header from "../components/Header"
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <>
    <Header/>
      <MainContainer>
        <h1>Contact</h1>
        <p>Apenas um teste amigo.</p>

        <Link to='/'>Home</Link>
      </MainContainer>
    <Footer/>
    </>

  )
}

export default Contact