import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { updateDislikeCount, updateLikeCount } from "../../reducer/userData";
import { ACTION_TYPES, likeDislikeDispatch } from './action';

const LikeDislike = ({
    userId
}) => {
    const likeCount = useSelector((state) => state.userData.likeCounts);
    const dislikeCount = useSelector((state) => state.userData.dislikeCounts);
    const dispatch = useDispatch();

    /* PROMISE BASED LIKE DISLIKE */
    const dispatchMiddleware = (actionType) => {
        dispatch(likeDislikeDispatch(userId, actionType));
    }

    return (
        <div className='flex'>
            <div className='mr-4'>
                <button onClick={() => dispatchMiddleware(ACTION_TYPES[0])} className='mr-2'>Like</button>
                <span>{likeCount[userId]}</span>
            </div>
            <div>
                <button onClick={() => dispatchMiddleware(ACTION_TYPES[1])} className='mr-2'>Dislike</button>
                <span>{dislikeCount[userId]}</span>
            </div>
        </div>
    )
}

export default React.memo(LikeDislike);