type graphData = {
  team1: number;
  team2: number;
  over: number;
};

export type graph = {
  title: string;
  id: number;
  data: graphData[];
};

export const matchesGraphData: graph[] = [
  {
    id: 1,
    title: 'England vs Australia',
    data: [
      {
        team1: 10,
        team2: 4,
        over: 1,
      },
      {
        team1: 5,
        team2: 30,
        over: 2,
      },
      {
        team1: 25,
        team2: 24,
        over: 3,
      },
    ],
  },
  {
    id: 2,
    title: 'India vs New Zealand',
    data: [
      {
        team1: 15,
        team2: 5,
        over: 1,
      },
      {
        team1: 25,
        team2: 10,
        over: 2,
      },
      {
        team1: 35,
        team2: 15,
        over: 3,
      },
      {
        team1: 35,
        team2: 15,
        over: 4,
      },
      {
        team1: 25,
        team2: 10,
        over: 5,
      },
      {
        team1: 25,
        team2: 10,
        over: 6,
      },
    ],
  },
  {
    id: 3,
    title: 'South Africa vs Pakistan',
    data: [
      {
        team1: 20,
        team2: 8,
        over: 1,
      },
      {
        team1: 40,
        team2: 16,
        over: 2,
      },
      {
        team1: 60,
        team2: 24,
        over: 3,
      },
    ],
  },
  {
    id: 4,
    title: 'West Indies vs Sri Lanka',
    data: [
      {
        team1: 25,
        team2: 10,
        over: 1,
      },
      {
        team1: 50,
        team2: 20,
        over: 2,
      },
      {
        team1: 75,
        team2: 30,
        over: 3,
      },
    ],
  },
];
