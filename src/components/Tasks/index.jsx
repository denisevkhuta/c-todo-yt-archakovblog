import React from 'react';
import axios from 'axios';

import editSvg from '../../assets/img/edit.svg';

import './Tasks.scss';
import AddTaskForm from './AddTaskForm';

const Tasks = ({ list, onEditTitle, onAddTask }) => {

    const editTitle = () => {
        const newTitle = window.prompt('Название списка', list.name)
        if (newTitle) {
            onEditTitle(list.id, newTitle)
            axios
                .patch('http://localhost:3001/lists/' + list.id, {
                    name: newTitle
                })
                .catch(() => {
                    alert('Не удалось обновить название списка')
                })
        }
    }

    return (
        <div className="tasks">
            <h2 className="tasks__title">
                {list.name}
                <img
                    onClick={editTitle}
                    src={editSvg} alt="" />
            </h2>

            <div className="tasks__items">
                {!list.tasks.length && <h2>Задачи отсутствуют</h2>}
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
                <AddTaskForm list={list} onAddTask={onAddTask} />
            </div>

        </div>
    );
};

export default Tasks;