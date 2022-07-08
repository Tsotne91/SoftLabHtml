import React from "react";
import {Card} from "react-bootstrap";

export default function MyCard({title, userId, albumId, onClick}) {
    return <Card className="border border-primary text-secondary mx-4 m-1 h-100 bg-success bg-opacity-25"
                 role="button"
                 onClick={onClick}>
        <Card.Header>
            <p className="my-2">{title}</p>
            <p className="text-danger">Album ID: {albumId}</p>
        </Card.Header>
        <div className="border-primary text-secondary mx-4 m-1">
            <p>User ID: {userId}</p>
        </div>
    </Card>
}