onmessage = function(e) {
    let workerResult ='Результат: ' + (e.data[0] * e.data[1]);
    console.log(workerResult)
    postMessage(workerResult) 
    
}