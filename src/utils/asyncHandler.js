const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}

export { asyncHandler } // use try and catch or this function


// const asyncHandler = () => {};
// const asyncHandler = (fn) => { () => { } }
// const asyncHandler = (fn) =>  () => { }  higher order function(called in javascript)
    
    
// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.status(err.code || 500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// }; // this is try catch method,const asyncHandler = () => { } ie 1st line commented for this code