//as a custom util
function errorHandler(err, req, res, next) {
    if (err instanceof ValidationError) {
        return res.status(422).json({
            errors: err.errors.map((error) => {
                return {
                    field: error.path,
                    message: error.message,
                };
            }),
        });
    }

    if (err instanceof APIError) {
        return res.status(err.statusCode).json({ error: err.message });
    } else {
        console.error(err.stack);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

//custom error hanler util
class APIError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

module.exports = { errorHandler, APIError }