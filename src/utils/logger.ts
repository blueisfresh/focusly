// src/utils/logger.ts
const logs: string[] = [];

export const log = (message: string) => {
  logs.push(message);
  console.log(message);
};

export const getLogs = () => logs;
