//common class for handling errors

class ErrorResponse extends Error {

    constructor(errorMessage, statusCode){
        
        super(errorMessage);
        this.statusCode = statusCode;
    }
}

module.exports = ErrorResponse;