import { createSlice } from '@reduxjs/toolkit';

const defaultState = {
    email: '',
    password: '',
    username: '',
    city: '',
    contact: '',
    avatar: null,
    avatarFile: null,
};

const loadState = () => {
    try {
        const item = localStorage.getItem('registrationData');
        return item ? { ...defaultState, ...JSON.parse(item) } : defaultState;
    } catch (err) {
        console.error(err);
        return defaultState;
    }
};

const registrationSlice = createSlice({
    name: 'registration',
    initialState: loadState(),
    reducers: {
        setRegistrationData(state, action) {
            Object.assign(state, action.payload);
            try {
                localStorage.setItem('registrationData', JSON.stringify(state));
            } catch (err) {
                console.error(err);
            }
        },
        resetRegistrationData() {
            try {
                localStorage.setItem('registrationData', JSON.stringify(defaultState));
            } catch (err) {
                console.error(err);
            }
            return defaultState;
        },
    },
});

export const { setRegistrationData, resetRegistrationData } = registrationSlice.actions;
export default registrationSlice.reducer;
