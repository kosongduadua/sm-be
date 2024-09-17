import { Request, Response } from 'express';

export abstract class BaseController<T> {
    abstract create(req: Request, res: Response): Promise<void>;

    abstract getAll(req: Request, res: Response): Promise<void>;

    abstract getById(req: Request, res: Response): Promise<void>;

    abstract update(req: Request, res: Response): Promise<void>;

    abstract delete(req: Request, res: Response): Promise<void>;
}