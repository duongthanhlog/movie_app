import request, { fetchDataFromApi } from '@/utils/httpRequest'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const signUp = createAsyncThunk(
    'signUp/user',
    async (newUser) => {
        const users = await fetchDataFromApi('http://localhost:3500/users')
        const accountAlreadyExists = await users.find((user) => {
            return user.name === newUser.name || user.email === newUser.email
        })
        if (!accountAlreadyExists) {
            request.post('http://localhost:3500/users', {
                ...newUser,
                watchList: [],
                favoriteList: []
            })
        }
    }
)
const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null
    }

})



export default userSlice.reducer