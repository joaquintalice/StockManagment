import { HttpException, HttpStatus } from '@nestjs/common';

export class WarehouseMustBeCreatedFirstException extends HttpException {
    constructor() {
        super(`Entity 'warehouse' must be created first.`, HttpStatus.UNPROCESSABLE_ENTITY);
    }
}
