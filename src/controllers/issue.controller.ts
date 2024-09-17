import {BaseController} from './base.controller';

import e from 'express';
import {BadRequestError, NotFoundError} from "../errors/custom.errors";
import {CreateIssueDto, Issue} from "../models/issue.model";
import {IssueService} from "../services/issue.service";

export class IssueController extends BaseController<Issue> {
    private service: IssueService;

    constructor(private srv: IssueService) {
        super();
        this.service = srv;
    }

    async create(req: e.Request, res: e.Response): Promise<void> {
        const issueData = req.body as unknown as CreateIssueDto;

        // Basic validation
        if (!issueData.title) {
            throw new BadRequestError('Invalid issue data. Title must be a non-empty string.');
        }

        const issue = await this.service.create(issueData);
        res.status(201).json(issue);
    }

    async delete(req: e.Request, res: e.Response): Promise<void> {
        const success = await this.service.delete(req.params.id);
        if (success) {
            res.status(204).send();
        } else {
            throw new NotFoundError('Issue not found');
        }
    }

    async getAll(req: e.Request, res: e.Response): Promise<void> {
        const issues = await this.service.getAll();
        res.json(issues);
    }

    async getById(req: e.Request, res: e.Response): Promise<void> {
        const issue = await this.service.getById(req.params.id);
        if (issue) {
            res.json(issue);
        } else {
            throw new NotFoundError('Issue not found');
        }
    }

    async update(req: e.Request, res: e.Response): Promise<void> {
        const issue = await this.service.update(req.params.id, req.body);
        if (issue) {
            res.json(issue);
        } else {
            throw new NotFoundError('Issue not found');
        }
    }
}