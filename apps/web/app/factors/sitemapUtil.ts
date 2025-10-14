import numberList from "./[num]/numberList";

const getFactorsPages = () => {
  const values = [
    {
      url: "https://mathtechlab.com/factors",
      lastModified: "2025-10-14",
      priority: 0.7,
    },
  ];
  for (let i = 0; i < numberList.length; i++) {
    values.push({
      url: `https://mathtechlab.com/factors/factors-of-${numberList[i]}`,
      lastModified: "2025-10-14",
      priority: 0.7,
    });
  }
  return values;
};

export default getFactorsPages;
