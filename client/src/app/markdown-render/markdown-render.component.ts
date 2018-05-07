import { Component, Optional, Inject, Input, OnInit } from '@angular/core';
import { ContentService } from '../content.service';

@Component({
   selector: 'app-md-render',
   templateUrl: './markdown-render.component.html',
})
export class MarkdownRenderComponent implements OnInit {
   @Input() public mdFile = 'index.md';

   public content: string;

   constructor(private contentService: ContentService) {}

   ngOnInit() {
      this.contentService.getMarkdownFileContent(this.mdFile).subscribe((fileContent: string) => {
         this.content = this.contentService.processMarkdownContent(fileContent);
      });
   }
}
