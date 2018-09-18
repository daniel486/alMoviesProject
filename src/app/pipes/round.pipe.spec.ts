import { RoundPipe } from './round.pipe';

describe('RoundPipe', () => {
  let pipe: RoundPipe;

  beforeEach(() => {
    pipe = new RoundPipe();
  });

  it('should round the decimal number', () => {
    let nextResult = pipe.transform(45.675);
    expect(nextResult).toEqual(46);
    let sameResult = pipe.transform(37.42);
    expect(sameResult).toEqual(37);
  });
});
