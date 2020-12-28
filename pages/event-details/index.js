import React from 'react';
import styles from "./EventDetails.module.css";
import Image from "next/image";

const EventDetails =()=> {
    return (
        <div className={styles.container}>
           <div className={styles.aboutWrapper}>
               <h1>Hult Prize Event</h1>
               <h3>27/12/2020</h3>
               <h2>About Event</h2>
               <div className={styles.eventInfoWrapper}>
                   <p>Quisque non dictum eros, Praesent porta vehicula arcu eu ornare. Donec id egestas arcu. Suspendisse auctor ali condimentum ligula ultricies cursus. Vestibulum vel orci vel lacus rhoncus sagittis sed vitae mi. Pellentesque suil molestie elit bibendum tincidunt semper. Aliquam ac volutpat risus. In felis felis, posuere commodo aliquet amit eget, sagittis sed turpis. Phasellus commodo turpis non nunc egestas, et egestas felis pretium. Pellentesque suli dignissim libero vitae tincidunt semper. Nam id ante nisi. Nam sollicitudin, dolor non suscipit feugiat, nibh lacus commodo metus, nec tempus dui velit sagittis velit. Pellentesque elementum risus rhoncus justo porta, at varius odio consequat. Duis non augue adipiscing, posuere quam non, tempus urna.
Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent. Duis</p>
               </div>
           </div>
           <div className={styles.keyDateWrapper}>
              <div className={styles.headWrapper}>
                  <h1>Key Dates & Events</h1>
              </div> 
              <div className={styles.infoWrapper}>
                <div className={styles.infodiv}>
                    <div >
                        Venue:
                    </div>
                    <div>
                        Hotel Annapurna
                    </div>
                </div>
                <div className={styles.infodiv}>
                    <div>
                        Location:
                    </div>
                    <div>
                        Kathmandu
                    </div>
                </div>
                <div className={styles.infodiv}>
                    <div>
                        Date:
                    </div>
                    <div>
                        01/01/2021
                    </div>
                </div>
                <div className={styles.infodiv}>
                    <div>
                        Phone:
                    </div>
                    <div>
                        (+977) 9849788407
                    </div>
                </div>
                <div className={styles.infodiv}>
                    <div>
                        Website:
                    </div>
                    <div>
                        www.hultprize.com
                    </div>
                </div>
              </div>
           </div>
           <div className={styles.peopleWrapper}>
           <div className={styles.titleWrapper}>
              <h1>Our Speakers</h1>
           </div>
           <div className={styles.speakerSection}>
               <div className={styles.speakerInfoWrapper}>
                <Image className={styles.imageWrapper} src="/speakerimg1.jpg" height={168} width={168}/>
                <h3>Jon Snow</h3>
                <p>House Stark Department</p>
               </div>
               <div className={styles.speakerInfoWrapper}>
                <Image className={styles.imageWrapper} src="/speakerimg2.jpg" height={168} width={168}/>
                <h3>Chuck Norris</h3>
                <p>Sniper Organization</p>
               </div>
               <div className={styles.speakerInfoWrapper}>
                <Image className={styles.imageWrapper} src="/speakerimg3.jpg" height={168} width={168}/>
                <h3>Steve Rogers</h3>
                <p>Avenger's Captain</p>
               </div>
           </div>
           </div>
        </div>
    )
}

export default EventDetails;
