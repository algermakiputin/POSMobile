import { createContext } from "react";
import { Order } from "@/app/types/order";

const defaultValue = {
    order: {
        cart: {
            lineItems: [{
                itemId: '',
                name: '',
                price: '',
                quantity: 0
            }],
            total: ''
        },
        customerName: '',
        customerId: ''
    },
    quantityHandler: (action: string, item: any) => 0,
    orderTotal: 0
}

type Context = {
    order: Order,
    quantityHandler: (action: string, item: any) => void,
    orderTotal: number
}

const OrderContext = createContext<Context>(defaultValue);

export default OrderContext;
