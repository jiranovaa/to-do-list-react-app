import React from 'react';
import './Item.css';

const Item = ({ id, title, date, onDelete }) => {
    return (
        <li className='item' key={id}>
            <span className='item-title'>{title}</span>
            <div className='absolute-position'>
                {date}
                <button className='btn'
                onClick={() => onDelete(id)}>
                    <i className='fa fa-trash'></i>
                </button>
            </div>
        </li>
    )
}

export default Item;