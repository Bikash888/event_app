
import React from 'react'
import Styles from './Category.module.css';
import {Button} from 'antd'

const Category = () => {
    const listOfCategory = [
        "Edu-Expo",
        "IT-Events",
        "Automobiles Events",
        "Food Events",
        "Motivational Events",
    ]
    return (
        <div>
            {
                listOfCategory.map((eventList, eventListIndex) => <div>
                 <Button className={Styles.buttons} key={`eventsList-${eventListIndex}`}>
                     {eventList}
                 </Button>
                </div>)
            }

        </div>
    )
}

export default Category
