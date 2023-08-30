const SpaceCraft = require('./Chandrayan');

// tests for invalid inputs
describe('Object initialization', () => {
    it('should create a valid object', () => {
        const obj = new SpaceCraft('N', 1, 2, 3);
        expect(obj.direction).toBe('N');
        expect(obj.temp).toBe('N');
        expect(obj.x).toBe(1);
        expect(obj.y).toBe(2);
        expect(obj.z).toBe(3);
      });
    
      it('should throw an error for invalid direction', () => {
        expect(() => new SpaceCraft('North', 1, 2, 3)).toThrowErrorMatchingSnapshot();
      });
    
      it('should throw an error for invalid number types', () => {
        expect(() => new SpaceCraft('N', 1, 2, '3')).toThrowErrorMatchingSnapshot();
      });
  });

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
    expect(spaceCraft.x).toBe(0);
    expect(spaceCraft.y).toBe(1);
    expect(spaceCraft.z).toBe(-1);
    expect(spaceCraft.direction).toBe('D');
  });

});

// up and down rotation
describe("up and down rotations",()=>{
    const spaceCraft = new SpaceCraft('N',0,0,0);
    it('should remember horizontal diraction while moving upwords',()=>{
        spaceCraft.move('u');
        expect(spaceCraft.direction).toBe('U');
        spaceCraft.move('f');
        expect(spaceCraft.direction).toBe('U');
        expect(spaceCraft.z).toBe(1);
        spaceCraft.move('l');
        expect(spaceCraft.direction).toBe('W');
    }) 
    it('should remember horizontal diraction while moving downwords',()=>{
        spaceCraft.move('d');
        expect(spaceCraft.direction).toBe('D');
        spaceCraft.move('r');
        expect(spaceCraft.direction).toBe('N');
    }) 
})

describe("movin function",()=>{
  const spaceCraft = new SpaceCraft('N',0,0,0);
  it('should accept only r l u d f b',()=>{
      spaceCraft.move('u');
      expect(spaceCraft.direction).toBe('U');
      spaceCraft.move('d');
      expect(spaceCraft.direction).toBe('D');
      spaceCraft.move('l');
      expect(spaceCraft.direction).toBe('W');
      spaceCraft.move('r');
      expect(spaceCraft.direction).toBe('N');
      expect(()=>spaceCraft.move('asd')).toThrowErrorMatchingSnapshot();
  }) 
})