import styled from 'styled-components'

const MainContainer = ({children}) => {
  return (
	<ParentContainer>
		<Container>
			{children}
		</Container>
	</ParentContainer>
  )
}

const ParentContainer = styled.main`
	width: 100%;
	background: white;
`

const Container = styled.div`
	width: 800px;
	margin: 0 auto;
	padding: 20px;
`

export default MainContainer