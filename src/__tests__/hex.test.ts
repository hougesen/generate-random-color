import { hex } from '../index';

test('HEX: Typeof', () => {
  expect(typeof hex()).toBe('string');
});

test('HEX: Typeof', () => {
  expect(hex({ r: 'ff', g: 'ff', b: 'ff' }) === '#FFFFFF').toBe(true);
});
