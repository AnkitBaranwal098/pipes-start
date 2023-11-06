import { Pipe, PipeTransform } from "@angular/core";

// To make this class treated as pipe we need to use the pipe decorator and inside that pass the name which will take the pipe name which we can now use in template
@Pipe({
    name: 'shorten'
})
export class ShortenPipe implements PipeTransform{

    // Transform must always return something as pipe in that you put something in and we get something out
    transform(value: any, limit:number) {
        if(value.length>limit)
            return value.substr(0,limit) + ' ...'
        return value;
    }
} 

// Now to use this pipe we need to got to the app.module.ts and inside the declarations we add the ShortenPipe