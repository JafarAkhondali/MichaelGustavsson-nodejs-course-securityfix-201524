export const MINE_RATE = 1000;
export const INITIAL_BALANCE = 1000;
export const REWARD_ADDRESS = { address: 'reward-address' };
export const MINING_REWARD = 50;
const INITIAL_DIFFICULTY = 3;

export const GENESIS_DATA = {
  timestamp: 1,
  // timestamp: Date.now(),
  lastHash: '0',
  hash: '0',
  difficulty: INITIAL_DIFFICULTY,
  nonce: 0,
  data: [],
};
