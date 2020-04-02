import * as express from "express"
import {ExampleService} from "../services/ExampleService";
import {ExampleController} from "./ExampleController";

const router = express.Router();

/* GET users listing. */
const exampleService = new ExampleService();
const exampleController = new ExampleController(exampleService);

router.get('/', (req, res) => exampleController.getSomethingFromDB(req, res));

module.exports = router;
