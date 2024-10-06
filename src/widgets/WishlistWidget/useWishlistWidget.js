import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useSWRConfig } from "swr";
import { ADD_WISHLIST, REMOVE_WISHLIST, WISHLIST } from "@/constants/apiRoutes";
import { fetcherWithToken } from "@/utils/fetcher";
import { useLocale } from "next-intl";

export const useWishlistWidget = ({ data, isWishlist = false }) => {
  const session = useSession();
  const { mutate } = useSWRConfig();
  const isinWishlist = data?.user_wishlist;
  const authToken = session?.data?.accessToken;
  const [hasWishlist, setHasWishlist] = useState(isinWishlist);
  const locale = useLocale();

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
    const wishlistKey = `${WISHLIST}lang=${locale}`;
    await mutate(wishlistKey);
    return data;
  };

  return {
    handleWishlist,
    hasWishlist,
  };
};
