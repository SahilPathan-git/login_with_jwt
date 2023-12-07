var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const jwt = require('jsonwebtoken');
var cors = require('cors')
var bodyParser = require('body-parser')


var registrationRouter = require('./routes/userRegistration')
var loginRouter = require('./routes/userLogin')
var getProductRouter = require('./routes/products')
var { SECRETE_KEY } = require('./config')

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// const verifyToken = (req, res, next) =>{
//   try {
//     let token = req.header('Authorization')

//     jwt.verify(token, SECRETE_KEY, (err, data) => {
//       if (err) {
//         res.send({
//           result: "Invalid Token"
//         })
//       } else {

//         req.data = data
//         console.log(data);
        
//         // res.json({
//         //   message: "Successfully  Verified",
//         //   result: data
//         // })
//       }
//     })

//   } catch (error) {
//     return res.status(403).json({ error: 'Failed to authenticate token.' });
//   }
// }
 

// app.use(function (req, res, next) {
     
//     try {
//       let token = req.header('Authorization')
  
//       jwt.verify(token,SECRETE_KEY,(err,data)=>{
//         if(err){
//           res.send({
//             result:"Invalid Token"
//           })
//         }else{
//          req.data = data
//          console.log(data);
         
//           // res.json({
//           //   message:"Successfully  Verified",
//           //   result: data
//           // })
//         }
//       })
     
    
//     } catch (error) {
//       return res.status(403).json({ error: 'Failed to authenticate token.' });
//     }
  
//   }) 




app.use('/registration', registrationRouter)
app.use('/login', loginRouter)
app.use('/products', getProductRouter)
  


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;



// if (true) {
  //   next()
  // } else {
    //   return res.status(401).send(error);
    // }
// console.log(req.headers)










// / const verifyToken =(req, res, next)=>{
  //   let token = req.header('Authorization')
  
  //   try {
    //     let token = req.header('Authorization')
//     const verified = jwt.verify(token, SECRETE_KEY);
//     if (verified) {
  //       return res.send("Successfully Verified");
//       next()
//     } else {
  
  //       return res.status(401).send(error);
  //     }  
  
  //   } catch (error) {
    //     return res.status(401).send(error); 
    //   }
    
    // })
    
    
    
// const verifyToken1 = (req, res, next) => {
  //   const token = req.header('Authorization');
  
//   if (!token) {
//     return res.status(401).json({ error: 'Access denied. No token provided.' });
//   }

//   jwt.verify(token, 'secretKey', (err, decoded) => {
//     if (err) {
//       return res.status(403).json({ error: 'Failed to authenticate token.' });
//     }

//     req.user = decoded.user;
//     next();
//   });
// };




// const verified = jwt.verify(token, SECRETE_KEY);
// if (verified) {
//   return res.send("Successfully  Verified");
//   next()
// }
  





