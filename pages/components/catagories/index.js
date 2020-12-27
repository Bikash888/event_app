
import React from 'react'
import Styles from './Category.module.css';
import { Button } from 'antd'

const Category = () => {
    const listOfCategory = [
        "Edu-Expo",
        "IT-Events",
        "Automobiles Events",
        "Food Events",
        "Motivational Events",
    ]
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between',maxWidth:'600px',width:'100%',margin:'0 auto',margin:'20px 0px'}}>
            {/* {
                listOfCategory.map((eventList, eventListIndex) => <div>
                    <Button className={Styles.buttons} key={`eventsList-${eventListIndex}`}>
                        {eventList}
                    </Button>
                </div>)
            } */}

        </div>
    )
}

export default Category
