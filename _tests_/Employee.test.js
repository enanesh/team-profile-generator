const Employee = require('../lib/Employee');
const testEmployee = new Employee('Maria','001', 'maria@thiscompany.com');


test('testing constructor values', () => {
    expect(testEmployee.getName()).toBe('Maria');
    expect(testEmployee.getId()).toBe('001');
    expect(testEmployee.getEmail()).toBe("maria@thiscompany.com");
    expect(testEmployee.getRole()).toBe("Employee");

});

