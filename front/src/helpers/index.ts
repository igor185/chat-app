import randomProfile from 'random-profile-generator';


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