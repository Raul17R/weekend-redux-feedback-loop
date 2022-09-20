import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'; // history import

const Feeling = () =>{
    const history = useHistory();
    const feeling = useSelector(store => store.feeling);
    const dispatch = useDispatch();

    const handleChange = (event) =>{
        // let [feelings, setFeeling] = useState ();
        dispatch ({type: 'SET_FEELING', payload: event.target.value});
        
        
    }
    const handleClick = (event) =>{
        
        if(feeling === ''){
            alert('please enter data');

        }else{
            history.push('/understanding');
        }
    }
   
    return (
        <>
            <h3>How are you feeling today?</h3>
            <div>
                <input value={feeling} onChange={handleChange} className="input" type="number" />
                
                <button onClick={handleClick} className="button">Next</button>
                {/* history.push('/understanding') */}
            </div>
        </>
    )
}

export default Feeling;