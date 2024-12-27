import { create } from "zustand";


export interface ProfileState{
    name: string;
    email:string;

    changeProfile: ( name:string, email:string ) => void;
}

export const useProfileStore = create<ProfileState>()( (set, get) =>({
    name: 'John Doe',
    email: 'john.doe@google.com',

    changeProfile: ( name:string, email: string) => {
        console.log(get());//devuelve el estado actual
        set( { name, email });//cambia el estado del name y el email set({ name:name, email:email })
    },

}) );
