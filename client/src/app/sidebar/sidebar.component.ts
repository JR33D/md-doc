import { Component, Inject } from '@angular/core';
import { ContentService, CONTENT_LOCATION, IContentLocation } from '../content.service';
import { map } from 'rxjs-compat/operator/map';
import { analyzeFileForInjectables } from '@angular/compiler';

@Component({
   selector: 'app-sidebar',
   templateUrl: './sidebar.component.html',
})
export class SideBarComponent {
   public files: any = [];

   constructor(
      @Inject(CONTENT_LOCATION) private content: IContentLocation,
      private contentService: ContentService,
   ) {
      this.contentService.getListOfFiles(this.content.path).subscribe((files: string[]) => {
         files.forEach((file) => {
            const fileObj: any = {};
            file = file.replace(/\\/g, '/');
            fileObj.path = file.replace('client/src/', '');
            fileObj.title = this.capitalizeFirstLetter(
               fileObj.path.replace('.md', '').replace(this.content.path, ''),
            );
            this.files.push(fileObj);
         });
      });
   }

   private capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
   }
}
