import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {

    return (
        <div>
            <div>
                <Link to='/user'> Home </Link>
            </div>
            <div>
                <Link to='/newgames'> Track New Game </Link>
            </div>
            <div>
                <Link to='/games'> List Of Tracked Games </Link>
            </div>
            <br />
            <br />
        </div>
    )
}
