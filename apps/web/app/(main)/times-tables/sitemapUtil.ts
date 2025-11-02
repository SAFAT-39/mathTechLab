const getTimesTablesPages = () => {
  const values = [
    {
      url: "https://mathtechlab.com/times-tables",
      lastModified: "2025-10-14",
      priority: 0.8,
    },
  ];
  for (let i = 1; i <= 12; i++) {
    values.push({
      url: `https://mathtechlab.com/times-tables/${i}-times-table`,
      lastModified: "2025-10-14",
      priority: 0.8,
    });
  }
  return values;
};

export default getTimesTablesPages;
