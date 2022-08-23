import {Spinner} from "react-bootstrap";

function SpinnerLoading({show}) {


    return (
        show ? <>
            <div className="text-center w-100 h-100">
                <Spinner animation="border" role="status" className=""/>
                <span>Loading...</span>
            </div>

        </> : null
    );
}
export default SpinnerLoading;