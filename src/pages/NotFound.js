import Header from '../components/Header'
import Footer from '../components/Footer'
import MainContainer from '../components/MainContainer'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
        <Header/>
        <MainContainer>
            <h1>Page not found</h1>
            <p>Error 404</p>
            <br/>
            <Link to='/'> Home </Link>
        </MainContainer>
        <Footer/>
    </>
  )
}

export default NotFound