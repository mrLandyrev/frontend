import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AppPaths } from '../enums/app-paths.enum';
import {A} from "@angular/cdk/keycodes";

@Injectable()
export class NavigationService {
    private readonly router = inject(Router);

    toAuth(): void {
        void this.router.navigate(['/', AppPaths.AUTH, AppPaths.LOGIN]);
    }

    toUpload(): void {
        void this.router.navigate([
            '/',
            AppPaths.EMAIL_ANALYZER,
            AppPaths.UPLOAD,
        ]);
    }

    toScan(): void {
        this.router.navigate(['/', AppPaths.EMAIL_ANALYZER, AppPaths.SCAN]);
    }
}
