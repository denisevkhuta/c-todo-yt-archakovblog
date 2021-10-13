import React from 'react';
import classNames from 'classnames';
import axios from 'axios';


import removeSvg from '../../assets/img/remove.svg';

import './List.scss'
import Badge from '../Badge';

const List = ({ items, isRemovable, onClick, onRemove, onClickItem, activeItem }) => {

    const removeList = item => {
        if (window.confirm('Удалить?')) {
            axios
                .delete('http://localhost:3001/lists/' + item.id)
                .then(
                    () => {
                        onRemove(item.id);
                    }
                )
        }
    }

    return (
        <ul onClick={onClick} className="list">
            {
                items && items.map(
                    (item, index) => (
                        <li
                            key={index}
                            className={classNames(item.className, { 'active': item.active ? item.active : activeItem && activeItem.id === item.id })}
                            onClick={onClickItem ? () => onClickItem(item) : null}
                            >

                            <Badge color={item.color.name} />
                            <span>{item.name} {item.tasks && item.tasks.length > 0 && `(${item.tasks.length})`}</span>
                            {isRemovable && <img src={removeSvg} alt="" onClick={() => removeList(item)} className="list__remove-icon" />}

                        </li>
                    )
                )
            }
        </ul>
    );
}

export default List;