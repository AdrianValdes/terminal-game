import inquirer from "inquirer";
import { cyan, yellow, orange, blue, red, green } from "./terminalColors.mjs";
import { character } from "./buildCharacter.mjs";

export const getDiceNumber = (diceFaces) =>
  Math.floor(Math.random() * diceFaces + 1);

export function resolveAfterXSeconds(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}
export async function rollingDice() {
  let number = getDiceNumber(20);
  let n = 0;
  console.log(`Rolling...`);
  while (n < 6) {
    await resolveAfterXSeconds(300);
    process.stdout.write(`${getDiceNumber(20)}`);
    await resolveAfterXSeconds(300);
    process.stdout.cursorTo(0);
    process.stdout.clearLine();
    n++;
  }

  numberRolledChecker(number);

  return number;
}
export async function askToRoll() {
  let answer = await inquirer.prompt([
    {
      name: "roll_dice",
      type: "confirm",
      message: `Do you want to fight?`,
    },
  ]);

  return answer.roll_dice;
}
export async function prepareDiceRollToFightMonster(monster) {
  console.clear();
  console.log(
    orange(
      `Mighty ${character.first_name} from ${character.ville}, you are going to fight the ${monster.type}. Get ready!`
    )
  );
  await fakeLoading(3);
  console.clear();
  console.log(
    blue(
      `You enter the stadium, a crowd erupts into cheer as the door unlocks revealing a huge ${
        monster.type
      }... ${monster.presentation()} \n`
    )
  );

  let answerDice = await askToRoll();
  while (!answerDice) {
    console.log("well, that is kinda the point of the game");
    answerDice = await askToRoll();
  }
  console.log("You roll the dice!");
  let numberRolled = rollingDice();
  return numberRolled;
}
export function numberRolledChecker(number) {
  switch (true) {
    case number < 5:
      console.log(red(`You rolled just a ${number}. Bad luck`));
      break;
    case number < 10:
      console.log(
        orange(`You rolled just a ${number}. Next time will be better, maybe.`)
      );
      break;
    case number < 15:
      console.log(
        blue(`You rolled a ${number}! Maybe it is enough... Let's see`)
      );
      break;
    case number < 18:
      console.log(cyan(`Great, you rolled  a ${number}!`));
      break;
    case number <= 20:
      console.log(green(`WOW, you rolled a ${number}! Bulls eye!`));
      break;
    default:
      break;
  }
}

export async function fakeLoading(time) {
  let n = 0;
  if (time === 0) return;
  while (n < 3) {
    await resolveAfterXSeconds(200);
    process.stdout.write(".");
    await resolveAfterXSeconds(200);
    n++;
  }
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  return fakeLoading(time - 1);
}
