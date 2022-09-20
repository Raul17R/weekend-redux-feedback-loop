import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const understanding = () =>{
    const history = useHistory();
    const understanding = useSelector(store => store.understanding);
    const dispatch = useDispatch();
    
    const handleChange = (event) =>{
        dispatch ({type: 'SET_UNDERSTANDING', payload: event.target.value});
    }
    const handleClick = (event) =>{
        
        if(understanding === ''){
            alert('please enter data');

        }else{
            history.push('/supported');
        }
    }
    return (
        <>
            <h3>How well are you understanding the content?</h3>
            <input value={understanding} onChange={handleChange} className="input" type="number" />
            <button onClick={handleClick} className='button'>Next</button>
            
        </>
    )
}

export default understanding;