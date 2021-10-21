const Employee = require ("../lib/employee");

test("Able to set a name using a const function", () => {
    const name = "Mickey Mouse";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test ("Set id using const argument", () =>{
    const id ="1";
    const employee = new Employee("Mickey Mouse", id, "mickey.mouse@disney.com");
    expect(employee.id).toBe(id);
});

test ("getRole should return Employees", () =>{
    const role = "Employee";
    const employee = new Employee("Mickey Mouse", 1, "mickey.mouse@disney.com");
    expect (employee.getRole()).toBe(role);
});