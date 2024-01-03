import { updateDislikeCount, updateLikeCount } from "../../reducer/userData";

const ACTION_TYPES = ['LIKE', 'DISLIKE'];

const likeDislikeDispatch = (userId, actionType) => (disptach, getState) => {
    return new Promise((res, reject) => {
        setTimeout(() => {
            res();
            if (actionType === ACTION_TYPES[0]) {
                disptach(updateLikeCount(userId));
            } else {
                disptach(updateDislikeCount(userId));
            }
        }, 200);
    });
}

export {
    ACTION_TYPES, likeDislikeDispatch
}