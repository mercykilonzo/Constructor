
function FeatureToggle(featureName, isEnabled, userGroupAccess) {
    this.featureName = featureName;
    this.isEnabled = isEnabled;
    this.userGroupAccess = userGroupAccess;


}
FeatureToggle.prototype.canAccess = function (userRole) {
    if (this.isEnabled) return true;

    switch (userRole) {
        case 'admin':
            return true;
        case 'betaTester':
            return this.userGroupAccess.includes('betaTesters');
        case 'regularUser':
            return this.userGroupAccess.includes('allUsers');
        default:
            return false;
    }
};


FeatureToggle.prototype.toggleFeature = function (flag) {
    console.log(this.isEnabled = flag);

}

const newFeature = new FeatureToggle('Dark Mode', false, ['betaTesters', 'admins']);
console.log(newFeature.canAccess('allusers'));
newFeature.toggleFeature(false);
console.log(newFeature.canAccess('betaTester'));






// 2.
function TimeLog(freelancerName, projectDetails,logs){
    this.freelancerName = freelancerName;
    this.projectDetails = projectDetails;
    this.logs = logs;

}
TimeLog.prototype.totalEarnings = function (){
    sum = this.logs.reduce((sum,cur) => sum + cur.hoursWorked, 0) *this.projectDetails.hourlyRate
    return sum
};
TimeLog.prototype.filterByDateRange = function (startDate, endDate){
    return this.logs.filter(log => log.date >= startDate && log.date <= endDate);
 };

TimeLog.prototype.checkWeeklyHours = function(weekLogs) {
    if (totalHours > 40) {
      return "Overtime!";
    } else {
      return "Within limits.";
    }
  };

const logs = {'2024-04-01':4, "2024-04-02":8, "2024-04-02":5}
const timeLog = new TimeLog("Joy",{name: "web_Development",hourlyRate: 100},[{date:'2024-04-01', hoursWorked:4}, {date:"2024-04-02", hoursWorked:8}, {date:"2024-04-02", hoursWorked:5}])
console.log(timeLog.totalEarnings());
console.log(timeLog.filterByDateRange("2024-03-29","2024-05-05"));




//   3.
function Order(customer, items, status) {
    this.customer = customer;
    this.items = items;
    this.status = status;
}

Order.prototype.getTotalCost = function () {
    return this.items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
}
Order.prototype.upDateOrderStatus = function (payment) {
    if (payment == "done") {
        return this.status = "paid";
    } else {
        return this.status = "payment pending";
    }

};

Order.prototype.categorizeUrgency = function () {
    switch (this.status) {
        case "Paid":
            console.log("Prepare for shipping.");
            break;
        case "Pending":
            console.log("Awaiting payment.");
            break;
        default:
            console.log("Order status not defined.");
            break
    }
};
const order = new Order({ name: "Jude", email: "Jude@gmail.com" }, [{ product: "Milk", quantity: 5, unitPrice: 70 }, { product: "Bread", quantity: 2, unitPrice: 50 }], "paid")
console.log(order.getTotalCost());
console.log(order.upDateOrderStatus("done"));
order.categorizeUrgency();



//  4. 
class Employee {
    constructor(id, name, performanceMetrics, feedback) {
        this.id = id;
        this.name = name;
        this.performanceMetrics = performanceMetrics;
        this.feedback = feedback;
    }

}
Employee.prototype.average = function () {
    const score = Object.values(this.performanceMetrics);
    sum = score.reduce((prev, cur) => prev + cur, 0)
    return average = sum / score.length

}
Employee.prototype.performance = function () {
    if (this.average() == 10) {
        return "Exceeding expectations"

    } else if (this.average() < 10 && this.average() > 5) {
        return "Meeting expectations"
    } else {
        return "Below expectations"
    }


}
Employee.prototype.addFeedback = function () {
    if (this.performance() == "Exceeding expectations") {
        return "Excellent"

    } else if (this.performance() == "Meeting expectations") {
        return "Good job"
    } else {
        return "Put more effort"
    }

}
const employee = new Employee(20, "John", { communication: 6, efficiency: 10, reliability: 7, }, ["The service was nice", "I enjoyed using the app"])
console.log(employee.average());
console.log(employee.performance());
console.log(employee.addFeedback());

//  5.
class Course {
    constructor(title, instructor, students,) {
        this.title = title;
        this.instructor = instructor;
        this.students = students;
    }
};

Course.prototype.studentsCompleted = function () {
    return this.students.filter(s => s.completionStatus === true)

}

Course.prototype.enrolledStudents = function (expertiseArea) {
    return this.students.filter(student => this.instructor.expertise === expertiseArea).length;


}

Course.prototype.instructorMessage = function () {
    const count = this.students.length;
    if (count >= 5) {
        console.log(`Hello ${this.instructor.name}, you have many students`);
    } else {
        console.log(`Hello ${this.instructor.name}, you have less students`);
    }
};

const instructor = { name: 'Jane', expertise: 'Software Engineering' };
const course = new Course('Javascript', instructor,[{ name: 'Mercy', completionStatus: true },{ name: 'Mwikali', completionStatus: false },{ name: 'Vivian', completionStatus: true }]);
console.log(course.studentsCompleted());
console.log(course.enrolledStudents("Software Engineering"));
course.instructorMessage();








