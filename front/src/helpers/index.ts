import randomProfile from 'random-profile-generator';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import {IMessageView} from "../model/IApp";
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

export const fromNow = (date: string | number) => dayjs(date).fromNow();

export const sortChatList = (data: IMessageView[]) => {
    const res = [...(data || [])];

    return res.sort((el1, el2) => {
        const time1: number = el1.message ? el1.message.time : 0;
        const time2: number = el2.message ? el2.message.time : 0;
        return time2- time1;
    })
};