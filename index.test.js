const fs = require('fs');
const path = require('path');

test('HTML file contains "Hola Mundo"', () => {
    const filePath = path.resolve(__dirname, 'index.html');
    const content = fs.readFileSync(filePath, 'utf-8');
    expect(content).toMatch(/Hola Mundo/);
});
