class Person{
  Constructor(fname, lname, age){
	this.fname = fname;
	this.lname = lname;
	this.age = age;

}
method(){
	console.log(`Hello my name is ${this.fname} ${this.lname} and my age is ${this.age} it's nice to meet you`);
}

}

const  greet = new Person("firstname", "Lastname", "age");
