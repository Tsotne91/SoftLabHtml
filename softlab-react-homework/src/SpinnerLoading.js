import {Spinner} from "react-bootstrap";

function SpinnerLoading({show}) {


    return (
        show ? <>
            <Spinner animation="border" role="status" className=""/>
            <span>Loading...</span>
        </> : null
    );
}
export default SpinnerLoading;