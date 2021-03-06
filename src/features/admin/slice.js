import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    name: '',
    slug: '',
    description: '',
    photo: '',
    uploadedFile: undefined,
    uploadedFileName: '',
    loading: false,
    error: '',
    createdPost: '',
    redirectToProfile: false,
    formData: '',
    confirmDelete: {
        shouldDelete: false,
        destroy: false,
        slug: ''
    }
}

export const slice = createSlice({
    name: 'admin',
    initialState: initialState,
    reducers: {
        confirmDestroyPost: (state, action) => {
            state.confirmDelete.shouldDelete = true
            state.confirmDelete.slug = action.payload.slug
        },
        denyDestroyItem: (state, action) => {
            state.confirmDelete.shouldDelete = false
        },
        acceptDestroyItem: (state, action) => {
            state.confirmDelete.destroy = true
        },
        destroyPostSuccess: (state) => {
            state.confirmDelete.shouldDelete = false
            state.confirmDelete.destroy = false
            state.confirmDelete.slug = ''
        },
        confirmDestroyProduct: (state, action) => {
            state.confirmDelete.shouldDelete = true
            state.confirmDelete.slug = action.payload.slug
        },
        denyDestroyProduct: (state, action) => {
            state.confirmDelete.shouldDelete = false
        },
        acceptDestroyProduct: (state, action) => {
            state.confirmDelete.destroy = true
        },
        destroyProductSuccess: (state) => {
            state.confirmDelete.shouldDelete = false
            state.confirmDelete.destroy = false
            state.confirmDelete.slug = ''
        },
        confirmDestroyProductCategory: (state, action) => {
            state.confirmDelete.shouldDelete = true
            state.confirmDelete.slug = action.payload._id
        },
        denyDestroyProductCategory: (state, action) => {
            state.confirmDelete.shouldDelete = false
        },
        acceptDestroyProductCategory: (state, action) => {
            state.confirmDelete.destroy = true
        },
        destroyProductCategorySuccess: (state) => {
            state.confirmDelete.shouldDelete = false
            state.confirmDelete.destroy = false
            state.confirmDelete.slug = ''
        },
    },
})

export default slice.reducer
