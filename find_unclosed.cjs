const fs = require('fs');
const content = fs.readFileSync('src/pages/VehicleDetail.tsx', 'utf-8');

let parenDepth = 0;
let bracketDepth = 0;
let lineNum = 1;

for (let i = 0; i < content.length; i++) {
  const c = content[i];
  if (c === '\n') lineNum++;
  if (c === '(') parenDepth++;
  if (c === ')') parenDepth--;
  if (c === '{') bracketDepth++;
  if (c === '}') bracketDepth--;
}

console.log("Paren Depth:", parenDepth, "Bracket Depth:", bracketDepth);
