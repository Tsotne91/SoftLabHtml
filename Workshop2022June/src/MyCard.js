import React from "react";
import {Card} from "react-bootstrap";

export default function MyCard({title, userId, albumId, onClick}) {
    return <Card className="border border-primary text-secondary mx-4 m-1"
                 role="button"
                 onClick={onClick}>
        <Card.Header>
            <h2 className="my-3">{title}</h2>
            <h3 className="text-danger">Album ID: {albumId}</h3>
        </Card.Header>
        <div className="border-primary text-secondary mx-4 m-1">
            <p>User ID: {userId}</p>
        </div>
    </Card>
}