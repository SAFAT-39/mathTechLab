import Content from "./Content";
import FactorChecker from "./FactorChecker";

export const metadata = {
  title: "Factor Checker",
  description:
    "Use free Factor Checker tool to find all factors and factor pairs of any number quickly and easily.",
};

const Page = () => {
  return (
    <>
      <FactorChecker />
      <Content />
    </>
  );
};

export default Page;
