const { CustomeAPIError } = require("../errors/custom-error");

const errorHandlerMiddleware = (err, req, res, next) => {
  //   return res.status(500).json({ Message: err });
  if (err instanceof CustomeAPIError) {
    return res.status(err.statusCode).json({ Message: err.message });
  }
  return res
    .status(500)
    .json({ Message: "Something went wrong, please try again" });
};

module.exports = errorHandlerMiddleware;
