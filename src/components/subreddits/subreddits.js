import React from 'react';
import './subreddits.css';
import redditError from "./redditError.svg";

const Subreddits = ({ subs, onChange }) => {
    //sets querys parameter in useEffect of post fetch 
    const handleClick = (event) => {
        onChange(event.target.value)
    }
    //jsx to render
    return (
        <div className="subreddits">
            {subs.length > 0 && subs.map(sub =>
                <div className="cards">
                    <img src={sub.data.icon_img ? sub.data.icon_img : redditError} alt=''></img>
                    <button onClick={handleClick} value={sub.data.url}>{sub.data.display_name}</button>
                </div>
            )}
        </div>
    )
}



export default Subreddits;