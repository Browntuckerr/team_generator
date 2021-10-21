const Manager = require ("../lib/manager");
const Employee = require ("../lib/employee");

test ("set office number with const", () => {
    const testValue = 1016;
    const e = new Manager("Jimmy Neutron", 5, "J.N@test.com", 1016);
    expect(e.officeNumber).toBe(testValue);
});

test ("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager("Jimmy Neutron", 5, "J.N@test.com", 1016);
    expect(e.getRole()).toBe(testValue);
});