import { input, select } from '@inquirer/prompts';
const answer=await input({message:'enter your name'})
const answer1=await input({message:'enter your class'})
const answer2=await input({message:'enter your age'})
const answer3=await input({message:'enter your gender'})
// import {select} from '@inquirer/prompts'
// const answer=await select({message:['enter your name']})
// const answer1=await select({message:'enter your class'})
// const answer2=await select({message:'enter your age'})
// const answer3=await select({message:'enter your gender'})