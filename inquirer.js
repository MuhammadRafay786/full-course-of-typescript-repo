"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prompts_1 = require("@inquirer/prompts");
const answer = await (0, prompts_1.input)({ message: 'enter your name' });
const answer1 = await (0, prompts_1.input)({ message: 'enter your class' });
const answer2 = await (0, prompts_1.input)({ message: 'enter your age' });
const answer3 = await (0, prompts_1.input)({ message: 'enter your gender' });
// import {select} from '@inquirer/prompts'
// const answer=await select({message:['enter your name']})
// const answer1=await select({message:'enter your class'})
// const answer2=await select({message:'enter your age'})
// const answer3=await select({message:'enter your gender'})
