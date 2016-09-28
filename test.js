import test from 'ava';
import alfyTest from 'alfy-test';

test('light background', async t => {
	const alfy = alfyTest();
	const result = await alfy('500px');

	t.deepEqual(result, [
		{
			title: '500px',
			autocomplete: '500px',
			subtitle: 'fa-500px',
			arg: 'fa-500px',
			icon: {
				path: './icons/black/500px.png'
			},
			mods: {
				alt: {
					subtitle: 'f26e',
					arg: 'f26e'
				}
			}
		}
	]);
});

test('dark background', async t => {
	const alfy = alfyTest({
		theme_background: 'rgb(0, 0, 0, 0.2)'	// eslint-disable-line camelcase
	});

	const result = await alfy('500px');

	t.deepEqual(result, [
		{
			title: '500px',
			autocomplete: '500px',
			subtitle: 'fa-500px',
			arg: 'fa-500px',
			icon: {
				path: './icons/white/500px.png'
			},
			mods: {
				alt: {
					subtitle: 'f26e',
					arg: 'f26e'
				}
			}
		}
	]);
});
