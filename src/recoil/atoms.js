import { atom } from "recoil";


const sessionStorageEffect = (key) => ({ setSelf, onSet }) => {
  if (typeof window !== 'undefined' && sessionStorage) {
    const savedValue = sessionStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue) => {
      sessionStorage.setItem(key, JSON.stringify(newValue));
    });
  }
};

export const getUniqueKey = () => {
  const time = new Date().getTime();
  return time;
};


export const cartCountState = atom({
  key: `cartCount_${getUniqueKey()}`,
  default: 0,
  effects_UNSTABLE: [sessionStorageEffect('cartCount')],
});


export const headerClassAtom = atom({
  key: `header_${getUniqueKey()}`,
  default: "first",
});

export const loginIsOpen = atom({
  key: `r_${getUniqueKey()}`,
  default: false,
});

export const cartState = atom({
  key: `cart_${getUniqueKey()}`,
  default: {
    items: [],
    total: 0,
  },
});