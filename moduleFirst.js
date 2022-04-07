/* const simple2 =require("./moduleSecond.mjs") //simple2 is just variable u can give any and call

simple2() */

import simple from "./moduleSecond.mjs"

import {simple2 as sim} from "./moduleSecond.mjs"

import simple23 from "./moduleSecond.mjs"

import * as a2 from "./moduleSecond.mjs"

simple()

sim();

simple23();
console.log(a2)
console.log(a2.simple2())