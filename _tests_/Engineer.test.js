const Engineer = require('../lib/Engineer');
const testEngineer = new Engineer('Jorge', '002', 'Jorge@thiscompany.com', 'Jorge002');


test('testing constructor values and methods', () => {
    expect(testEngineer.getName()).toBe('Jorge');
    expect(testEngineer.getId()).toBe('002');
    expect(testEngineer.getEmail()).toBe('Jorge@thiscompany.com');
    expect(testEngineer.getGithub()).toBe('Jorge002');
    expect(testEngineer.getRole()).toBe("Engineer");

});