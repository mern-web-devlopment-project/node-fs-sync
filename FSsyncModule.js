const {readFileSync ,writeFileSync } = require('fs')
 exports.FSsync=()=>  {
     
    console.log('Start')

    const firstFile = readFileSync('./Files/sample.txt','utf-8')
    console.log(firstFile);

    writeFileSync('./Files/sample.txt','This is the first written file !')

    writeFileSync('./Files/sample1.txt',`Data from firstFile.txt : ${firstFile}`)

    console.log('End');
  }