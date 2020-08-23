import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="navbar-nav">
                <NavLink exact to="/" className="nav-item nav-link">Home</NavLink>
                <NavLink to="/authenticate" className="nav-item nav-link">Login</NavLink>
                <NavLink to="/adduser" className="nav-item nav-link">Add User</NavLink>       
                <NavLink to="/usersboard" className="nav-item nav-link">Users Board</NavLink>      
                <NavLink to="/addcandidate" className="nav-item nav-link">Add Candidate</NavLink>   
                <NavLink to="/candidatesboard" className="nav-item nav-link">Candidates Board</NavLink>
            </div>
        </nav>
    );
}

export { Nav };