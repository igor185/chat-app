import randomProfile from 'random-profile-generator';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import {IFile, IMessageView} from "../model/IApp";
import * as url from '../var/routers';

dayjs.extend(relativeTime);


export const fetchHeaderConfig = () => ({
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
});

export const getAvatars = (amount: number) => {
    let res = [];
    for (let i = 0; i < amount; i++)
        res[i] = randomProfile.avatar();
    return res;
};

export const fromNow = (date: string | number) => dayjs(date).fromNow();

export const sortChatList = (data: IMessageView[]) => {
    const res = [...(data || [])];

    return res.sort((el1, el2) => {
        const time1: number = el1.message ? el1.message.time : 0;
        const time2: number = el2.message ? el2.message.time : 0;
        return time2 - time1;
    })
};

export const uploadFile = async (file: any): Promise<IFile> => {
    const formData = new FormData();
    formData.append('file', file);

    let res = await fetch(url.UPLOAD_FILE, {
        headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
        method: "POST",
        body: formData
    });
    res = await res.json();
    return res as unknown as IFile;
};


export const humanFileSize = (bytes: number, si: boolean = false) => {
    const thresh = si ? 1000 : 1024;
    if (Math.abs(bytes) < thresh) {
        return bytes + ' B';
    }
    const units = si
        ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
        : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
    let u = -1;
    do {
        bytes /= thresh;
        ++u;
    } while (Math.abs(bytes) >= thresh && u < units.length - 1);
    return bytes.toFixed(1) + ' ' + units[u];
};

export const dataURLtoFile = (dataurl: any, filename: any) => {
    let arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {type:mime});
};
