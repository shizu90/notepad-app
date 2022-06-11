import { useState } from "react";

export default function useShow() {
    const [show, setShow] = useState<'main' | 'form'>('main')
    
    const showMain = () => {
        setShow('main')
    }

    const showForm = () => {
        setShow('form')
    }
    
    return {
        formShowed: show === 'form',
        mainShowed: show === 'main',
        showMain,
        showForm
    }
}