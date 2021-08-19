var tags4day = ""
function myDate() {

    var a = new Date();
    var r = a.getDay();
    return r
}
if (myDate() == 0) {
    tags4day = "#DeathOnSunday"
}
else if (myDate() == 1) {
    tags4day = "#DeathOnMonday"
}
else if (myDate() == 2) {
    tags4day = "#DeathOnTuesday"
} else if (myDate() == 3) {
    tags4day = "#DeathOnWednesday"
}
else if (myDate() == 4) {
    tags4day = "#DeathOnThursday"
}
else if (myDate() == 5) {
    tags4day = "#DeathOnFriday"
}
else {
    tags4day = "#DeathOnSaturday"
}
module.exports = tags4day