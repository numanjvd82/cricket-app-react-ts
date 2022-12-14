type statusType = 'completed' | 'in-progress' | 'upcoming';

export type Match = {
  id: number;
  name: string;
  date: string;
  time: string;
  venue: string;
  team1: string;
  team2: string;
  tossWinner: string;
  tossDecision: string;
  target: number;
  matchType: string;
  winner: string;
  team1Wickets: number;
  team1Runs: number;
  team1Overs: string;
  team2Wickets: number;
  team2Runs: number;
  team2Overs: string;
  manOfTheMatch: string;
  result: string;
  status: statusType;
  team1Image?: string;
  team2Image?: string;
};

export const allMatches: Match[] = [
  {
    id: 1,
    name: 'England vs Australia',
    date: '2022-10-14',
    time: '2:00',
    venue: 'Melbourne',
    team1: 'England',
    team2: 'Australia',
    tossWinner: 'England',
    tossDecision: 'bat',
    target: 150,
    matchType: 'ODI',
    winner: 'Australia',
    team1Wickets: 10,
    team1Runs: 150,
    team1Overs: '50',
    team2Wickets: 9,
    team2Runs: 151,
    team2Overs: '30.5',
    manOfTheMatch: 'Steve Smith',
    result: 'Australia won by 1 wickets',
    status: 'completed',
    team1Image:
      'https://i.bleacherreport.net/images/team_logos/328x328/england_cricket.png?canvas=492,328',
    team2Image:
      'https://i.bleacherreport.net/images/team_logos/328x328/australia_cricket.png?canvas=492,328',
  },
  {
    id: 2,
    name: 'India vs New Zealand',
    date: '2022-24-06',
    time: '6:00',
    venue: 'Melbourne',
    team1: 'India',
    team2: 'New Zealand',
    tossWinner: 'India',
    tossDecision: 'bat',
    target: 220,
    matchType: 'ODI',
    winner: 'New Zealand',
    team1Wickets: 10,
    team1Runs: 220,
    team1Overs: '50',
    team2Wickets: 5,
    team2Runs: 221,
    team2Overs: '40.4',
    manOfTheMatch: 'Kane Williamson',
    result: 'New Zealand won by 5 wickets',
    status: 'completed',
    team1Image:
      'https://i.bleacherreport.net/images/team_logos/328x328/india_cricket.png?canvas=492,328',
    team2Image:
      'https://i.bleacherreport.net/images/team_logos/328x328/new_zealand_cricket.png?canvas=492,328',
  },
  {
    id: 3,
    name: 'India vs Pakistan',
    date: '2022-15-04',
    time: '6:00',
    venue: 'Dubai',
    team1: 'India',
    team2: 'Pakistan',
    tossWinner: 'India',
    tossDecision: 'bat',
    target: 220,
    matchType: 'ODI',
    winner: 'Pakistan',
    team1Wickets: 10,
    team1Runs: 220,
    team1Overs: '50',
    team2Wickets: 5,
    team2Runs: 221,
    team2Overs: '30',
    manOfTheMatch: 'Mohammad Amir',
    result: 'Pakistan won by 5 wickets',
    status: 'completed',
    team1Image:
      'https://i.bleacherreport.net/images/team_logos/328x328/india_cricket.png?canvas=492,328',
    team2Image:
      'https://i.bleacherreport.net/images/team_logos/328x328/pakistan_cricket.png?canvas=492,328',
  },
  {
    id: 4,
    name: 'South Africa vs Australia',
    date: '2022-10-08',
    time: '10:00',
    venue: 'West Indies',
    team1: 'South Africa',
    team2: 'Australia',
    tossWinner: 'South Africa',
    tossDecision: 'bowl',
    target: 178,
    matchType: 'ODI',
    winner: 'Australia',
    team1Wickets: 10,
    team1Runs: 178,
    team1Overs: '50',
    team2Wickets: 2,
    team2Runs: 45,
    team2Overs: '15.4',
    manOfTheMatch: '',
    result: '',
    status: 'in-progress',
    team1Image:
      'https://i.bleacherreport.net/images/team_logos/328x328/south_africa_cricket.png?canvas=492,328',
    team2Image:
      'https://i.bleacherreport.net/images/team_logos/328x328/australia_cricket.png?canvas=492,328',
  },
];
