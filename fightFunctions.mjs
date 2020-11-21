import inquirer from "inquirer";
export async function askMove() {
  let result = await inquirer.prompt([
    {
      name: "move",
      type: "list",
      message: `Where would you like to aim to?:`,
      choices: ["Head", "Heart", "Legs", "Wings", "Tail"],
    },
  ]);

  return result.move;
}
