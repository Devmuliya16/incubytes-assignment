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

  it('should rotate left', () => {
    spaceCraft.move('l');
    expect(spaceCraft.direction).toBe('W');
  });

  it('should rotate up', () => {
    spaceCraft.move('u');
    expect(spaceCraft.direction).toBe('U');
  });

  it('should rotate down', () => {
    spaceCraft.move('d');
    expect(spaceCraft.direction).toBe('D');
  });

  it('should correctly chain multiple moves', () => {
    spaceCraft.move('f');
    spaceCraft.move('r');
    spaceCraft.move('u');
    spaceCraft.move('b');
    spaceCraft.move('l');
    spaceCraft.move('d');
    expect(spaceCraft.x).toBe(1);
    expect(spaceCraft.y).toBe(0);
    expect(spaceCraft.z).toBe(-1);
    expect(spaceCraft.direction).toBe('S');
  });
});