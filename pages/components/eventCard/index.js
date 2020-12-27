import React from 'react'
import styles from './Event.module.css';
import {Row,Col} from  'antd'
import {CalendarOutlined,DoubleRightOutlined} from '@ant-design/icons'
const EventCard = () => {
    const EventList = [
        {
            title: "Aarohan-2.0 -EEC",
            summary: "This is the educational expo which is organized in order to showcase the hidden talent of the student.",
            date_from: '2020-01-12',
            date_to: "2020-01-20",
            image:"https://res.cloudinary.com/di23q5uen/image/upload/v1608815143/main_ppqdqz.jpg"
        },
        {
            title: "Aarohan-2.0 -EEC",
            summary: "This is the educational expo which is organized in order to showcase the hidden talent of the student.",
            date_from: '2020-01-12',
            date_to: "2020-01-20",
            image:"https://res.cloudinary.com/di23q5uen/image/upload/v1608815143/main_ppqdqz.jpg"
        },
        {
            title: "Aarohan-2.0 -EEC",
            summary: "This is the educational expo which is organized in order to showcase the hidden talent of the student.",
            date_from: '2020-01-12',
            date_to: "2020-01-20",
            image:"https://res.cloudinary.com/di23q5uen/image/upload/v1608815143/main_ppqdqz.jpg"
        },
        {
            title: "Aarohan-2.0 -EEC",
            summary: "This is the educational expo which is organized in order to showcase the hidden talent of the student.",
            date_from: '2020-01-12',
            date_to: "2020-01-20",
            image:"https://res.cloudinary.com/di23q5uen/image/upload/v1608815143/main_ppqdqz.jpg"
        },
        {
            title: "Aarohan-2.0 -EEC",
            summary: "This is the educational expo which is organized in order to showcase the hidden talent of the student.",
            date_from: '2020-01-12',
            date_to: "2020-01-20",
            image:"https://res.cloudinary.com/di23q5uen/image/upload/v1608815143/main_ppqdqz.jpg"
        },
        {
            title: "Aarohan-2.0 -EEC",
            summary: "This is the educational expo which is organized in order to showcase the hidden talent of the student.",
            date_from: '2020-01-12',
            date_to: "2020-01-20",
            image:"https://res.cloudinary.com/di23q5uen/image/upload/v1608815143/main_ppqdqz.jpg"
        },
        {
            title: "Aarohan-2.0 -EEC",
            summary: "This is the educational expo which is organized in order to showcase the hidden talent of the student.",
            date_from: '2020-01-12',
            date_to: "2020-01-20",
            image:"https://res.cloudinary.com/di23q5uen/image/upload/v1608815143/main_ppqdqz.jpg"
        },
        {
            title: "Aarohan-2.0 -EEC",
            summary: "This is the educational expo which is organized in order to showcase the hidden talent of the student.",
            date_from: '2020-01-12',
            date_to: "2020-01-20",
            image:"https://res.cloudinary.com/di23q5uen/image/upload/v1608815143/main_ppqdqz.jpg"
        },
        {
            title: "Aarohan-2.0 -EEC",
            summary: "This is the educational expo which is organized in order to showcase the hidden talent of the student.",
            date_from: '2020-01-12',
            date_to: "2020-01-20",
            image:"https://res.cloudinary.com/di23q5uen/image/upload/v1608815143/main_ppqdqz.jpg"
        },
        {
            title: "Aarohan-2.0 -EEC",
            summary: "This is the educational expo which is organized in order to showcase the hidden talent of the student.",
            date_from: '2020-01-12',
            date_to: "2020-01-20",
            image:"https://res.cloudinary.com/di23q5uen/image/upload/v1608815143/main_ppqdqz.jpg"
        },
        {
            title: "Aarohan-2.0 -EEC",
            summary: "This is the educational expo which is organized in order to showcase the hidden talent of the student.",
            date_from: '2020-01-12',
            date_to: "2020-01-20",
            image:"https://res.cloudinary.com/di23q5uen/image/upload/v1608815143/main_ppqdqz.jpg"
        },
        {
            title: "Aarohan-2.0 -EEC",
            summary: "This is the educational expo which is organized in order to showcase the hidden talent of the student.",
            date_from: '2020-01-12',
            date_to: "2020-01-20",
            image:"https://res.cloudinary.com/di23q5uen/image/upload/v1608815143/main_ppqdqz.jpg"
        },
    ]
    return (
        <div className={styles.container}>
            <Row gutter={[16, 16]}>
            {
                EventList.map((events, eventListIndex) =>
                <Col span={6} sm={12} lg={6} xs={16} className={styles.eventRow}>
                    <div className={styles.eventWrapper}  key={eventListIndex}>
                        <img src={events.image} className={styles.images}/>
                        <strong>{events.title}</strong>
                        <p>
                            {events.summary}
                        </p>
                        <div className={styles.footerWrapper}>
                        <CalendarOutlined className={styles.calender} />
                        <span className={styles.footerText}>{events.date_from} to {events.date_to}</span>
                            <div className={styles.readMore}>
                            <DoubleRightOutlined />
                                </div>
                            </div>
                    </div>
                    </Col>
                )
            }
            </Row>
        </div>
    )
}

export default EventCard
