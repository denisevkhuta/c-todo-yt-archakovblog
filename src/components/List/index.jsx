import React from 'react';
import classNames from 'classnames';

import './List.scss'

const List = ({ items, isRemovable, click }) => {
    return (
        <ul onClick = {click} className="list">
            {
                items.map(
                    (item, index) => (
                        <li
                            key={index}
                            className={classNames(item.className, { 'active' : item.active })}>
                            <i className={`badge badge--${item.color}`}></i>
                            <span>{item.name}</span>
                        </li>
                    )
                )
            }
        </ul>
    );
}

export default List;