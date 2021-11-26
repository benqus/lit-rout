import { ILitRoutElement } from './types';

export function findFirstLitRoutParent(lre: ILitRoutElement): ILitRoutElement | null {
  let parent: HTMLElement = lre.parentElement;
  while (parent && parent !== document.body) {
    if (parent.tagName.toLowerCase() === 'lit-rout') {
      return parent as ILitRoutElement;
    }
    parent = parent.parentElement;
  }
  return null;
}
