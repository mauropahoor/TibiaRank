export interface Char {
  character: CharacterData;
  information: Information;
}

// 2. O objeto "character" principal
export interface CharacterData {
  accountBadges: AccountBadge[];
  accountInformation: AccountInformation;
  achievements: Achievement[];
  character: CharacterDetails;
  deaths: Death[];
  deathsTruncated: boolean;
  otherCharacters: OtherCharacter[];
}

// 3. O objeto "information"
export interface Information {
  api: ApiDetails;
  status: StatusDetails;
  tibiaUrls: string[];
  timestamp: string;
}

// --- Sub-interfaces de CharacterData ---

export interface AccountBadge {
  description: string;
  iconUrl: string;
  name: string;
}

export interface AccountInformation {
  created: string;
  loyaltyTitle: string;
  position: string | null; // Posição pode ser nula
}

export interface Achievement {
  grade: number;
  name: string;
  secret: boolean;
}

// 4. O objeto "character" aninhado (o mais importante)
export interface CharacterDetails {
  accountStatus: string;
  achievementPoints: number;
  comment: string | null; // Pode ser nulo
  deletionDate: string | null; // Pode ser nulo
  formerNames: string[];
  formerWorlds: string[];
  guild: Guild | null; // Pode ser nulo
  houses: House[];
  lastLogin: string | null; // Pode ser nulo
  level: number;
  marriedTo: string | null; // Pode ser nulo
  name: string;
  position: string | null; // Pode ser nulo
  residence: string;
  sex: string;
  title: string | null; // Pode ser nulo
  traded: boolean;
  unlockedTitles: number;
  vocation: string;
  world: string;
}

export interface Guild {
  name: string;
  rank: string;
}

export interface House {
  houseid: number;
  name: string;
  paid: string;
  town: string;
}

export interface Death {
  assists: Participant[];
  killers: Participant[];
  level: number;
  reason: string;
  time: string;
}

// Killer e Assist têm a mesma estrutura
export interface Participant {
  name: string;
  player: boolean;
  summon: string;
  traded: boolean;
}

export interface OtherCharacter {
  deleted: boolean;
  main: boolean;
  name: string;
  position: string | null; // Pode ser nulo
  status: string;
  traded: boolean;
  world: string;
}

// --- Sub-interfaces de Information ---

export interface ApiDetails {
  commit: string;
  release: string;
  version: number;
}

export interface StatusDetails {
  error: number;
  httpCode: number;
  message: string;
}