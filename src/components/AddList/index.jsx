import React, { useState } from 'react'
import Badge from '../Badge';
import List from '../List'

import './AddList.scss'

const AddList = ({ colors }) => {

    const [visiblePopup, setVisiblePopup] = useState(true);
    

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
                <input className="field" type="text" placeholder="Название списка" />
                <div className="add-list__popup-colors">
                    {
                        colors.map(
                            color => (
                                <Badge onClick={() => alert(color.id)} key={color.id} color={color.name} />
                            )
                        )
                    }
                </div>
                <button>Добавить</button>
            </div>}
        </div>
    )
}

export default AddList
