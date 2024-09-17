export interface Issue {
    id: string;
    title: string;
    description: string;
}

export type CreateIssueDto = Omit<Issue, 'id'>;