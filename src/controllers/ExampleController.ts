import {ExampleService} from "../services/ExampleService";
import {Request, Response} from "express"

export class ExampleController {

    // public exampleService: ExampleService;

    constructor(public exampleService: ExampleService) {
        // this.exampleService = exampleService;
    }

    public async getSomethingFromDB (req: Request, res: Response) {

        try {
            const data = await this.testWrapper();
            res.status(200).json(data)
        } catch (e) {
            console.log(e);
            res.status(500).json({
                "error": e.message
            })
        }
    };

    public async testWrapper () {
        return this.exampleService.getDBCall();
    }
}