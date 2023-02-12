import { useHistory } from "react-router-dom";

const Details = () => {
    const history = useHistory();

    return(
        <>
        Details View
        <br></br>
        <button onClick={() => history.push('/')}>Back To List</button>
        </>

    );
}

export default Details;