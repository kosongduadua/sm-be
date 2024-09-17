import {BaseRepository} from './base.repository';
import fs from 'fs/promises';
import path from 'path';
import {Issue} from "../models/issue.model";

export class IssueRepository extends BaseRepository<Issue> {
    private readonly filePath: string;

    constructor() {
        super();
        this.filePath = path.join(__dirname, '..', 'data', 'issues.json');
        this.initializeFile();
    }

    private async initializeFile(): Promise<void> {
        try {
            await fs.access(this.filePath);
        } catch (error) {
            await fs.writeFile(this.filePath, JSON.stringify([], null, 2));
        }
    }

    private async writeFile(issues: Issue[]): Promise<void> {
        await fs.writeFile(this.filePath, JSON.stringify(issues, null, 2));
    }

    private async readFile(): Promise<Issue[]> {
        const data = await fs.readFile(this.filePath, 'utf-8');
        return JSON.parse(data);
    }

    async create(item: Omit<Issue, 'id'>): Promise<Issue> {
        const issues = await this.readFile();
        const newIssue: Issue = {
            ...item,
            id: Date.now().toString(),
        };
        issues.push(newIssue);
        await this.writeFile(issues);
        return newIssue;
    }

    async delete(id: string): Promise<boolean> {
        const issues = await this.readFile();
        const initialLength = issues.length;
        const filteredIssues = issues.filter(issue => issue.id !== id);
        await this.writeFile(filteredIssues);
        return filteredIssues.length < initialLength;
    }

    async getAll(): Promise<Issue[]> {
        return this.readFile();
    }

    async getById(id: string): Promise<Issue | null> {
        const issues = await this.readFile();
        return issues.find(issue => issue.id === id) || null;
    }

    async update(id: string, item: Partial<Issue>): Promise<Issue | null> {
        const issues = await this.readFile();
        const index = issues.findIndex(issue => issue.id === id);
        if (index === -1) return null;

        issues[index] = {...issues[index], ...item};
        await this.writeFile(issues);
        return issues[index];
    }
}