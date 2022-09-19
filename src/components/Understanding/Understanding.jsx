import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const understanding = () =>{
    const history = useHistory();
    const understanding = useSelector(store => store.understanding);
    const dispatch = useDispatch();
    
    const handleChange = (event) =>{
        dispatch ({type: 'SET_UNDERSTANDING', payload: event.target.value});
    }
    return (
        <>
            <h3>How well are you understanding the content?</h3>
            <input value={understanding} onChange={handleChange} className="input" type="number" />
            <button onClick={() => history.push('/supported')} className='button'>Next</button>
            
        </>
    )
}

export default understanding;