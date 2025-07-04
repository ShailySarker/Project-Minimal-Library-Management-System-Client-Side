import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiUrl = import.meta.env.VITE_API_URL;

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({
        baseUrl: apiUrl
    }),
    tagTypes: ["book", "borrow"],
    endpoints: (builder) => ({

        // get books
        getBooks: builder.query({
            query: ({
                page = 1,
                limit = 10,
                sort = "desc",
                sortBy = "createdAt",
                filter = "" }) => `/books?page=${page}&limit=${limit}&sort=${sort}&sortBy=${sortBy}&filter=${filter}`,
            providesTags: ["book"]
        }),

        // create books
        createBook: builder.mutation({
            query: (bookData) => ({
                url: "/books",
                method: "POST",
                body: bookData
            }),
            invalidatesTags: ["book"]
        }),

        // get book by id
        getBookById: builder.query({
            query: (id) => `/books/${id}`,
            providesTags: ['book'],
        }),

        // delete book
        deleteBook: builder.mutation({
            query: (id) => ({
                url: `/books/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['book'],
        }),

        // update book
        updateBook: builder.mutation({
            query: ({ id, updatedData }) => ({
                url: `/books/${id}`,
                method: "PUT",
                body: updatedData,
            }),
            invalidatesTags: ['book'],
        }),

        // borrow book
        borrowBook: builder.mutation({
            query: (borrowData) => ({
                url: "/borrow",
                method: "POST",
                body: borrowData,
            }),
            invalidatesTags: ["book", "borrow"],
        }),

        // borrow summary
        getBorrowSummary: builder.query({
            query: () => "/borrow",
            providesTags: ["borrow"]
        }),
    })
})


export const {
    useGetBooksQuery,
    useCreateBookMutation,
    useGetBookByIdQuery,
    useDeleteBookMutation,
    useUpdateBookMutation,
    useBorrowBookMutation,
    useGetBorrowSummaryQuery } = baseApi;