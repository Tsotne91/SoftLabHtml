import React, {useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import {Col, Modal, Row} from 'react-bootstrap'
import axios from "axios";

export default function GridModal(props){

    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        async function getPhotos() {
            if (props.albumId){const response = await axios.get(`https://jsonplaceholder.typicode.com/photos`, {
                params: {
                    ID: props.albumId
                }
            });
            setPhotos(response.data);}
        }
        getPhotos().catch(console.error)
    }, [props.albumId])

    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter" size="lg">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Using Grid in Modal
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                    <Row>
                        {
                            photos.map((photo) => (
                                <Col key={photo.id} md={3} className="my-2 border border-1">
                                    {
                                        <div role="button" onClick={() => {
                                        }}>
                                            <img src={photo.url}
                                                 alt="thumbnail"
                                                 width="180"
                                            />
                                            {photo.title}
                                        </div>
                                    }
                                </Col>
                            ))
                        }
                    </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

