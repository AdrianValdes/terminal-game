import clear from "clear";
import {
  prepareDiceRollToFightMonster,
  resolveAfterXSeconds,
  fakeLoading,
} from "./helperFunctions.mjs";
import { askMonster, dragon } from "./monsters.mjs";
import { orange, blue, cyan } from "./terminalColors.mjs";
import { askMove } from "./fightFunctions.mjs";

clear();

async function createFight() {
  let monsterDecided = await askMonster();
  let numberRolled = await prepareDiceRollToFightMonster(dragon);
  return { numberRolled, monsterDecided };
}
let { numberRolled, monsterDecided } = await createFight();

async function fight({ numberRolled, monsterDecided }) {
  if (numberRolled < 10) {
    console.log(
      orange(
        `${numberRolled} was too small. The ${monsterDecided} is faster than you and attacks first`
      )
    );
  } else {
    console.log(
      cyan(`${numberRolled} is big enough! You are going to attack first!`)
    );
  }
  await fakeLoading(2);
  let decision = await askMove();
}
fight({ numberRolled, monsterDecided });
