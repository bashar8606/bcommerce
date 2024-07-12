import { atom } from "recoil";

export const getUniqueKey = () => {
  const time = new Date().getTime();
  return time;
};

export const headerClassAtom = atom({
  key: `header_${getUniqueKey()}`,
  default: "first",
});

export const cartState = atom({
  key: `cart_${getUniqueKey()}`,
  default: {
    items: [],
    total: 0,
  },
});