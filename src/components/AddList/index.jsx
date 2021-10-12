import React, { useEffect, useState } from 'react'
import Badge from '../Badge';
import List from '../List'

import closeSvg from '../../assets/img/close.svg'

import './AddList.scss'
import axios from 'axios';

const AddList = ({ colors, onAdd }) => {

    const [visiblePopup, setVisiblePopup] = useState(false);
    const [selectedColor, selectColor] = useState(3);
    const [inputValue, setInputValue] = useState('');

    useEffect(
        () => {
            if (Array.isArray(colors)) {
                selectColor(colors[0].id)
            }
        }, 
        [colors]
    )

    const onClose = () => {
        setVisiblePopup(false);
        setInputValue('');
        selectColor(colors[0].id);
    }

    const addList = () => {
        
        if (!inputValue) {
            alert('Введите название списка');
            return;
        }

        const color = colors.filter(c => c.id === selectedColor)[0].id;

        axios
        .post('http://localhost:3001/lists', {name: inputValue, colorId: color})
        .then(  ({data}) => {
            console.log(data)
        })

        // onAdd({
        //     id: Math.random(),
        //     name: inputValue,
        //     color
        // });

        onClose();
    }

    return (
        <div className="add-list">
            <List
                click={() => setVisiblePopup(true)}
                items={[
                    {
                        color: {
                            name: 'green'
                        },
                        name: 'Добавить список'
                    }
                ]} />
            {visiblePopup && <div className="add-list__popup">
                <img
                    onClick={onClose}
                    src={closeSvg} alt="" className="add-list__popup-close-btn" />

                <input value={inputValue} onChange={e => setInputValue(e.target.value)} className="field" type="text" placeholder="Название списка" />

                <div className="add-list__popup-colors">
                    {
                        colors.map(
                            color => (
                                <Badge
                                    onClick={() => selectColor(color.id)}
                                    key={color.id}
                                    color={color.name}
                                    className={selectedColor === color.id && 'active'}
                                />
                            )
                        )
                    }
                </div>
                <button onClick={addList} className="button">Добавить</button>
            </div>}
        </div>
    )
}

export default AddList
