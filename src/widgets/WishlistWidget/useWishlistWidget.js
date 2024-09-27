import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useSWRConfig } from "swr";
import { ADD_WISHLIST, REMOVE_WISHLIST, WISHLIST } from "@/constants/apiRoutes";
import { fetcherWithToken } from "@/utils/fetcher";

export const useWishlistWidget = ({ data, isWishlist = false }) => {
  const session = useSession();
  const { mutate } = useSWRConfig();
  const isinWishlist = data?.user_wishlist;
  const authToken = session?.data?.accessToken;
  const [hasWishlist, setHasWishlist] = useState(isinWishlist);
  const handleWishlist = async (id) => {
    const data = await fetcherWithToken(
      `${hasWishlist || isWishlist ? REMOVE_WISHLIST : ADD_WISHLIST}/${id}`,
      { token: authToken }
    );
    if (hasWishlist && data?.status === true) {
      setHasWishlist(false);
    } else {
      setHasWishlist(true);
    }
    const wishlistKey = `${WISHLIST}`;
    await mutate(wishlistKey); // Refetch and update cache

    return data;
  };

  return {
    handleWishlist,
    hasWishlist,
  };
};
