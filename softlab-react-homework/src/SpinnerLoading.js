import Spinner from 'react-bootstrap/Spinner';

function SpinnerLoading({show}) {
    return (
        <Spinner show={show} animation="border" role="status" className="">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    );
}

export default SpinnerLoading;