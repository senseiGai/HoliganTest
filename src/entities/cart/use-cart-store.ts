import { create } from 'zustand'

export interface CartItem {
    id: string
    title: string
    weight: string
    price: number
    image: any
    quantity: number
}

interface CartState {
    items: CartItem[]
    addItem: (item: Omit<CartItem, 'id' | 'quantity'>) => void
    removeItem: (id: string) => void
    incrementQuantity: (id: string) => void
    decrementQuantity: (id: string) => void
    getTotal: () => number
    clearCart: () => void
}

export const useCartStore = create<CartState>((set, get) => ({
    items: [],
    addItem: (item) => {
        const items = get().items
        const existingItem = items.find(i => i.title === item.title)
        
        if (existingItem) {
            set({
                items: items.map(i => 
                    i.title === item.title 
                        ? { ...i, quantity: i.quantity + 1 }
                        : i
                )
            })
        } else {
            set({
                items: [...items, { ...item, id: Date.now().toString(), quantity: 1 }]
            })
        }
    },
    removeItem: (id) => {
        set({
            items: get().items.filter(item => item.id !== id)
        })
    },
    incrementQuantity: (id) => {
        set({
            items: get().items.map(item =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        })
    },
    decrementQuantity: (id) => {
        const item = get().items.find(item => item.id === id)
        if (item && item.quantity === 1) {
            get().removeItem(id)
        } else {
            set({
                items: get().items.map(item =>
                    item.id === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
            })
        }
    },
    getTotal: () => {
        return get().items.reduce((total, item) => total + (item.price * item.quantity), 0)
    },
    clearCart: () => {
        set({ items: [] })
    }
}))
