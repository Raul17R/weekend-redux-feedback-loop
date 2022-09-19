import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom'; 
import './Header.css'

const Header = () =>{
    const location = useLocation;
    return(
    <>
    
        <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
    </>
    )
}

export default Header;