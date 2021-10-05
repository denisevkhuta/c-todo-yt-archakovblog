import React, { useState } from 'react'
import List from '../List'

import './AddList.scss'

const AddList = () => {

    const [visiblePopup, setVisiblePopup] = useState(true);

    return (
        <div className="add-list">
            <List
            click = {() => setVisiblePopup(true)}
                items={[
                    {
                        color: 'green',
                        name: 'Добавить список'
                    }
                ]} />
            {visiblePopup && <div className="add-list-popup">
                <input className="field" type="text" placeholder="Название списка" />
                <button>Добавить</button>
            </div>}
        </div>
    )
}

export default AddList
