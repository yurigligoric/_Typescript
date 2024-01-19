var userData;
var trueData;
userData = 'now';
userData = 5;
if (typeof userData === "string") {
    trueData = userData;
}
function generateErrorCode(description, errorcode) {
    throw { message: description, code: errorcode };
}
function infiniteloop() {
    while (true) { }
}
generateErrorCode("Error Happened", 402);
infiniteloop();
