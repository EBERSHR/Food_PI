import React from 'react';
import { NavLink } from 'react-router-dom';


import '../Styles/paginationcard.css';

const PaginatorCard = (props) => {
    return (
        <div className="paginationCardComponent">
            <NavLink exact to={`/detalle/${props.id}`}>
                <div>{props.name}</div>
                <img className="paginationImage" src={props.image} alt={props.name} />
                <div>{props.tipo}</div>
            </NavLink>
        </div>
    );
}

export default PaginatorCard;
