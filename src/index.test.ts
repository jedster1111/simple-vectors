import { helloWorld } from '.';

it('should return the expected string', () => {
    expect(helloWorld('Jed')).toBe('Jed says "Hello World!"');
});
