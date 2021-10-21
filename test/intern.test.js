const Intern = require ("../lib/intern");

test ("can get school with const", () => {
    const testValue = "UCF";
    const e = new Intern("Walt", 3, "walt@disney.com", testValue);
    expect (e.school).toBe(testValue);
});

test ("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Walt", 3, "walt@disney.com", "UCF");
    expect(e.getRole()).toBe(testValue);
});