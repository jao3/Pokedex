import {
  StatsContainer,
  StatsTitle,
  ProgressBar,
  ProgressBarFill,
  StatsList,
} from "./styles";

export interface PokemonProps {
  stats: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
  color: string;
}

const Stats: React.FC<PokemonProps> = ({ stats, color }) => {
  const statsContent: { title: string; field: keyof typeof stats }[] = [
    { title: "HP", field: "hp" },
    { title: "Attack", field: "attack" },
    { title: "Defense", field: "defense" },
    { title: "Sp.Atk", field: "specialAttack" },
    { title: "Sp.Def", field: "specialDefense" },
    { title: "Speed", field: "speed" },
  ];
  return (
    <StatsContainer>
      <StatsTitle>Stats</StatsTitle>
      {statsContent &&
        statsContent.map((stat) => (
          <StatsList key={stat.field}>
            <li>
              <span>{stat.title}</span>
              <span>{stats[stat.field] || 1}</span>
              <ProgressBar>
                <ProgressBarFill
                  percentage={stats[stat.field]}
                  color={color}
                ></ProgressBarFill>
              </ProgressBar>
            </li>
          </StatsList>
        ))}
    </StatsContainer>
  );
};

export default Stats;
