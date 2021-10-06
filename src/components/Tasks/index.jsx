import React from 'react';

import editSvg from '../../assets/img/edit.svg';

import './Tasks.scss';

const Tasks = () => {
    return (
        <div className="tasks">
            <h2 className="tasks__title">
                Фронтенд
                <img src={editSvg} alt="" />
            </h2>

            <div className="tasks__items">

                <div className="tasks__items-row">

                    <div className="checkbox">
                        <input id="check" type="checkbox" />
                        <label htmlFor="check"></label>
                    </div>

                    <input type="text" value="Any text" />

                </div>

            </div>

        </div>
    );
};

export default Tasks;