import { DirectoryState } from "../../models";

const INITIAL_STATE: DirectoryState = {
  sections: [
    {
      title: "Hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: "074b4c9e-cda4-527b-a224-e03bca32426b",
      linkUrl: "shop/hats",
    },
    {
      title: "Jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: "b1c0174c-026c-5cc4-9de9-9922aa0110ab",
      linkUrl: "shop/jackets",
    },
    {
      title: "Sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: "552e3422-43ea-52f8-b5d0-360c3818fa10",
      linkUrl: "shop/sneakers",
    },
    {
      title: "Womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
      id: "2efeded0-1780-59ba-98b9-b5d19e38a712",
      linkUrl: "shop/womens",
    },
    {
      title: "Mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      size: "large",
      id: "990f91a6-933d-5db1-84ed-5d2ddcb62c11",
      linkUrl: "shop/mens",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE) => {
  return state;
};

export default directoryReducer;
