import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useSession } from "next-auth/react";
import { ADD_CART, ADD_WISHLIST, REMOVE_WISHLIST, WISHLIST } from "@/constants/apiRoutes";
import axios from "axios";
import { apiFetcher } from "@/utils/fetcher";
import { fetcherWithToken } from "@/utils/fetcher";

export const useWishlistWidget = ({data, isWishlist, mutate}) => {
  const session = useSession();
  const isinWishlist = data?.user_wishlist;
  const authToken = session?.data?.accessToken;
  const { toast } = useToast();
  // const { data, error } = useSWR('/api/cart', fetcher);
  const [hasWishlist, setHasWishlist] = useState(isinWishlist);

  const handleWishlist = async (id) => {
    console.log(isinWishlist, id, "isWishlist");
    const data = await fetcherWithToken(
      `${process.env.NEXT_PUBLIC_BASE_URL}${
        (hasWishlist||isWishlist) ? REMOVE_WISHLIST : ADD_WISHLIST
      }/${id}`,
      { token: authToken }
    );
    if (hasWishlist && data?.status === true) {
      setHasWishlist(false);
     
            toast({
          title: "Cart rem",
          variant: "destructive",
          description: "Friday, February 10, 2023 at 5:57 PM",
        })
    } else {
      setHasWishlist(true);
    
            toast({
          title: "Cart item not removed",
          variant: "success",
          description: "Friday, February 10, 2023 at 5:57 PM",
        })
    }
    console.log('Cache before mutate:', mutate.get(`${WISHLIST}`)); // Get cached data

await mutate(`${WISHLIST}`); // Refetch and update cache

console.log('Cache after mutate:', mutate.get(`${WISHLIST}`)); 
    mutate(`${WISHLIST}`);
    return data;
  };

  // const handleWishlist = async (id) => {
  //   try {
  //     if(authToken){
  //       console.log(authToken,"authTokenauthTokenauthToken");
  //       const res = await addToWishlist(id, authToken);

  //       console.log(res,"added to wish");
  //       toast({
  //         title: "Cart item not removed",
  //         variant: "destructive",
  //         description: "Friday, February 10, 2023 at 5:57 PM",
  //       })
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   // Sync cart from localStorage for guest users
  //   if (!isAuthenticated) {
  //     const savedCart = localStorage.getItem('cart');
  //     if (savedCart) {
  //       setCart(JSON.parse(savedCart));
  //     }
  //   }
  // }, [isAuthenticated, setCart]);

  return {
    handleWishlist,
    hasWishlist,
  };
};
