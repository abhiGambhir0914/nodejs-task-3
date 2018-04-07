const express = require('express');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 5050;


app.use('/',(req,res)=>{

  fs.readFile('development.log','utf8',(err,data)=>{
    // console.log(data);
    var stringVal = data;
    var countShow = (stringVal.match(/SprintsController#show as JSONAPI/g) || []).length;
    var countIndex = (stringVal.match(/SprintsController#index as JSONAPI/g) || []).length;
    console.log(countShow);
    console.log(countIndex);

    res.send(
      `<p>SprintsController => show action ran ${countShow} times</p> <p>SprintsController => index action ran ${countIndex} times</p>`
    );

  })

})






app.listen(port, () => console.log(`Server set up at ${port}`));
