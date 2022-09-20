import Header from '../components/Header'
import Footer from '../components/Footer'
import MainContainer from '../components/MainContainer'
import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

const User = () => {
	const { id } = useParams()
  const navigate = useNavigate()
  const [user, setUser] = useState({})

  const requestUserById = async (id) => {
		const response = await fetch(`http://localhost/PJ3/ifsp-api-php/user/by-id?id=${id}`)
    const result = await response.json()
    console.log(result?.success?.message)
    if(result?.error){
        navigate('/not-found')
    }
    setUser(result.data)
  }

  useEffect(() => {
    requestUserById(id)
	// eslint-disable-next-line
  },[])

  return (
    <>
			<Header/>
			<MainContainer>
				<div>
					<h1> {user.name} </h1>
					<p> Email: {user.email} </p>
					<img src={user.avatar} alt={`Avatar do ${user.name}`}/>
				</div>
			</MainContainer>
			<Footer/>
    </>
  )
}

export default User