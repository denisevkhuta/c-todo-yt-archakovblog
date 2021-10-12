import React from 'react';
import classNames from 'classnames';
import axios from 'axios';


import removeSvg from '../../assets/img/remove.svg';

import './List.scss'
import Badge from '../Badge';

const List = ({ items, isRemovable, click, onRemove }) => {

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
        <ul onClick={click} className="list">
            {
                items && items.map(
                    (item, index) => (
                        <li
                            key={index}
                            className={classNames(item.className, { 'active': item.active })}>
                            <Badge color={item.color.name} />
                            <span>{item.name}</span>
                            {isRemovable && <img src={removeSvg} alt="" onClick={() => removeList(item)} className="list__remove-icon" />}
                        </li>
                    )
                )
            }
        </ul>
    );
}

export default List;