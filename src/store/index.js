import { configureStore } from '@reduxjs/toolkit';
import language from './languageSlice.js'
import registration from './registrationSlice.js';
import authorization from './authorizationSlice.js';



export const store = configureStore({
    reducer: {
        language,
        registration,
        authorization,
    },
});
