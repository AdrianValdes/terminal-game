import inquirer from "inquirer";
import clear from "clear";
const USER = {};
class Character {
  constructor({ first_name, last_name, weapon, race, gender, charClass }) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.weapon = weapon;
    this.race = race;
    this.gender = gender;
    this.charClass = charClass;
    this.ville = this.first_name
      .split("")
      .reverse()
      .join("")
      .toLowerCase()
      .concat("ville");
  }
}
export async function askName() {
  let answer = await inquirer.prompt([
    {
      name: "first_name",
      type: "input",
      message: "What is your first name?",
    },
    {
      name: "last_name",
      type: "input",
      message: "What is your last name?",
    },
  ]);
  USER.first_name = answer.first_name;
  USER.last_name = answer.last_name;
  return { first_name: answer.first_name, last_name: answer.last_name };
}
export async function askWeapon() {
  let result = await inquirer.prompt([
    {
      name: "weapon",
      type: "list",
      message: `Hi ${USER.first_name} ${USER.last_name} Choose your weapon:`,
      choices: ["Axe", "Mace", "Bow", "Sword", "Cross-Bow", "Spear"],
    },
  ]);
  USER.weapon = result.weapon;
  return result.weapon;
}
export async function askRace() {
  let result = await inquirer.prompt([
    {
      name: "race",
      type: "list",
      message: `Which race are you going to be, ${USER.first_name} ${USER.last_name}?:`,
      choices: ["Ogre", "Human", "Demon", "Undead", "Dwarf", "Orc"],
    },
  ]);
  USER.race = result.race;
  return result.race;
}
export async function askClass() {
  let result = await inquirer.prompt([
    {
      name: "charClass",
      type: "list",
      message: `And which class are you going to choose to defeat your enemies (well, to try)?:`,
      choices: [
        "Assasin",
        "Paladin",
        "Fighter",
        "Mage",
        "Amazon",
        "Necromancer",
      ],
    },
  ]);
  USER.charClass = result.charClass;
  return result.charClass;
}
export async function askGender() {
  let result = await inquirer.prompt([
    {
      name: "gender",
      type: "list",
      message: `Do you have a gender, ${USER.last_name}?:`,
      choices: ["Non-binary", "Female", "Male", "Unknown", "Prefer-not-to-say"],
    },
  ]);
  USER.gender = result.gender;
  return result.gender;
}
export async function buildCharacter() {
  let { first_name, last_name } = await askName();
  let weapon = await askWeapon();
  let race = await askRace();
  let charClass = await askClass();
  let gender = await askGender();
  return new Character({
    first_name,
    last_name,
    weapon,
    race,
    charClass,
    gender,
  });
}
clear();
export const character = await buildCharacter();
