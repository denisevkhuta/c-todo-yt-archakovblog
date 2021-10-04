import React from 'react';

import listSvg from '../assets/img/list.svg';

const List = () => {
    return (
        <ul className="todo__list">
            <li>
                <i>
                    <img src={listSvg} alt="" />
                </i>
                <span>Все задачи</span>
            </li>
        </ul>
    );
}

export default List;