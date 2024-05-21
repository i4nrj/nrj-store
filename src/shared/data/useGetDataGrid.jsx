export const useGetDataGrid = () => {
  const dataGrid = [
    {
      id: 1,
      title: "Realistic flowers",
      name: "Night light (purple)",
      price: 20.22,
      width: "220",
      height: "500",
      img: "/src/shared/images/night_light1.jpg",
    },
    {
      id: 2,
      title: "Dinisaurus",
      name: "Night light (RGB)",
      price: 12.33,
      width: "220",
      height: "500",
      img: "/src/shared/images/night_light2.jpg",
    },
    {
      id: 3,
      title: "Star ship",
      name: "Night light (blue)",
      price: 23.45,
      width: "220",
      height: "500",
      img: "./src/shared/images/night_light3.jpg",
    },
    {
      id: 4,
      title: "Flowers",
      name: "Night light (RGB)",
      price: 5.43,
      width: "220",
      height: "500",
      img: "/src/shared/images/night_light4.jpg",
    },
    {
      id: 5,
      title: "The Earth",
      name: "Night light (RGB)",
      price: 15.1,
      width: "220",
      height: "500",
      img: "/src/shared/images/night_light5.jpg",
    },
    {
      id: 6,
      title: "Psyduck",
      name: "Night light (RGB)",
      price: 13.5,
      width: "220",
      height: "500",
      img: "/src/shared/images/night_light6.jpg",
    },
    {
      id: 7,
      title: "Flamingo",
      name: "Night light (purple)",
      price: 10,
      width: "220",
      height: "500",
      img: "/src/shared/images/night_light7.jpg",
    },
    {
      id: 8,
      title: "Winter mountains",
      name: "Night light (blue)",
      price: 18.10,
      width: "220",
      height: "500",
      img: "/src/shared/images/night_light8.jpg",
    },
  ];

  return dataGrid;
};

export const useGetUserInfo = () => {
  const userData = {
    userName: 'i4.nrj',
    login: 'example@example.com',
    password: 'qwerty',
    favorites: [1],
    cart: [],
  };
  return userData;
}
