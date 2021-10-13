import React from 'react';

import editSvg from '../../assets/img/edit.svg';

import './Tasks.scss';

const Tasks = ({ list }) => {

    return (
        <div className="tasks">
            <h2 className="tasks__title">
                {list.name}
                <img src={editSvg} alt="" />
            </h2>

            <div className="tasks__items">
                {console.log(list.tasks)}
                {
                    list.tasks.map(
                        task => (
                            
                            <div key={task.id} className="tasks__items-row">

                                <div className="checkbox">
                                    <input id={`task-${task.id}`} type="checkbox" />
                                    <label htmlFor={`task-${task.id}`}></label>
                                </div>

                                <input type="text" value={task.text} readOnly />

                            </div>

                        )
                    )
                }

            </div>

        </div>
    );
};

export default Tasks;