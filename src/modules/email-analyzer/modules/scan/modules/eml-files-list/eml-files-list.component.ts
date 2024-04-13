import { DatePipe, JsonPipe, NgForOf, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TuiTableModule } from '@taiga-ui/addon-table';

import { JoinPipePipe } from '../../../../../shared/pipes/join.pipe.pipe';
import { EmlFile } from '../../../../../shared/types/eml-file.interface';
import {TuiScrollbarModule} from "@taiga-ui/core";
import {TuiLineClampModule} from "@taiga-ui/kit";

@Component({
    selector: 'app-eml-files-list',
    standalone: true,
    imports: [TuiTableModule, NgForOf, DatePipe, JoinPipePipe, NgIf, JsonPipe, TuiScrollbarModule, TuiLineClampModule],
    templateUrl: './eml-files-list.component.html',
    styleUrl: './eml-files-list.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmlFilesListComponent {
    readonly columns = [
        'fileName',
        'sendDate',
        'uploadDate',
        'to',
        'cc',
        'from',
        'subject',
    ];

    @Input()
    items: EmlFile[] | null = null;
}
