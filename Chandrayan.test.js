const SpaceCraft = require('./Chandrayan');

describe('SpaceCraft class', () => {
  let spaceCraft;

  beforeEach(() => {
    spaceCraft = new SpaceCraft('N', 0, 0, 0);
  });

  it('should move forward in the correct direction', () => {
    spaceCraft.move('f');
    expect(spaceCraft.x).toBe(0);
    expect(spaceCraft.y).toBe(1);
  });

  it('should move backward in the correct direction', () => {
    spaceCraft.move('b');
    expect(spaceCraft.x).toBe(0);
    expect(spaceCraft.y).toBe(-1);
  });

  it('should rotate right', () => {
    spaceCraft.move('r');
    expect(spaceCraft.direction).toBe('E');
  });

});
