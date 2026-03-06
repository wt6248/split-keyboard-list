import type { KeyboardRow } from "@/types/keyboard"
import { supabase } from "./supabase"

export const insertKeyboard = async (data: Partial<KeyboardRow>) => {
    return await supabase
        .from('keyboards')
        .insert(data)
}

export const updateKeyboard = async (id: string, data: Partial<KeyboardRow>) => {
        const result = await supabase
        .from('keyboards')
        .update(data)
        .eq('id', id)
        .select()

    console.log('result:', result)
    return result

}


export const deleteKeyboard = async (id: string) => {
    return await supabase
        .from('keyboards')
        .delete()
        .eq('id', id)
}