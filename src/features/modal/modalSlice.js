import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showModal : false,
    showCreateModal : false,
}

const modalSlice = createSlice({
    name:"modal",
    initialState,
    reducers:{
        openModal: (state,action) =>{
            state.showModal = true;
        },
        closeModal: (state,action) =>{
            state.showModal = false;
        },
        openCreateModal:(state,action) =>{
            state.showCreateModal = true;
        },
        closeCreateModal:(state) =>{
            state.showCreateModal = false;
        },
    }
})

export const { openModal , closeModal,openCreateModal,closeCreateModal } = modalSlice.actions;
export default modalSlice.reducer;