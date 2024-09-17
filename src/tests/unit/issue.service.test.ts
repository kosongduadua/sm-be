import { IssueService } from '../../services/issue.service';
import { IssueRepository } from '../../repositories/issue.repository';
import { Issue } from '../../models/issue.model';

jest.mock('../../repositories/issue.repository');

describe('IssueService', () => {
    let issueService: IssueService;
    let mockRepository: jest.Mocked<IssueRepository>;

    beforeEach(() => {
        mockRepository = new IssueRepository() as jest.Mocked<IssueRepository>;
        issueService = new IssueService(mockRepository);
    });

    describe('create', () => {
        it('should create a new issue', async () => {
            const issueData = { title: 'Test Issue', description: 'Test Description' };
            const expectedIssue: Issue = { id: '1', ...issueData };
            mockRepository.create.mockResolvedValue(expectedIssue);

            const result = await issueService.create(issueData);

            expect(result).toEqual(expectedIssue);
            expect(mockRepository.create).toHaveBeenCalledWith(issueData);
        });
    });

    describe('getAll', () => {
        it('should return all issues', async () => {
            const expectedIssues: Issue[] = [
                { id: '1', title: 'Issue 1', description: 'Test Description 1' },
                { id: '2', title: 'Issue 2', description: 'Test Description 2' },
            ];
            mockRepository.getAll.mockResolvedValue(expectedIssues);

            const result = await issueService.getAll();

            expect(result).toEqual(expectedIssues);
            expect(mockRepository.getAll).toHaveBeenCalled();
        });
    });
});