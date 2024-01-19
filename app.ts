enum Access {Admin, Moderator, User}

const student: 
{ name: string;
  age: number;
  gender?: string;  
  interest: string[] 
  access: Access;
} = {
    name : 'Juan', 
    age: 129,
    interest: ["basketball", "pingpong"], 
    access: Access.Admin
}

console.log(student.access)
