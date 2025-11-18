var combineObj = {
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
var Colors;
(function (Colors) {
    Colors[Colors["red"] = 0] = "red";
    Colors[Colors["blue"] = 1] = "blue";
    Colors[Colors["green"] = 2] = "green";
    Colors[Colors["white"] = 3] = "white";
})(Colors || (Colors = {}));
console.log(Colors.green);
var Shades;
(function (Shades) {
    Shades[Shades["red"] = 101] = "red";
    Shades[Shades["blue"] = 102] = "blue";
    Shades[Shades["green"] = 103] = "green";
    Shades[Shades["white"] = 104] = "white";
})(Shades || (Shades = {}));
console.log(Shades.red);
var Categorize;
(function (Categorize) {
    Categorize["small"] = "sm";
    Categorize["medium"] = "md";
    Categorize["large"] = "lg";
    Categorize["extra large"] = "xl";
})(Categorize || (Categorize = {}));
console.log(Categorize["extra large"]);
console.log("lg" /* Sizes.large */);
