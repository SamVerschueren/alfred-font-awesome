import test from 'ava';
import alfyTest from 'alfy-test';

test.beforeEach(t => {
	t.context.alfy = alfyTest();
});

test(async t => {
	const result = await t.context.alfy('500px');

	t.deepEqual(result, [
		{
			title: '500px',
			autocomplete: '500px',
			subtitle: 'fa-500px',
			arg: 'fa-500px',
			icon: {
				path: './icons/500px.png'
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
