import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'; // Оновлений шлях до імпорту

import { IPost } from '../models/IPost';

export const postAPI = createApi({
    reducerPath: 'postAPI',
    tagTypes: ['Post'],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPost[], number>({
            query: (limit:number = 5) => ({
                url: '/posts',
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ['Post']
        }),
        createPost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: '/posts',
                method: 'POST',
                body: post,
            }),
            invalidatesTags: ['Post']
        })
    }),
});
