import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    interfaceLanguage: localStorage.getItem('language') || 'ru',
};

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setInterfaceLanguage(state, action) {
            state.interfaceLanguage = action.payload;
            try {
                localStorage.setItem('language', action.payload);
            } catch (err) {
                console.error(err);
            }
        },
    },
});

export const { setInterfaceLanguage } = languageSlice.actions;
export default languageSlice.reducer;
