
function  FeatureToggle(featureName, isEnabled, userGroupAccess){
    this.featureName = featureName;
    this.isEnabled = isEnabled;
    this.userGroupAccess =  userGroupAccess;
     

}
FeatureToggle.prototype.canAccess = function(userRole){
    if(this.isEnabled && this.userGroupAccess.includes(userRole))
{
    return true
}else{
    return false
}};

// FeatureToggle.prototype.toggleFeature = function (flag){

// }

const newFeature = new FeatureToggle('Dark Mode', false, ['betaTesters', 'admins']);
console.log(newFeature.canAccess('betaTester')); // false (feature disabled)
newFeature.toggleFeature(true);
console.log(newFeature.canAccess('betaTester')); // true






// // 2.
// function TimeLog(freelancerName, projectDetails,logs){
//     this.freelancerName = freelancerName;
//     this.projectDetails = projectDetails;
//     this.logs = logs;

// }
// TimeLog.prototype.totalEarings = function (){
//     total = this.projectDetails.hourlyRate * this.logs.hoursWorked
// };
// TimeLog.prototype.filterByDateRange = function (startDate,endDate){
//     date = this.logs.filter(log =>{
//         let date = new Date (log.date);
//         return date >= new Date(startDate) && date <= new Date(endDate);

//     });
// };

// TimeLog.prototype.checkWeeklyHours = function(weekLogs) {
//     const totalHours = weekLogs.reduce((sum, log) => sum + log.hoursWorked, 0);
//     if (totalHours > 40) {
//       return "Overtime!";
//     } else {
//       return "Within limits.";
//     }
//   };

  
// //   3.
// function Order(customer, items, status) {
//     this.customer = customer; 
//     this.items = items; 
//     this.status = status;
//   }

//  Order.prototype.getTotalCost = function(){
//     return this.items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
//  } 
//  Order.prototype.upDateOrderStatus = function(paymentdone){
//     if(paymentdone){
//         return this.status = "paid";
//     }else{
//         return this.status = "payment pending";
//     }

//  };

//  Order.prototype.categorizeUrgency = function() {
//     switch (this.status) {
//       case "Paid":
//         return "Prepare for shipping.";
//         break;
//       case "Pending":
//         return "Awaiting payment.";
//         break;
//       default:
//         return "Order status unclear.";
//     }
//   };

// //  4. 
//  class Employee{
//     constructor (id,name,performanceMetrics,feedback){
//     this.id = id;
//     this.name = name;
//     this.performanceMetrics = performanceMetrics;
//     this.feedback= feedback;
//  }

// }
// Employee.prototype.average = function(){

// }
// Employee.prototype.performance = function (){

// }

//  5.
class Course{
    constructor(title,instructor,students,){
        this.title = title;
        this.instructor = instructor;
        this.students = students;
    }
};

Course.prototype.studentsCompleted = function(){
    return this.students.filter(s => s.completionStatus === true).map(s => s.name)

}

Course.prototype.enrolledStudents = function(expertiseArea){
    return this.students.filter(student => this.instructor.expertise === expertiseArea).length;


}

Course.prototype.instructorMessage = function(){
    const count = this.students.length;
    if (count >= 5) {
      console.log(`Hello ${this.instructor.name}, you have many students`);
    } else {
      console.log(`Hello ${this.instructor.name}, you have less students`);
    }
  };

const instructor = { name: 'Jane', expertise: 'Software Engineering' };
const students = [
  { name: 'Mercy', completionStatus: true },
  { name: 'Mwikali', completionStatus: false },
  { name: 'Vivian', completionStatus: true }
];
const course = new Course('Javascript', instructor, students);
console.log(course.studentsCompleted());
console.log(course.enrolledStudents("Software Engineering")); 
course.instructorMessage(); 




  
  
  

