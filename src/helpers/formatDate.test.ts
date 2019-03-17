import formatDate from './formatDate';

describe('src/helpers/formatDate', () => {
  it('should return a human readable date', () => {
    // Given
    const stringDate = '2019-03-16T09:59:51.935Z';

    // When
    const result = formatDate(stringDate);

    // Then
    expect(result).toEqual('Sat Mar 16 2019 at 10:59');
  });
});
