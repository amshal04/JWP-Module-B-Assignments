// interface
interface School {
    school_name: string;
    school_location: string;
}


interface Student extends School {
    std_name: string;
    std_age: string | number;
    std_city: string;
    isEnroll: boolean;
    isSubject: string[];
    isStatus?: boolean;
}


let combineObj: Student = {
  std_name: "amshal",
  std_age: 22,
  std_city: "Karachi",
  isEnroll: false,
  isSubject: ["HTML", "CSS", "JS"],
  school_name: "ABC Public School",
  school_location: "Lahore",
};
// console.log(combineObj);
console.log(combineObj.std_name);


//enum 

enum Colors {
  "red",
  "blue",
  "green",
  "white",
}
console.log(Colors.green);


enum Shades {
  "red" = 101,
  "blue",
  "green",
  "white",
}
console.log(Shades.red);


enum Categorize {
    "small" = "sm",
    "medium" = "md",
    "large" = "lg",
    "extra large" = "xl",
}
console.log(Categorize["extra large"])

const enum Sizes {
  "small" = "sm",
  "medium" = "md",
  "large" = "lg",
  "extra large" = "xl",
}

console.log(Sizes.large);




 