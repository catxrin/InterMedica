export const errorMiddleware = (error, req, res, next)=>{
  const status = error.status ||500
  const error_message = error.message ||"Internal Server Error"

  res.status(status).json({message:error_message})
}
