const isValidRequest = (body) =>{
      if (body &&  Object.keys(body).length > 0 && Object.getPrototypeOf(body) === Object.prototype) {
        return true
      } 
      return false;
}
module.exports = {
    isValidRequest
}