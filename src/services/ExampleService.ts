export class ExampleService {

    constructor() {
        console.log(1)
    }

    public async getDBCall(): Promise<number> {
        // @ts-ignore
        return new Promise((resolve) => {
            resolve(1)
        })
    }
}