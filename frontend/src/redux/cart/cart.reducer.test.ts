import { toggleCartHidden } from "./cart.actions";
import * as reducers from "./cart.reducer";

describe("cartReducers", () => {
  it("should return the initial state", () => {
    expect(reducers.toggleCart(false, { type: "UNKNOWN_TYPE" })).toEqual(false);
  });

  it("should set cart to visible", () => {
    expect(reducers.toggleCart(false, toggleCartHidden())).toEqual(true);
  });

  it("should set cart to hidden", () => {
    expect(reducers.toggleCart(true, toggleCartHidden())).toEqual(false);
  });
});
