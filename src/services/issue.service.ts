import {BaseService} from './base.service';
import {Issue} from "../models/issue.model";
import {IssueRepository} from "../repositories/issue.repository";


export class IssueService extends BaseService<Issue> {
    private repository: IssueRepository;

    constructor(private repo: IssueRepository) {
        super();
        this.repository = repo;
    }

    async create(item: Omit<Issue, 'id'>): Promise<Issue> {
        return this.repository.create(item);
    }

    async delete(id: string): Promise<boolean> {
        return this.repository.delete(id);
    }

    async getAll(): Promise<Issue[]> {
        return this.repository.getAll();
    }

    async getById(id: string): Promise<Issue | null> {
        return this.repository.getById(id);
    }

    async update(id: string, item: Partial<Issue>): Promise<Issue | null> {
        return this.repository.update(id, item);
    }
}