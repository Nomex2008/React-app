import React from "react";
import { IPost } from "../models/IPost";
import { postAPI } from "../services/PostServices";
import PostItem from "./PostItem";

const PostContainer = ({}) => {
    const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(100)
    const [createPost, {}] = postAPI.useCreatePostMutation()
    const [deletePost, {}] = postAPI.useDeletePostMutation()
    const [updatePost, {}] = postAPI.useUpdatePostMutation()

    const hendleCreate = async () => {
        const title = prompt()
        const numberOfPosts = posts?.length || Date.now()
        const id = `new ${numberOfPosts + 1}`
        await createPost({title, id, body: 'author'} as any)
    }

    const handleRemove = (post: IPost) => {
        deletePost(post)
    }

    const handleUpdate = (post: IPost) => {
        updatePost(post)
    }

    return (
        <div>
            <div className="post__list">
                <button onClick={hendleCreate}>Add new post</button>
                {isLoading && <h1>Loading...</h1>}
                {error && <h1>ERROR</h1>}
                {posts && posts.map(post => 
                    <PostItem remove={handleRemove} update={handleUpdate} key = {post.id} post = {post}/>
                )}
            </div>
        </div>
    )
}

export default PostContainer;