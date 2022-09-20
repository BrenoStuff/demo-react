import {useEffect, useState} from 'react'
import './Home.css'
import MainContainer from '../components/MainContainer'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CardComment from '../components/CardComment'

const Home = () => {

  const [users, setUsers] = useState([])

  const requestUsers = async () => {
    const response = await fetch('http://localhost/PJ3/ifsp-api-php/user/list')
    const result = await response.json()
    console.log(result.success.message)
    setUsers(result.data)
  }

  useEffect(() => {
    requestUsers()
  },[])

  return (
    <>
    <Header/>
      <MainContainer>
        
        <h1>Home</h1>

        <p>O React (também denominado React.js ou ReactJS) é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário (front-end) em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Img         ur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros.[6]</p>
        <p>Em 2015, o Facebook anunciou o módulo React Native, que em conjunto com o React, possibilita o desenvolvimento de aplicativos para Android e iOS utilizando componentes de interface de usuário nativos de ambas plataformas, sem precisar recorrer ao HTML.[7]</p>
        <p>Na pesquisa de 2018 sobre hábitos de desenvolvedores do site Stack Overflow, o React foi a terceira biblioteca ou framework[8] mais citado pelos usuários e desenvolvedores profissionais, ficando atrás somente do Node.js e Angular, respectivamente.[9]</p>

        <p>Lista usuários API Git Hub:</p>


        {
          users.length === 0
          ? <p>Nenhum usuário</p>
          : users.map((user) =>  
            (
              <CardComment key={user.id} avatarUrl={user.avatar} name={user.name} id={user.id}>
                {user.email}
              </CardComment>
            )
          )
        }

      </MainContainer>

    <Footer/>
    </>

  )
}

export default Home