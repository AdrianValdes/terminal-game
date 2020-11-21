import inquirer from "inquirer";
import { fire } from "./terminalColors.mjs";
export class Dragon {
  constructor({ type, name, race }) {
    this.type = type;
    this.name = name;
    this.race = race;
    this.hp = 600;
    this.damage = 35;
    this.armor = 300;
    this.attackType = "fire";
    this.armorType = "scales";
  }

  presentation = () => fire("It belows a roar and fire engulfs the stadium...");
}
export async function askMonster() {
  let result = await inquirer.prompt([
    {
      name: "monster",
      type: "list",
      message: `Are you brave enough to fight a monster? Against which monster would you like to fight`,
      choices: ["Dragon", "Grunt", "Werewolf"],
    },
  ]);

  return result.monster;
}
export const dragon = new Dragon({
  type: "Dragon",
  name: "Smaug",
  race: "demon",
});
