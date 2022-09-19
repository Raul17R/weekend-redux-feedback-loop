import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Summary = () => {
    const history = useHistory();
    const feeling = useSelector(store => store.feeling);
    const understanding = useSelector(store => store.understanding);
    const supported = useSelector(store => store.supported);
    const comments = useSelector(store => store.comments);
    const dispatch = useDispatch();

    const handleSubmit = () =>{
        axios({
            method: 'POST',
            url: '/feedBack',
            data: {
                feeling: feeling,
                understanding: understanding,
                supported: supported,
                comments: comments,
            }
        }).then((response) => {
            dispatch ({type: 'CLEAR_ALL'});
            history.push('/');
        }).catch((err) =>{
            console.log('Theres an error in POST',err);
        })
    }
    return (
        <>
            <h2>Summary Page</h2>
            <div style={{ margin: '20px 10px', fontSize: '1.4em' }}>
             <div>Feeling: {feeling}</div>
             <div>Understanding: {understanding}</div>
             <div>Supported: {supported}</div>
             <div>Comments: {comments}</div>
            </div>
            <button onClick={handleSubmit} className="button">Submit</button>
        </>
    )
}

export default Summary;