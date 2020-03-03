import React from 'react';
import renderer from 'react-test-renderer';

import EditProfile from '../EditProfile';

it('renders EditProfile correctly', () => {
	const profile = renderer
		.create(
			<div>
				<EditProfile />
			</div>,
		)
		.toJSON();
	expect(profile).toMatchSnapshot();
});
