import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Success = () => {
    const history = useHistory();
    const success = useSelector (store => store.success);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch ({type: 'SET_SUCCESS', payload: event.target.calue});
    }
    return(
        <>
            <h3>Thank you for your Feedback!!</h3>
            <button onClick={() => history.push('/')} className="button">Leave new Feedback</button>
        </>
    )
}
export default Success;