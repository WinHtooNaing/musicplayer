import React from 'react';
import './news.css';
import world from '../image/world.jpg'
import myanmar from '../image/myanmar.jpg'
import other from '../image/other.jpg'

const News = () => {
    return (
        <>
        <div className="newcontainer">
            <h1>NEWS</h1>
        </div>
        <div className="newcontainer1">
            <img src={world} alt="img" width="70px"/>
            <div className="news1">
                <h2>Top world Songs</h2>
                <p>Our music player perfectly covers the most famous
                    songs in the world.I hope the listeners will like it.</p>
                           
             </div>
        </div>
        <div className="newcontainer1">
            <img src={myanmar} alt="img" width="70px"/>
            <div className="news1">
                <h2>Top Myanmar Songs</h2>
                <p>Regarding Burmese songs, it is also described perfectly.
                    We hope that our website will be convenient<br/> for those who like Burmese songs.
                </p>
                           
             </div>
        </div>
        <div className="newcontainer1">
            <img src={other} alt="img" width="70px"/>
            <div className="news1">
                <h2>Other Songs</h2>
                <p>Our website has also added other songs.
                    We have carefully prepared our website so that listeners <br/>can enjoy other new things.
                </p>
                           
             </div>
        </div>
            
        </>
    )
}



export default News;