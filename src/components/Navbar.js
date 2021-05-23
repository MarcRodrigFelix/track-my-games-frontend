import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <Link to='/user'> Home </Link>
            <Link to='/newgames'> Track New Game </Link>
        </div>
    )
}
