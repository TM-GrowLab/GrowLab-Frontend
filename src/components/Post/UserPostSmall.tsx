import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavBar } from '../NavBar';

import lamp from '../../images/icons/emoji_objects_24dp_FILL0_wght400_GRAD0_opsz24.svg';
import more_vert_W from '../../images/icons/more_vert_W_FILL0_wght400_GRAD0_opsz24.svg'; 
import comment from '../../images/icons/comment_24dp_FILL0_wght400_GRAD0_opsz24.svg';


interface UserPostSmallProps {
    UUID: string;
    poster: string;
    time: Date;
    title: string;
    description: string;
    likes: number;
    comments: number;
}

export const UserPostSmall: React.FC<UserPostSmallProps> = (
    {
        UUID,
        poster,
        time,
        title,
        description,
        likes,
        comments
    }) => {
        const [user, setUser] = useState<any>();
        const [like, setLike] = useState<number>(likes);

        const navigate = useNavigate();
        const handleOnClick = () => navigate(`/post/${UUID}`);

        const handleLike = async (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            event.stopPropagation();
            try {
                const token = localStorage.getItem('token');
                const response = await fetch(`${process.env.REACT_APP_URL}/post/like/${UUID}`, {
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

        useEffect(() => {
                const fetchUserData = async () => {
                try {
                    let url = process.env.REACT_APP_URL;
                    const response = await fetch(
                        `${url}/user/${poster}`, 
                        {}
                    );
                
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    setUser(await response.json());
                } catch (error) {
                    console.error(error);
                }
            };

            fetchUserData();
        }, []);

    const truncatedDescription = description.length > 280 ? description.slice(0, 280) + '...' : description;

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
                    <p className="time">{time.toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit' })}</p>
                </div>
            </div>
            <div className="mainContent">
                <h3 className="title">{title}</h3>
                <p className="description">{truncatedDescription}</p>
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
        </div>
    );
};

export default UserPostSmall;