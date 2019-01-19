
function User(_fullName,_gender,_studentID,_password)
{
    this.FullName = _fullName;
    this.Gender = _gender;
    this.StudentID = _studentID;
    this.Password = _password;

}
var loggedUser = new User();
var users = new Array();
users.push(new User("osama shawky","1","osamaallam","759461530"));
users.push(new User("Ahmed Essam","1","ahmedessam","123456789"));
users.push(new User("Omar Ayad","1","omarayad","987654321"));
users.push(new User("Mariam Mohamed","2","mariammohamed","123456789"));