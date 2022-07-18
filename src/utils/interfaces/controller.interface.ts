import { Router } from 'express';

interface Controller {
    path: string;
    route: Router;
}

export default Controller;
