const Intern = require('../lib/Intern')

const testIntern = new Intern('Priscila', "003", "priscila@thiscompany.com", 'UW');

test('Intern constructor and getName(),getId(),getEmail(),getSchool(),getRole() methods', () => {
    expect(testIntern.getName()).toBe("Priscila"),
    expect(testIntern.getId()).toBe('003');
    expect(testIntern.getEmail()).toBe("priscila@thiscompany.com");
    expect(testIntern.getSchool()).toBe('UW');
    expect(testIntern.getRole()).toBe("Intern");


})