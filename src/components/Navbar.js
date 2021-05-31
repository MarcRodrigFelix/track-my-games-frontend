import React from 'react';
import { Link } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';


export default function Navbar() {

    return (
        <div>
            <ButtonGroup>
                    <Button variant="secondary"><Link to='/' style={{ textDecoration: 'none' }}> Home </Link></Button>
             
                    <Button variant="secondary"><Link to='/newgames' style={{ textDecoration: 'none' }}> Track New Game </Link></Button>
               
                    <Button variant="secondary"><Link to='/games' style={{ textDecoration: 'none' }}> List Of Tracked Games </Link></Button>
            </ButtonGroup>
        </div>
    )
}
