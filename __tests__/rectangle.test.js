import Rectangle from '../src/js/rectangle.js';

describe('Rectangle', () => {

  let rectangle;

  beforeEach(() => {
    rectangle = new Rectangle(3,5);
  });

  test('should correctly create a rectangle object using two sides', () => {
    expect(rectangle.side1).toEqual(3);
    expect(rectangle.side2).toEqual(5);
  });

  test('should correctly get the area of a rectangle object', () => {
    expect(rectangle.getArea()).toEqual(15);
  });
});
