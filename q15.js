var person = { role: "admin",
experience:7,
active: true,
department: "IT" };
var access= person.active?.experience>5?.department==="IT"? "Full IT Admin Access"
:person.active?.experience>5?.department!=="IT"?"Full General Admin Access"
:person.active?.experience<=5?.department!="IT"?"Limited Admin Access":"Admin Access Revoked";
console.log(access);
var person = { role: "manager",
experience: 4,
active: true,
department: "Marketing" };
var access= person.active?.experience>3?.department=="Sales"?"Full Sales Manager Access"
:person.active?.experience>3?.department!="Sales"?"Full Manager Access"
:person.active?.experience<=3?.department!="Sales"?"Limited Manager Access":"Manager Access Revoked";
console.log(access);
var person = { role: "user",
experience: 2,
active: true,
department: "Support" };
var access= person.active?.department=="Support"?"Priority Support Access"
:person.active?.department!="Support"?"User Access"
:"User Access Revoked";
console.log(access);
var person = { role: "admin",
experience: 3,
active: false,
department: "Finance" };
