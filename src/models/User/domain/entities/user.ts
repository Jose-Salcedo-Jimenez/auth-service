export class User {
  id?: number;
  name: string;
  lastName: string;
  age: number;
  email: string;
  phone: string;
  gender: string;
  password: string;

  constructor(id: number, name: string, lastName:string, age:number, email: string, phone:string, gender:string, password: string) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.phone = phone;
    this.gender = gender
    this.password = password;
  }
}
