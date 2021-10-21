const Engineer = require ("../lib/engineer");

test ("set github account with const", () =>{
    const testValue = "GitHubUser";
    const e = new Engineer("Donald Duck", 2, "D.Duck@disney.com", "GitHubUser");
    expect(e.github).toBe(testValue);
});

test ("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Donald Duck", 2, "D.Duck@disney.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
});