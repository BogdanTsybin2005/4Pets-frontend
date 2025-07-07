import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_BASE_URL } from '../api';



export const checkAuth = createAsyncThunk(
    'authorization/checkAuth',
    async (token, { rejectWithValue }) => {
        if (!token || typeof token !== 'string' || !token.includes('.')) {
            return rejectWithValue(false);
        }
        try {
            const res = await axios.get(`${API_BASE_URL}/auth/me`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            const user = res.data?.data;
            return Boolean(user?.id || user?.email);
        } catch {
            return rejectWithValue(false);
        }
    }
);

const loadToken = () => {
    try {
        const item = localStorage.getItem('token');
        if (!item) return '';
        try {
            return JSON.parse(item);
        } catch {
            return item;
        }
    } catch {
        return '';
    }
};


const initialState = {
    token: loadToken(),
    userAuthorizationResult: false,
    isLoading: true,
};

const authorizationSlice = createSlice({
    name: 'authorization',
    initialState,
    reducers: {
        setToken(state, action) {
            state.token = action.payload;
            if (action.payload) {
                try {
                    localStorage.setItem('token', JSON.stringify(action.payload));
                } catch (err) {
                    console.error(err);
                }
            } else {
                try {
                    localStorage.removeItem('token');
                } catch (err) {
                    console.error(err);
                }
            }
        },
        setUserAuthorizationResult(state, action) {
            state.userAuthorizationResult = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(checkAuth.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(checkAuth.fulfilled, (state, action) => {
            state.userAuthorizationResult = action.payload;
            state.isLoading = false;
        })
        .addCase(checkAuth.rejected, (state) => {
            state.token = '';
            state.userAuthorizationResult = false;
            state.isLoading = false;
            try {
                localStorage.removeItem('token');
            } catch (err) {
                console.error(err);
            }
        });
    },
});

export const { setToken, setUserAuthorizationResult } = authorizationSlice.actions;
export default authorizationSlice.reducer;
