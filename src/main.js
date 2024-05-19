#!/usr/bin/env node

"use strict";

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

clear();

const prompt = inquirer.createPromptModule();

const questions = [
  {
    type: "list",
    name: "action",
    message: "What you want to do?",
    choices: [
      {
        name: `Send me an ${chalk.green.bold("email")}?`,
        value: () => {
          open("mailto:mohammedsahal3301@gmail.com");
          console.log("\nDone, see you soon.\n");
        }
      },
      {
        name: "Just quit.",
        value: () => {
          console.log("Ok, bye.\n");
        }
      }
    ]
  }
];

const data = {
  name: chalk.bold.green("        Mohammed Sahal"),
  handle: chalk.white("@4ephyr"),
  work: `${chalk.white("Freelancer at")} ${chalk
    .hex("#341f7c")
    .bold("My Home.")}`,
  blog: chalk.gray("https://medium.com/") + chalk.whiteBright("@4ephyr"),
  twitter: chalk.gray("https://twitter.com/") + chalk.cyan("4ephyr"),
  npm: chalk.gray("https://npmjs.com/") + chalk.red("~4ephyr"),
  github: chalk.gray("https://github.com/") + chalk.green("4ephyr"),
  linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("mohammedsahalpa"),
  npx: chalk.red("npx") + " " + chalk.white("4ephyr"),

  labelWork: chalk.white.bold("       Work:"),
  labelBlog: chalk.white.bold("     Medium:"),
  labelTwitter: chalk.white.bold("    Twitter:"),
  labelnpm: chalk.white.bold("        npm:"),
  labelGitHub: chalk.white.bold("     GitHub:"),
  labelLinkedIn: chalk.white.bold("   LinkedIn:"),
  labelCard: chalk.white.bold("       Card:"),
};

const me = boxen(
  [
    `${data.name} / ${data.handle}`,
    ``,
    `${data.labelWork}  ${data.work}`,
    `${data.labelBlog}  ${data.blog}`,
    `${data.labelTwitter}  ${data.twitter}`,
    `${data.labelnpm}  ${data.npm}`,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelLinkedIn}  ${data.linkedin}`,
    ``,
    `${data.labelCard}  ${data.npx}`,
    ``,
    `${chalk.italic(
      "I'm a curiosity driven as i said before dumb kid."
    )}`
  ].join("\n"),
  {
    margin: 1,
    float: 'center',
    padding: 1,
    borderStyle: "single",
    borderColor: "green"
  }
);

console.log(me);
const tip = [
  `Tip: Try ${chalk.cyanBright.bold(
    "cmd/ctrl + click"
  )} on the links above`,
  '',
].join("\n");
console.log(tip);


prompt(questions).then(answer => answer.action());