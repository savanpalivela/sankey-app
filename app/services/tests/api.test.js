import { fetchRecordData } from '../reacordData.api';

import { DATA_1 } from '../../../internals/mocks/data_1';

describe('API testing', () => {
  it('Fetch Record Data ', async () => {
    const mockSuccessResponse = DATA_1;
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

    const result = await fetchRecordData();
    expect(result).toEqual({
      records: DATA_1,
    });
  });
});
