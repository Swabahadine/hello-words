import { approximativeWords } from './utils';

test('approximativeWords', () => {
	expect(approximativeWords('azerty', 'my azepoi')).toBe(true);
});
