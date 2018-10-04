import { SafePipe } from './safe.pipe';
import { TestBed, inject } from '@angular/core/testing';
import { BrowserModule, DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SecurityContext } from '@angular/core';

describe('SafePipe', () => {
  let url: string;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule]
    });
    url = 'https://www.youtube.com/embed/WaG1KZqrLvM';
  });

  it('should sanitize the url passed', inject([DomSanitizer], (sanitizer: DomSanitizer) => {
    let pipe = new SafePipe(sanitizer);
    //This safeResourceUrl is a SafeResourceUrlImpl class after this Angular have to call the
    //sanitize method to get the safe url. This beacause the SafeResourceUrlImpl cant be
    //converted in a string directly.
    let safeResourceUrl : SafeResourceUrl = pipe.transform(url);
    let result : string = sanitizer.sanitize(SecurityContext.RESOURCE_URL, safeResourceUrl);
    expect(result).toBe('https://www.youtube.com/embed/WaG1KZqrLvM');
  }));
});