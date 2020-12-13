import React from 'react';
import './posts.css';
import Loading from '../loading/Loading';
import TextTruncate from 'react-text-truncate';
import * as timeago from 'timeago.js';

function Posts({ isLoading, items }) {

    // post creation time
    const createdOn = (time) => {
        return timeago.format(time * 1000)
    }

    //jsx to render
    return isLoading ? <Loading /> : (
        <div className="blocks">
            {
                items.children.length > 0 && items.children.map(post =>
                    <div className="fields">
                        <h4>{post.data.title}</h4>
                        <TextTruncate
                            line={1}
                            element="span"
                            truncateText="…"
                            text={post.data.selftext}
                            textTruncateChild={<a href={post.data.url} target="_blank" >View</a>}
                        />
                        {post.data.post_hint === 'image' ?
                            <img src={post.data.url_overridden_by_dest} alt={post.data.description} /> : null}
                        <div className="bottom-span">
                            <span>created  {createdOn(post.data.created_utc)}</span>
                        </div>
                    </div>
                )}
        </div>
    )
}


export default Posts;