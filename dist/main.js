#!/usr/bin/env node
"use strict";

var boxen = require("boxen");
var chalk = require("chalk");
var inquirer = require("inquirer");
var clear = require("clear");
var open = require("open");
clear();
var prompt = inquirer.createPromptModule();
var questions = [{
  type: "list",
  name: "action",
  message: "What you want to do?",
  choices: [{
    name: "Send me an ".concat(chalk.green.bold("email"), "?"),
    value: function value() {
      open("mailto:mohammedsahal3301@gmail.com");
      console.log("\nDone, see you soon.\n");
    }
  }, {
    name: "Just quit.",
    value: function value() {
      console.log("Ok, bye.\n");
    }
  }]
}];
var data = {
  name: chalk.bold.green("        Mohammed Sahal"),
  handle: chalk.white("@4ephyr"),
  work: "".concat(chalk.white("Freelancer at"), " ").concat(chalk.hex("#341f7c").bold("My Home.")),
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
  labelCard: chalk.white.bold("       Card:")
};
var me = boxen(["".concat(data.name, " / ").concat(data.handle), "", "".concat(data.labelWork, "  ").concat(data.work), "".concat(data.labelBlog, "  ").concat(data.blog), "".concat(data.labelTwitter, "  ").concat(data.twitter), "".concat(data.labelnpm, "  ").concat(data.npm), "".concat(data.labelGitHub, "  ").concat(data.github), "".concat(data.labelLinkedIn, "  ").concat(data.linkedin), "", "".concat(data.labelCard, "  ").concat(data.npx), "", "".concat(chalk.italic("I'm a curiosity driven as i said before dumb kid."))].join("\n"), {
  margin: 1,
  "float": 'center',
  padding: 1,
  borderStyle: "single",
  borderColor: "green"
});
console.log(me);
var tip = ["Tip: Try ".concat(chalk.cyanBright.bold("cmd/ctrl + click"), " on the links above"), ''].join("\n");
console.log(tip);
prompt(questions).then(function (answer) {
  return answer.action();
});