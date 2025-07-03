import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000/api"
    }),
    tagTypes: ['book'],
    endpoints: (builder) => ({

        // get books
        getBooks: builder.query({
           query: () => "/books",
            // query: ({
            //     page = 1,
            //     limit = 10,
            //     sort = "desc",
            //     sortBy = "createdAt",
            //     filter = "" }) => `/books?page=${page}&limit=${limit}&sort=${sort}&sortBy=${sortBy}&filter=${filter}`,
        }),

        // create books
        createBook: builder.mutation({
            query: (bookData) => ({
                url: "/books",
                method: "POST",
                body: bookData
            }),
            invalidatesTags: ["book"]
        })


    })
})


export const {useGetBooksQuery, useCreateBookMutation} = baseApi;