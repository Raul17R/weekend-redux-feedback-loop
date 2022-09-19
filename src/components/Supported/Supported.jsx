import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Supported = () =>{
    const history = useHistory();
    const supported = useSelector(store => store.supported);
    const dispatch = useDispatch();
    
    const handleChange = (event) =>{
        dispatch ({type: 'SET_SUPPORTED', payload: event.target.value});
    }
    return(
        <>
            <h3>How well are you being supported?</h3>    
            <div>
                <input value={supported} onChange={handleChange} className="input" type="number" />
                <button onClick={() => history.push('/comments')} className="button">Next</button>
            </div>
        </>
    )
}
export default Supported;