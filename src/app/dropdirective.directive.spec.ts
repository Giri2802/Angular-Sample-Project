import { DropdirectiveDirective } from './dropdirective.directive';

describe('DropdirectiveDirective', () => {
  it('should create an instance', () => {
    let dat1, dat2;
    const directive = new DropdirectiveDirective(dat1,dat2);
    expect(directive).toBeTruthy();
  });
});
