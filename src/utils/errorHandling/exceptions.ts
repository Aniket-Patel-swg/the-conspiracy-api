export interface IEError {
    message: string;
    statusCode: number;
    status: string;
}

export abstract class CustomError extends Error {
    abstract statusCode: number;
    abstract status: string;

    constructor(message: string) {
        super(message);
    }

    serializeErrors(): IEError {
        return {
            message: this.message,
            statusCode: this.statusCode,
            status: this.status,
        };
    }
}


export class BadRequestError extends CustomError {
    statusCode = 400;
    status = "Bad Request";
}
