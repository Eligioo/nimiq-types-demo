const Nimiq = require("@nimiq/core")
const ct = require("@nimiq/core-types")

// I assume NodeJS is installed properly
// In this folder execute terminal command 'npm install' to install the necassary dependencies stated in package.json
// Head over to node_modules/@nimiq/core-types/Nimiq.d.ts
// The reason why Visual Studio Code can't find the types is because the types are declared as a namespace rather than a module in Nimiq.d.ts. Probably to work in webbrowsers.
// If you would change line 1 of node_modules/@nimiq/core-types/Nimiq.d.ts to 'declare module '@nimiq/core' {', the Nimiq object in this file suddenly has types.