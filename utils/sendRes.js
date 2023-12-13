module.exports = sendRes = (res, status, success, message) => {
  return res.status(status).send({
    success: success,
    message: message,
  });
};

module.exports = sendRes = (res, status, success, message, data) => {
  return res.status(status).send({
    success: success,
    message: message,
    data,
  });
};
