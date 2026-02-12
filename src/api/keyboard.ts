import { supabase } from "./supabase"


export const keyboardApi = {
    getAll: async () => {
        
        const { data } = await supabase.from('keyboards').select('*')
        return data?.map(kb => ({
            ...kb,
            image_url: import.meta.env.VITE_SUPABASE_IMAGE_PATH + kb.image_path
        }))
    },
    getById: async (id: string) => {
        //tbd
        return id
    },
    create: async () => {
        //tbd

    },
    getImageURL : (keyboardId: string) => {
        console.log(import.meta.env.VITE_SUPABASE_IMAGE_PATH)
        return import.meta.env.VITE_SUPABASE_IMAGE_PATH + keyboardId
    }
}