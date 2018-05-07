import { Injectable, InjectionToken, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MarkdownService, MarkedOptions } from 'ngx-markdown';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators/map';

export interface IContentLocation {
   /**
    * This is the path to the Markdown content folder location; point it to root.
    * Defaults to `./assets/content/`
    */
   path: string;
}

export const CONTENT_LOCATION = new InjectionToken<IContentLocation>('ContentLocation');

@Injectable()
export class ContentService {
   constructor(
      @Inject(CONTENT_LOCATION) private contentPath: IContentLocation,
      private markdownService: MarkdownService,
      private httpClient: HttpClient,
   ) {}

   public processMarkdownContent(fileContent: string) {
      return this.markdownService.compile(fileContent);
   }

   public getMarkdownFileContent(fileName: string) {
      const filePathLocation = this.contentPath.path + fileName;
      return this.httpClient.get('./' + filePathLocation, { responseType: 'text' });
   }

   public getListOfFiles(dir: string) {
      return this.httpClient.get<string[]>(environment.baseUrl + '/byPath?path=' + dir);
   }
}
