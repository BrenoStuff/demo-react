import {useEffect, useState} from 'react'
import './Home.css'
import MainContainer from '../components/MainContainer'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CardUser from '../components/CardUser'
import Modal from '../components/Modal'
import { API_PATH } from '../config'

const Home = () => {

  const [users, setUsers] = useState([])

  const [userToEdit, setUserToEdit] = useState({
    id: "",
    name: "",
    email: "",
    avatar: "",
  })
  const [showModal, setShowModal] = useState(false)

  const requestUsers = async () => {
    const response = await fetch(`${API_PATH}user/list`)
    const result = await response.json()
    console.log(result.success.message)
    setUsers(result.data)
  }

  const handleChange = (event) =>{
    setUserToEdit({...userToEdit, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await fetch(`${API_PATH}user/update`, {
      method: 'PUT',
      body: JSON.stringify(userToEdit)
    })
    const result = await response.json()
    if(result?.success && result?.user){
      const userUpdated = result.user
      const usersUpdated = users.map((user) => {
        return user.id === userUpdated.id ? userUpdated : user  
      })
      setUsers(usersUpdated)
      setShowModal(false)
    }
    console.log(JSON.stringify(result))
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
        <button onClick={()=>setShowModal(true)}>edit</button>

        {
          users.length === 0
          ? <p>Nenhum usuário</p>
          : users.map((user) =>  
            (
              <CardUser setUsers={setUsers} users={users} key={user.id} avatarUrl={user.avatar} name={user.name} id={user.id} setShowModal={setShowModal} setUserToEdit={setUserToEdit}>
                {user.email}
              </CardUser>
            )
          )
        }

      </MainContainer>

    <Footer/>

    <Modal showModal={showModal} setShowModal={setShowModal}>
          <h1>Edit User</h1>
          <form onSubmit={(event) => handleSubmit(event)}>
              <input type="hidden" name="id" value={userToEdit.id}/>
              <p>Name: <input type="text" name="name" value={userToEdit.name} onChange={(event)=>handleChange(event)}/></p>
              <p>Email: <input type="text" name="email" value={userToEdit.email} onChange={(event)=>handleChange(event)}/></p>
              <p>Avatar: <input type="text" name="avatar" value={userToEdit.avatar} onChange={(event)=>handleChange(event)}/></p>
              <input type="submit" value="Send" />
          </form>
      </Modal>
    </>

  )
}

export default Home