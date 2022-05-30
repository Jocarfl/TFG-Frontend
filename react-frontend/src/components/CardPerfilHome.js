import React from 'react';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';
import { useAuth } from "../context/AuthContext";
import { perfilUsuario } from '../firebase';
import { async } from '@firebase/util';



export default function CardPerfilHome() {

  const { user } = useAuth();

  let ar=[];

  getDocs(perfilUsuario).then((snapshot)=>{
    snapshot.docs.forEach((doc)=> {
      ar.push({...doc.data()});
      
    });
    
  });
  

  return (
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.stickpng.com%2Fes%2Fimg%2Ficonos-logotipos-emojis%2Fusuarios%2Ficono-usuario-encerclado&psig=AOvVaw0fZheIu8EwSWsNLw5T2YPz&ust=1653934450293000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCMCHxo2ohfgCFQAAAAAdAAAAABAN'></Card.Img>
  <Card.Body>
    <Card.Title>User</Card.Title>
    <Card.Subtitle>Nivel 20</Card.Subtitle>
    <ProgressBar animated now={50} label={100+"/"+200} />
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>137 Logros</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Logro1</Card.Link>
    <Card.Link href="#">Logro2</Card.Link>
    <Card.Link href="#">Logro3</Card.Link>
  </Card.Body>
</Card>
  );
}
