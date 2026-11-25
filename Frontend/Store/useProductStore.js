import { create } from 'zustand';
import { api } from '../lib/axios.js';



export const useProductStore = create(( set , get ) => ({
    products: [],
    homeAccessories:[],
    product:null,
    isGettingProductDetails: false,
    similarProducts:[],
    

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
    },

    getProductBySlug: async(slug) =>{
        set({ isGettingProductDetails: true });
        try{
            const res = await api.get(`/product/getProductBySlug/${slug}`)
            set({ product : res.data })
        }catch(err){
            set({ product : null })       
        }finally{
            set({ isGettingProductDetails: false });
        }
    },
    getSimilarProducts: async(slug) =>{
        try{
            const res = await api.get(`/product/getSimilarProducts/${slug}`)
            set({ similarProducts : res.data })
        }catch(err){
            set({ similarProducts : null })       
        }
    }
}))
