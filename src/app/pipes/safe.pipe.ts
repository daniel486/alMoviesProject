import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe ({
  name: 'safe'
})

/**
 * This class is to get the DomSanitizer, a service of Angular that helps 
 * to prevent attackers from injecting malicious client-side scripts into
 * web pages, and put this in a pipe.
 */
export class SafePipe implements PipeTransform {
  
  constructor(
    private sanitizer: DomSanitizer
  ) { }
  
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
} 