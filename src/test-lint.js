// Test file with ESLint violations
var unused = "this variable is never used";

// Missing semicolon
const test = "missing semicolon"

// Inconsistent spacing
function  badSpacing(  ){
    return true;
}

// Unused function
const unusedFunction = () => {
    console.log('This is never called');
};

// Mixed quotes
const mixedQuotes = "double quotes" + 'single quotes';

export default badSpacing; 