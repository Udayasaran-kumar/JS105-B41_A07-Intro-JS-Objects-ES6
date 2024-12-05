var user={
  name:"kumar",
  role :"admin",
  status:true
} 
var msg = user.role=="admin"?.status==true? "Admin Access Granted": "Admin Access Revoked";
console.log(msg);
var user={
  name:"raj",
  role:"applicant",
  status:true
}
var msg = user.role=="applicant"?.status==true? "Admin Access Granted": "Admin Access Revoked";
console.log(msg);
var user={
  name:"mari",
  role:"compounder",
  status:false
}
var msg = user.role!="admin"||user.role!="applicant"?.status==true? "Admin Access Granted": "Admin Access Revoked";
console.log(msg);
