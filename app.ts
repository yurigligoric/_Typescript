let userData: unknown;
let trueData: string;

userData = 'now'
userData = 5

if(typeof userData === "string"){
  trueData = userData
}

function generateErrorCode(description: string, errorcode: number) : never {
  throw {message: description, code: errorcode}

}

function infiniteloop(): never {
  while(true){}
}

generateErrorCode("Error Happened", 402)
infiniteloop();