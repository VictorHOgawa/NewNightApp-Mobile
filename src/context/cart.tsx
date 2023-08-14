import React, { createContext, useState, useContext, useEffect } from 'react'

const cartContext = createContext({} as any)

export default function CartProvider({ children }: any) {
    const [cart, setCart] = useState([])
    const [payment, setPayment] = useState([])

    function add(item: any) {
        setCart(item)
    }

    const store = {
        add,
        cart,
        setCart,
        payment,
        setPayment
    }
    useEffect(() => {

    }, [cart])


    return (
        <cartContext.Provider value={store}>
            {children}
        </cartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(cartContext)
    const {
        cart,
        add,
        setCart,
        payment,
        setPayment
    } = context

    return {
        cart,
        add,
        setCart,
        payment,
        setPayment
    }
}