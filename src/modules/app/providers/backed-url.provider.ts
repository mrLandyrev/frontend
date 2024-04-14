import { InjectionToken } from '@angular/core';

export const BACKEND_URL = new InjectionToken<string>('BACKEND_URL');

export const provideBackedUrl = () => ({
    provide: BACKEND_URL,
    useValue: 'http://192.168.0.118:8080',
});
