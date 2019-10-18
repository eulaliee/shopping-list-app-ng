import { SystemJsNgModuleLoaderConfig } from '@angular/core';
import { normalizeGenFileSuffix } from '@angular/compiler/src/aot/util';

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, description: string, imagePath: string) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
  }
}
