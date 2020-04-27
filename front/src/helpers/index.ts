import randomProfile from 'random-profile-generator';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);


export const fetchHeaderConfig = () => ({
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
});

export const getAvatars = (amount: number) => {
    let res = [];
    for(let i = 0; i<amount; i++)
        res[i] = randomProfile.avatar();
    return res;
};

export const fromNow = (date: string) => dayjs(date).fromNow();