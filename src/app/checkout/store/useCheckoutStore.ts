"use client";
import { createStore } from "@/store/createStore";

interface IUseCheckoutStore extends IUseCheckoutContent {
  actions: IUseCheckoutActions;
}

export type TPaymentMethod =
  | "receive"
  | "online"
  | "online-current"
  | "online-new";

export interface IOrder {
  firstName?: string;
  secondName?: string;
  phone?: string;
  recipientEmail?: string;
  delivery?: {
    city?: string;
    street?: string;
    house?: string;
    floor?: string;
    time?: string;
  };
  cakes?: { id: number; quantity: number }[];
  payment?: TPaymentMethod;
  card?: {
    cardNumber: string;
    expirationDate: string;
    cvv: string;
  };
  errors?: string;
}

interface IUseCheckoutContent {
  order: IOrder | null;
}

export interface IUseCheckoutActions {
  setOrder: (order: IOrder, isParent?: "delivery" | "card") => void;
}

const useCheckoutStore = createStore(
  (
    set: (actions: IUseCheckoutContent) => void,
    get: () => IUseCheckoutContent,
  ): IUseCheckoutStore => ({
    order: null,
    actions: {
      setOrder: (order, isParent) => {
        set({
          order: isParent
            ? {
                ...get().order,
                delivery: { ...get().order?.delivery, street: order },
              }
            : { ...get().order, ...order },
        });
      },
    },
  }),
  "order",
  true,
  "session",
);

export const selectCheckout = (): IOrder | null =>
  useCheckoutStore((state: IUseCheckoutStore) => state.order);

export const useSetCheckoutActions = (): IUseCheckoutActions =>
  useCheckoutStore((state: IUseCheckoutStore) => state.actions);
