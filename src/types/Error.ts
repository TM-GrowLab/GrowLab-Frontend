export interface Error {
    timestamp: Date;
    status: number;
    error: string;
    exception: string;
    message: string;
    path: string;
    correlationId: string;
    body: {
        validationErrorsJs: Array<ValidationError>;
    };
}

export interface ValidationError {
    name: string;
    errors: Array<FieldError>;
}

export interface FieldError {
    key: string;
    errorMessageNl: string;
    errorMessageEn: string;
    errorMessage: string;
}

export interface Mapping {
    formName: string;
    mappingName?: string;
}