var Access;
(function (Access) {
    Access[Access["Admin"] = 0] = "Admin";
    Access[Access["Moderator"] = 1] = "Moderator";
    Access[Access["User"] = 2] = "User";
})(Access || (Access = {}));
var student = {
    name: 'Juan',
    age: 129,
    interest: ["basketball", "pingpong"],
    access: Access.Admin
};
console.log(student.access);
