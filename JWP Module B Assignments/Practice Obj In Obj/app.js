
let obj3 = {
    name: "amshal",
    course: {
        course_name: "WAM",
        timing: {
            time1: "6:30 - 9:30",
            time2: "12:30 - 3:30",
        },
    },
};
// console.log(obj3);

let obj4 = {...obj3, course: { ...obj3.course_name},  timing: {...obj3.time1, ...obj3.time2}}

obj4.course.course_name = "GD";

obj4.timing.time1 = "3:30 - 6:30";

obj4.timing.time2 = "9:30 - 12:30";

console.log(obj3, obj4);
