import { useCartWidget } from "./useCartWidget";


const CartWidget = () => {
  const { cart, isLoading, isError, addItem, removeItem } = useCartWidget();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading cart</div>;

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cart.items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ${cart.total}</p>
      <button onClick={() => addItem({ id: 'new-item', name: 'New Item', price: 10 })}>
        Add Item
      </button>
    </div>
  );
};

export default CartWidget;