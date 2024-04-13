import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, shareReplay, switchMap } from 'rxjs';

import { BACKEND_URL } from '../../../../app/providers/backed-url.provider';
import { EmlFile } from '../../../../shared/types/eml-file.interface';
import { WithPaginationResponse } from '../../../../shared/types/response/with-pagination-response.interface';
import { ListEmlFilesRequest } from '../types/list-eml-files-request.interface';

@Injectable({ providedIn: 'root' })
export class ScanService {
    private readonly httpClient = inject(HttpClient);
    private readonly backendUrl = inject(BACKEND_URL);

    private readonly emlFilesParamsSubject$ =
        new BehaviorSubject<ListEmlFilesRequest>({
            sortBy: 'uploadDate',
            sortDirection: 'asc',
            page: 0,
            perPage: 20,
        });

    private readonly emlFilesListResponse$ = this.emlFilesParamsSubject$.pipe(
        switchMap((params) => this.getEmlFilesList$(params)),
        shareReplay(1)
    );

    emlFiles$ = this.emlFilesListResponse$.pipe(
        map((response) => response.items)
    );

    private getEmlFilesList$(request: ListEmlFilesRequest) {
        return this.httpClient.get<WithPaginationResponse<EmlFile>>(
            `${this.backendUrl}/email/list`,
            {
                params: new HttpParams({
                    fromObject: request as any,
                }),
                observe: 'body',
            }
        );
    }
}
