import { Routes } from '@angular/router';

import { AppPaths } from '../shared/enums/app-paths.enum';

export const routes: Routes = [
    {
        path: AppPaths.UPLOAD,
        loadComponent: async () =>
            import('./modules/file-uploader/file-uploader.component').then(
                (c) => c.FileUploaderComponent
            ),
    },
    {
        path: AppPaths.SCAN,
        loadComponent: async () =>
            import('./modules/scan/scan.component').then(
                (c) => c.ScanComponent
            ),
    },
    {
        path: AppPaths.EMPTY,
        pathMatch: 'full',
        redirectTo: AppPaths.UPLOAD,
    },
];
