import chalk from "chalk";
import figlet from "figlet";
import boxen from "boxen";
/* console.log(chalk.keyword("orange")("Yay for orange colored text!"));
console.log(chalk.rgb(123, 45, 67).underline("Underlined reddish color"));
console.log(chalk.hex("#DEADED").bold("Bold gray!")); */
const error = chalk.bold.red;

// console.log(error("Error!"));
/* console.log(
    chalk.yellow(figlet.textSync("Find Your Path", { horizontalLayout: "full" }))
    ); */
// console.log(chalk.red("Hello world!"));
const greeting = chalk.white.bold("Hello!");

const boxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
  borderColor: "green",
  //  backgroundColor: "#555555",
};
const msgBox = boxen(greeting, boxenOptions);

// console.log(msgBox);

/* .then((answer) => {
        console.log("Hello", answer.first_name, answer.last_name);
    }); */

export const orange = chalk.keyword("orange");
export const blue = chalk.keyword("blue");
export const cyan = chalk.keyword("cyan");
export const yellow = chalk.keyword("yellow");
export const fire = chalk.bold.redBright;
export const red = chalk.keyword("red");
export const green = chalk.keyword("green");
