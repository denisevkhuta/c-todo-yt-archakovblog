import React from 'react'
import List from './List'

const AddButtonList = () => {
    return (
        <div>
            <List
                items={[
                    {
                        color: 'green',
                        name: 'Добавить список'
                    }
                ]} />
        </div>
    )
}

export default AddButtonList
