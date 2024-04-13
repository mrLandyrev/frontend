export interface WithPaginationResponse<T> {
    pageCount: number;
    items: T[];
}
