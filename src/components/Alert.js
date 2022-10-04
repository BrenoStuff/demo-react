import styled from 'styled-components'

const Alert = (children, type) => {
  return (
    <AlertBox>
        {children}
    </AlertBox>
  )
}

const types = {
    success: "#c2ffb6",
	error: "#ffbfbf",
	warning: "#fff7bf",
	info: "#bff3ff"
}

const AlertBox = styled.div`
    width: 100%;
    padding: 20px;
    border-radius: 20px;
    background-color: ${props => types[props.type]};
    margin: 15px 0;
`

export default Alert