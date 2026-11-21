import { create } from 'zustand';
import { api } from '../lib/axios.js';



export const useProductStore = create(( set , get ) => ({
    products: [],
    homeAccessories:[],
    

    getAllProducts: async() =>{
        try{
            const res = await api.get('/product/getAllProducts');
            set({ products : res.data })
        }catch(err){
            console.log(err)
            set({ products: null })
        }
    },

    getAllAccessories: async() =>{
        try{
            const res = await api.get('/product/getAllAccessories');
            set({ homeAccessories : res.data.data })
        }catch(err){
            console.log(err)
            set({ homeAccessories: null })
        }
    }
}))
