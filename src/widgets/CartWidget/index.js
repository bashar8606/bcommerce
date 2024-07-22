"use client"
import CartItem from "@/components/CartItem";
import { useCartWidget } from "./useCartWidget";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import PaymetnIcons from "@/components/PaymentIcons";


const CartWidget = () => {
  const { cart, isLoading, isError, addItem, removeItem } = useCartWidget();

  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>Error loading cart</div>;

  return (
    <section className="">
      <div className="container">
        <Breadcrumb className="mb-5">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>My Cart</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-9 ">
            <div>
              <h2 className="text-black text-xl font-semibold">Your Cart</h2>
            </div>
            <CartItem  />
            <CartItem />
            <CartItem  />


            {/* {cart.items.map((item) => (
              <CartItem key={item.id} />
            ))} */}
          </div>
          <div className="col-span-12 lg:col-span-4 lg:px-5">
            sfd
            {/* <p>Total: ${cart.total}</p>
            <button onClick={() => addItem({ id: 'new-item', name: 'New Item', price: 10 })}>
              Add Item
            </button> */}
            <PaymetnIcons />
          </div>
        </div>
      </div>
    </section >

  );
};

export default CartWidget;