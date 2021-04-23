import React from 'react'
import './index.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            <Post 
                profilePic="https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&rect=37%2C29%2C4955%2C3293&q=45&auto=format&w=926&fit=clip"
                message="adu"
                timestamp="This is timestamp"
                username="xxx"
                image="https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg?width=700&crop=2:1"
            />
            <Post />
            <Post />
        </div>
    )
}

export default Feed
