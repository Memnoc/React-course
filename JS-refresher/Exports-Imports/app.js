// default import - imports what marked as default in the export file
// you can choose the name
import person from './person'
// choosing name
import prs from './person'

// named import - imports specific elements in the export file
// you have to use the exact name
// you can use an alias
import { baseData } from "./utility.js";
import { clean } from "./utility.js";
// aliases
import {dataBase as baseData } from "./utility.js"

// import everything
import * as bundled from './utility.js'