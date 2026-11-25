import { create } from 'zustand';
import { api } from '../lib/axios.js';

export const useAuthStore = create(( set , get ) => ({
    user:null,
    errMassage:null,
    isCheckingAuth: true,

        authCheck: async() =>{
        try{
            const res = await api.get('/auth/check');
            set({ user: res.data })
        }catch(err){
            set({ user: null })
        }finally{
            set({ isCheckingAuth : false })
        }
    },

    login: async (data) => {
        
        try{
            const res = await api.post('/auth/login',data)
            set({ user: res.data })
        }catch(err){
            set({ errMassage: err.response.data.message });
        }
    },

    signUp: async(data) =>{
        try{
            const res = await api.post('/auth/signup',data)
            set({ user: res.data })
        }catch(err){
            set({ errMassage: err.response });
        }
    }


}));