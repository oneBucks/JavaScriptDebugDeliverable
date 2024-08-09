// These two functions are broken in some way...
// What went wrong? What needs to be fixed?
// How do we know if it's fixed or not?
// Hint: using a console.log may be useful...

export function employeeInfoToString(employee) {
    
    let full_name = generateFullName(employee.first_name, employee.middle_name, employee.last_name);   // here I noticed the argument #3 was wrong so I fixed it
    return `${full_name}\nDepartment: ${employee.department} | Salary: ${employee.salary}`;    // here I noticed we missing "\n" so I fixed it
    
}

function generateFullName(first_name, middle_name, last_name) {

    return `${first_name}${middle_name != null && middle_name !== "" ? " " + middle_name + " " : " " }${last_name}`;     //here I added  && middle_name !== "" to expresion to check if middle_name is not just null but also not empty string
}