[h1], "+.active -.hidden +#temp +[data-foo=bar +{`hello world`"

const handleAdd = (element, command) => {
    // command = +.active -> .active
    const attr = command.subStr(1)
    const isClassname = attr.charAt(0) === '.';

    const attrToAdd = attr.subStr(1);
    if (isClassname) {
        element.classList.add(attrToAdd);
    } else {
        element.setAttribute('id', attrToAdd)
    }
};
const handleRemove = () => null;

const handleX = () => null;

const handleY = () => null;
     Player Ads Subs Found
Web  3
And  4
IOS  X
QA
Des
PM


// + - ~ X Y ...
// . # [ {


const types = {
    '+': handleAdd,
    '-': handleRemove,
};

const handleClassName = (element, instruction, value) => {
    if (instruction === '+') {
        element.classList.add(value)
    }
    // ...
};

const handleID = (element, instruction, value) => {
    if (instruction === '+') {
       element.setAttribute('id', value)
    }
    // ...
};

const groupedByBehavior = {
    '.': handleClassName,
    '#': handleID,
}

// +.active
// 1. + // instruction
// 2. '.' // type
// 3. 'active' // value



const process = (listOfNodes, commandString) => {
    const commandsAsList = commandString.split(' ');

    listOfNodes.forEach(element => {
        commandsAsList.forEach(command => {
            // +.active = +
            // const commandHandler = types[command.charAt(0)];
            // commandHandler(element, command)

            const instruction = command.charAt(0);
            const type = command.charAt(1);
            const value = command.subStr(2);

            groupedByBehavior[type](element, instruction, value)
        })
    });
}