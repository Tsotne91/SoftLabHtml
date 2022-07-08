import {useEffect, useState} from "react";
import axios from "axios";
import {Col, Row} from "react-bootstrap";
import MyCard from "./MyCard";
import GridModal from "./GridModal";

function App() {
    const [albums, setAlbums] = useState([]);
    const [albumId, setAlbumId] = useState('');
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        async function getAlbums() {
            const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
            setAlbums(response.data);
        }

        getAlbums().catch(console.error)
    }, [])

    return (
        <>
            <div className="App show-grid">
                <Row className="m-5">
                    {albums.map((album) => (
                        <Col key={album.id} md={3} sm={6} className="my-2">
                            <MyCard
                                title={album.title}
                                albumId={album.id}
                                userId={album.userId}
                                onClick={() => {
                                    setAlbumId(album.id);
                                    setModalShow(true);
                                }}
                            />
                        </Col>
                    ))}
                </Row>
            </div>
            <GridModal
                show={modalShow}
                albumId={albumId}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default App;
