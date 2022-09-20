import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Comments = () =>{
    const history = useHistory();
    const comments = useSelector(store => store.comments);
    const dispatch = useDispatch();

    const handleChange = (event) =>{
        dispatch ({type: 'SET_COMMENTS', payload: event.target.value});
    }
    
    return (
        <>
            <h3>Any comments you want to leave?</h3>    
            <input value={comments} onChange={handleChange} className="input" type="text" />
            <button onClick= {() => history.push('/summary')} className="button">Next</button>
        </>
    )
}
export default Comments;