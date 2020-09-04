import React from 'react';

const Item = ({ id, title, date, onDelete }) => {
    return (
        <li key={id}>
        {title}
        {date}
            <button 
            className='btn'
            onClick={() => onDelete(id)}>
                <i className='fa fa-trash'></i>
            </button>
        </li>
    )
}

export default Item;