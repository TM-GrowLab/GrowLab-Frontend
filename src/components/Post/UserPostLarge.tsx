import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Comment from './Comment/Comment';

import lamp from '../../images/icons/emoji_objects_24dp_FILL0_wght400_GRAD0_opsz24.svg';
import more_vert_W from '../../images/icons/more_vert_W_FILL0_wght400_GRAD0_opsz24.svg'; 
import comment from '../../images/icons/comment_24dp_FILL0_wght400_GRAD0_opsz24.svg';
import { useFetchUser } from '../../hooks/user/useFetchUser';
import { useFetchPostComments } from '../../hooks/post/useFetchPostComments';
import { useFetchPost } from '../../hooks/post/useFetchPost';

interface UserPostLargeProps {
    UUID: string;
}

export const UserPostLarge: React.FC<UserPostLargeProps> = (
    {
        UUID
    }) => {

        const url = process.env.REACT_APP_URL;

        const [commentList, setCommentList] = useState<any[]>([]);

        const [Like, setLike] = useState<number>(0);
        const [Comments, setComments] = useState<number>(0);
        const [Post, setPost] = useState<any>([]);

        const { comments, commentsStatus, commentsError} = useFetchPostComments(UUID);
        const { post, postStatus, postError} = useFetchPost(UUID);

        const navigate = useNavigate();
        const handleOnClick = () => navigate(`/post/${UUID}`);

        const handleLike = async (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            event.stopPropagation();
            try {
                const token = localStorage.getItem('token');
                const response = await fetch(`${url}/post/like/${UUID}`, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const responseData = await response.json();
            setLike(Like + responseData);

            } catch (error) {
                console.error(error);
            }
        };

        const handleComment = async () => {
            try {
                const token = localStorage.getItem('token');
                const commentContent = (document.querySelector('.commentBox') as HTMLInputElement)?.value;
                
                const response = await fetch(`${url}/post/comment/${UUID}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        content: commentContent
                    })
                });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            window.location.reload();

            } catch (error) {
                console.error(error);
            }
        };

        const handleProfileClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            event.stopPropagation();
            navigate(`/user/${Post.poster}`);
        }

        useEffect(() => {
            if (comments) {
                setCommentList(comments || []);
            }

            if (post) {
                setPost(post);
                setLike(Math.round(post.likes.toString().length / 37));
                setComments(Math.round(post.comments.toString().length / 37));
            }

        }, [comments, Post]);


    return (
        <div className='postItem boxShadow' onClick={handleOnClick}>
            <div className='topBar'>
                <div className="posterInfo" onClick={handleProfileClick}>
                    {Post.user && (
                        <img className='tinyImage' src={Post.user.profilePictureUrl} alt="profile"></img>
                    )}
                    {Post.user && ( 
                        <p>{Post.user.firstName} {Post.user.lastName}</p>
                    )}
                </div>
                <div className="timeInformation">
                    <p className="time">{new Date(Post.created_at).toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit' })}</p>
                </div>
            </div>
            <div className="mainContent">
                <h3 className="title">{Post.title}</h3>
                <p className="description elza_p">{Post.content}</p>
            </div>
            <div className="bottomBar">
                <div className='likeBtn' onClick={handleLike}>
                    <img className='tinyIcon' src={lamp} alt="" />
                    <p className='elza_b'>{Like}</p>
                </div>
                <div className='commentBtn'>
                    <img className='tinyIcon' src={comment} alt="" />
                    <p className='elza_b'>{Comments}</p>
                </div>
                <div className='moreBtn'>
                    <img className='tinyIcon' src={more_vert_W} alt="" />
                    <p className='elza_b'>meer</p>
                </div>
            </div>
            <div className="comments screen ">
                <p>Comments:</p>
                <div>
                    <div className="inputComment flexStart">
                        <input type="text" className='commentBox' />
                        <button onClick={handleComment}>plaatsen</button>
                    </div>
                    
                    {commentList && commentList.map((comment: any) => (
                        <Comment 
                            key={comment.UUID} 
                            author={comment.posterName} 
                            content={comment.content} 
                            photo={comment.posterImage}
                        />
                    ))}
                    
                </div>
            </div>
        </div>
    );
};

export default UserPostLarge;