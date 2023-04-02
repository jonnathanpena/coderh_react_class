import { createContext, useState } from "react";

export const cartContext = createContext({ cart: [] });
const CartContextProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	
	const addItem = (item) => setCart([...cart, item]);
	const removeItem = (itemId) => setCart(cart.filter(({ id }) => id !== itemId));
	const getPriceInCart = () => cart.reduce(
		(accumulator, currentItem) => accumulator + currentItem.price, 0
	);
	const isItemInCart = (itemId) => !!cart.find(({ id }) => id === itemId);
	const clearCart = () => setCart([]);

	return (
		<cartContext.Provider value={{
			cart,
			addItem,
			removeItem,
			getPriceInCart,
			isItemInCart,
			clearCart,
		}}>
			{children}
		</cartContext.Provider>
	);
};

export default CartContextProvider;
