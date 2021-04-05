onmessage = function(e) {
    console.log(e.data)
    let workerResult ='Результат: ' + (e.data[0] + e.data[1]);
    postMessage(workerResult) 
    
}