export abstract class BaseService<T> {
    abstract create(item: Omit<T, 'id'>): Promise<T>;

    abstract getAll(): Promise<T[]>;

    abstract getById(id: string): Promise<T | null>;

    abstract update(id: string, item: Partial<T>): Promise<T | null>;

    abstract delete(id: string): Promise<boolean>;
}