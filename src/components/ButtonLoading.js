import styled, {keyframes} from 'styled-components'
import {BiLoaderAlt as LoadIcon} from 'react-icons/bi'

const ButtonLoading = ({type = 'button', isLoading, children}) => {
    return (
        <LoadingButton type={type} disabled={isLoading}>
            {isLoading ? <Loader/> : children}
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
`

const LoadingButton = styled.button`
    background: rgb(0, 172, 224);
    border-radius: 8px;
    color: #fff;
    font-weight: bold;
    padding: 5px 20px;
    width: 190px;
    height: 35px;
    border: none;
    cursor: pointer;
    &:hover {
        background: rgb(4, 134, 173);
    }
    &:disabled{
        cursor: default;
        background: rgb(0, 172, 224);
    }
`

export default ButtonLoading