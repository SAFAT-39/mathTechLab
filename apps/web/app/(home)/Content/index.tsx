import Section from "./Section";
import TitleSubtitle from "./TitleSubtitle";

const Content = () => {
  return (
    <>
      <TitleSubtitle />
      <Section
        title="Games"
        items={[
          {
            title: "24 Game",
            description: "Solve math puzzles by making 24 using four numbers.",
            link: "/games/24-game",
          },
        ]}
        seeMoreLink="/games"
      />

      <Section
        title="Math Learning"
        items={[
          {
            title: "Times Tables",
            description: "Master multiplication with interactive times tables.",
            link: "/times-tables",
          },
        ]}
        seeMoreLink="/times-tables"
      />
    </>
  );
};

export default Content;
