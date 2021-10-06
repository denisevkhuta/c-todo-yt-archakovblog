import React, { useState } from 'react'
import Badge from '../Badge';
import List from '../List'

import closeSvg from '../../assets/img/close.svg'

import './AddList.scss'

const AddList = ({ colors }) => {

    const [visiblePopup, setVisiblePopup] = useState(false);
    const [selectedColor, selectColor] = useState(colors[0].id);

    return (
        <div className="add-list">
            <List
                click={() => setVisiblePopup(true)}
                items={[
                    {
                        color: 'green',
                        name: 'Добавить список'
                    }
                ]} />
            {visiblePopup && <div className="add-list__popup">
                <img 
                onClick={() => setVisiblePopup(false)}
                src={closeSvg} alt="" className="add-list__popup-close-btn" />
                <input className="field" type="text" placeholder="Название списка" />
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
                <button className="button">Добавить</button>
            </div>}
        </div>
    )
}

export default AddList
