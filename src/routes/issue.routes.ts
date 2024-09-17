import {Router} from "express";
import {IssueController} from "../controllers/issue.controller";
import {IssueRepository} from "../repositories/issue.repository";
import {IssueService} from "../services/issue.service";

const router = Router();
const issueRepository = new IssueRepository();
const issueService = new IssueService(issueRepository);
const issueController = new IssueController(issueService);

router.post('/', issueController.create.bind(issueController));
router.get('/', issueController.getAll.bind(issueController));
router.get('/:id', issueController.getById.bind(issueController));
router.put('/:id', issueController.update.bind(issueController));
router.delete('/:id', issueController.delete.bind(issueController));

export default router;