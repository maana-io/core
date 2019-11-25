/// <reference path="./interfaces.d.ts" />

export function createAgent(blueprint?: EventReader<AgentObject>): Agent;
export function createEngine(opts?: EngineOptions): Engine;
export function createSystem(
  sys: EventReader<SystemObject>,
  opts?: SystemOptions
): EventReader<System>;
export function createPlayer(settings, agent?: Agent): any;
export const taskFunctions: { [index: string]: BuildHelper };
export function listMaps(): Promise<string[]>;
