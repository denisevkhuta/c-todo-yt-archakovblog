import React from 'react';
import classNames from 'classnames';

import removeSvg from  '../../assets/img/remove.svg';

import './List.scss'
import Badge from '../Badge';

const List = ({ items, isRemovable, click, onRemove }) => {
    
    return (
        <ul onClick = {click} className="list">
            {
                items && items.map(
                    (item, index) => (
                        <li
                            key={index}
                            className={classNames(item.className, { 'active' : item.active })}>
                            <Badge color={item.color.name} />
                            <span>{item.name}</span>
                            {isRemovable && <img src={removeSvg} alt="" onClick={() => onRemove(item)} className="list__remove-icon" />}
                        </li>
                    )
                )
            }
        </ul>
    );
}

export default List;