export interface AdventDay {
  type: "message" | "coupon" | "gift";
  dayImage: string;
  image?: string;
  message?: string;
  couponId?: string;
}

export interface Coupon {
  name: string;
  count: number;
}
