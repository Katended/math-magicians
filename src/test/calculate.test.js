import calculate from '../logic/calculate';

describe('calculate addition', () => {
  it('Should return the correct value based on input object and string', () => {
    const result = calculate(
      {
        total: '5',
        next: '6',
        operation: '+',
      },
      '=',
    );
    expect(result).toEqual({
      total: '11',
      next: null,
      operation: null,
    });
  });
});

describe('calculate substraction', () => {
  it('Should return the correct value based on input object and string', () => {
    const result = calculate(
      {
        total: '7',
        next: '6',
        operation: '-',
      },
      '=',
    );
    expect(result).toEqual({
      total: '1',
      next: null,
      operation: null,
    });
  });
});

describe('calculate multiplication', () => {
  it('Should return the correct value based on input object and string', () => {
    const result = calculate(
      {
        total: '2',
        next: '2',
        operation: 'x',
      },
      '=',
    );
    expect(result).toEqual({
      total: '4',
      next: null,
      operation: null,
    });
  });
});
