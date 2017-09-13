const path = require('path');

module.exports = Object.assign(
    {},
    {
        "rootDir": path.join(__dirname, '../../'),
        "moduleFileExtensions": ["ts", "tsx", "js"],
        "transform": {
            "^.+\\.(ts|tsx)$": "ts-jest/preprocessor"
        }
    }
);