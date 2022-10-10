import styled, {keyframes} from 'styled-components'
import {BiLoaderAlt as LoadIcon} from 'react-icons/bi'

const ButtonLoading = ({type = 'button', isLoading, children}) => {
    return (
        <LoadingButton type={type} disabled={isLoading}>
            {children}
			{isLoading && <Loader />}
        </LoadingButton>
    )
}

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

const Loader = styled(LoadIcon)`
    color: #fff;
    animation: ${rotate} 1s linear infinite;
    width: 24px;
    height: 24px;
    position: absolute;
	left: calc(50% - 12px);
	top: calc(50% - 12px);
`

const LoadingButton = styled.button`
    background: rgb(0, 172, 224);
    color: #fff;
    position: relative;
    border-radius: 8px;
    font-weight: bold;
    padding: 5px 20px;
	height: 35px;
    border: none;
    cursor: pointer;
    &:hover {
		background: rgb(4, 134, 173);
	}
	&:disabled{
		cursor: default;
		color: rgb(0, 172, 224);
		background: rgb(0, 172, 224);
	}
`

export default ButtonLoading