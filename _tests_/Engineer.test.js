const Engineer = require('../lib/Engineer');
const testEngineer = new Engineer('Gerardo', '002', 'Gerardo@thiscompany.com', 'Gerardo002');


test('testing constructor values and methods', () => {
    expect(testEngineer.getName()).toBe('Gerardo');
    expect(testEngineer.getId()).toBe('002');
    expect(testEngineer.getEmail()).toBe('Gerardo@thiscompany.com');
    expect(testEngineer.getGithub()).toBe('Gerardo002');
    expect(testEngineer.getRole()).toBe("Engineer");

});