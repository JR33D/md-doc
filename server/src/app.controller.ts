import { Get, Controller, Res, Param, Query } from '@nestjs/common';
import { join } from 'path';
import { readdirSync, statSync } from 'fs';

@Controller()
export class AppController {
   @Get()
   root(@Res() res) {
      res.render('index');
   }

   @Get('byPath')
   getRoutesForMarkdown(@Query() query) {
      return this.findMarkdownFiles('client/src/' + query.path);
   }

   /**
    * Find all files inside a dir, recursively.
    * @function getAllFiles
    * @param  {string} dir Dir path string.
    * @return {string[]} Array with all file names that are inside the directory.
    */
   private findMarkdownFiles(dir) {
      return readdirSync(dir).reduce((files, file) => {
         const name = join(dir, file);
         const isDirectory = statSync(name).isDirectory();
         return isDirectory ? [...files, ...this.findMarkdownFiles(name)] : [...files, name];
      }, []);
   }
}
