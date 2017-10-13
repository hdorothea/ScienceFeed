import { rename } from './common';


describe('rename', () => {
  it('renames the specified keys', () => {
    const renamed = rename({ a: 2, b: 4, c: 5 }, { a: 'renamedA', b: 'renamedB' });
    expect(renamed.a).toBeUndefined();
  });
});
