import React from 'react';
import classNames from 'classnames';

import './List.scss'
import Badge from '../Badge';

const List = ({ items, isRemovable, click }) => {
    return (
        <ul onClick = {click} className="list">
            {
                items.map(
                    (item, index) => (
                        <li
                            key={index}
                            className={classNames(item.className, { 'active' : item.active })}>
                            <Badge color={item.color} />
                            <span>{item.name}</span>
                        </li>
                    )
                )
            }
        </ul>
    );
}

export default List;