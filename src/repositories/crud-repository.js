const { StatusCodes } = require("http-status-codes");
const { Logger } = require("../config");
const AppError = require("../utils/app-error");

class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        const response = await this.model.create(data);
        return response;
    }

    async destroy(data) {
        const response = await this.model.destroy({
            where: {
                id: data,
            },
        });
        if (!response) {
            throw new AppError(
                "Not able to find the resources",
                StatusCodes.NOT_FOUND
            );
        }
        return response;
    }

    async get(data) {
        const response = await this.model.findByPk(data);
        console.log("RESPONSE :: ", response);
        if (!response) {
            throw new AppError(
                "Not able to find the resources",
                StatusCodes.NOT_FOUND
            );
        }

        return response;
    }

    async update(id, data) {
        const response = await this.model.update(data, {
            where: {
                id: id,
            },
        });
        return response;
    }

    async getAll() {
        const response = await this.model.findAll();
        return response;
    }
}

module.exports = CrudRepository;
