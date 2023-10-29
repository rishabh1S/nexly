import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WishlistItem {
  id: number;
  name: string;
  slug: string;
  subtitle: string;
  attributes: {
    price: number;
    original_price: number;
    thumbnail: string;
    size: {
      data: {
        size: string;
        enabled: boolean;
      }[];
    };
  };
}

interface WishlistState {
  wishlistItems: WishlistItem[];
}

const initialState: WishlistState = {
  wishlistItems: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (
      state: WishlistState,
      action: PayloadAction<WishlistItem>
    ) => {
      const item = state.wishlistItems.find((p) => p.id === action.payload.id);
      if (!item) {
        state.wishlistItems.push(action.payload);
      }
    },
    removeFromWishlist: (
      state: WishlistState,
      action: PayloadAction<number>
    ) => {
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
