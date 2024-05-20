import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { NavBar } from '../NavBar';
import Comment from './Comment/Comment';

import lamp from '../../images/icons/emoji_objects_24dp_FILL0_wght400_GRAD0_opsz24.svg';
import more_vert_W from '../../images/icons/more_vert_W_FILL0_wght400_GRAD0_opsz24.svg'; 
import comment from '../../images/icons/comment_24dp_FILL0_wght400_GRAD0_opsz24.svg';

interface UserPostLargeProps {
    UUID: string;
}

export const UserPostLarge: React.FC<UserPostLargeProps> = (
    {
        UUID
    }) => {

        const url = process.env.REACT_APP_URL;

        const [user, setUser] = useState<any>();
        const [commentList, setCommentList] = useState<any[]>([]);

        const [like, setLike] = useState<number>(0);
        const [comments, setComments] = useState<number>(0);

        const [postResponse, setPostResponse] = useState<any>([]);


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
            setLike(like + responseData);

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
            // const responseData = await response.json();
            // setComments(comments + responseData);

            } catch (error) {
                console.error(error);
            }
        };

        useEffect(() => {
            const fetchUserData = async (poster: string) => {
                try {
                    let url = process.env.REACT_APP_URL;
                    const response = await fetch(
                        `${url}/user/${poster}`, 
                        {}
                    );
                
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    
                    const res = await response.json();
                    setUser(res);
                } catch (error) {
                    console.error(error);
                }
            };

            const fetchCommentsData = async () => {
                try {
                    const response = await fetch(
                        `${url}/post/comments/${UUID}`, 
                        {}
                    );
            
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }

                    setCommentList(await response.json());
                    

                } catch (error) {
                    console.error(error);
                }
            };

            const fetchPostData = async () => {
                try {
                    const response = await fetch(
                        `${url}/post/${UUID}`, 
                        {}
                    );
            
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
    
                    const res = await response.json();
                    setPostResponse(res);
                    setLike(Math.round(res.likes.toString().length/37));
                    setComments(Math.round(res.comments.toString().length/37));

                    fetchUserData(res.poster);
                    fetchCommentsData();

                } catch (error) {
                    console.error(error);
                }
            };

            fetchPostData();
            
        }, []);


    return (
        <div className='postItem boxShadow' onClick={handleOnClick}>
            <div className='topBar'>
                <div className="posterInfo">
                    {user && (
                        <img className='tinyImage' src={user.profilePictureUrl} alt="profile picture"></img>
                    )}
                    {user && ( 
                        <p>{user.firstName} {user.lastName}</p>
                    )}
                </div>
                <div className="timeInformation">
                    <p className="time">{new Date(postResponse.created_at).toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit' })}</p>
                </div>
            </div>
            <div className="mainContent">
                <h3 className="title">{postResponse.title}</h3>
                <p className="description elza_p">{postResponse.content}</p>
            </div>
            <div className="bottomBar">
                <div className='likeBtn' onClick={handleLike}>
                    <img className='tinyIcon' src={lamp} alt="" />
                    <p className='elza_b'>{like}</p>
                </div>
                <div className='commentBtn'>
                    <img className='tinyIcon' src={comment} alt="" />
                    <p className='elza_b'>{comments}</p>
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