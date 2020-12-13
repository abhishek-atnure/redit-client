import React from 'react';
import './posts.css';
import Loading from '../loading/Loading';
import * as timeago from 'timeago.js';

function Posts({ isLoading, items }) {

    // post creation time
    const createdOn = (time) => {
        return timeago.format(time * 1000)
    }

    // //jsx to render
    return isLoading ? <Loading /> : (
        <div className="blocks">
            {
                items.children.length > 0 && items.children.map(post =>
                    <div className="fields">
                        <h6>{post.data.title}{post.data.selftext ? <a href={post.data.url} target="_blank">View Post</a> : null}</h6>
                        {post.data.post_hint === 'image' ?
                            <img src={post.data.url_overridden_by_dest} alt={post.data.description} /> : null}

                        <div className="bottom-span">
                            <span>{createdOn(post.data.created_utc)}</span>
                            <span>by {post.data.author}</span>
                        </div>
                    </div>
                )}
        </div>
    )
}


export default Posts;