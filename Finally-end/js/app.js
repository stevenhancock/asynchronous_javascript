"use strict";

asyncFunction2()
.then(msg => console.log(msg))
.catch(err => console.log(err))
.finally(() => console.log("Cleaning up tasks."));