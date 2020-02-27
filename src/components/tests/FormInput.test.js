import React from 'react';
import renderer from 'react-test-renderer';

import FormInput from '../FormInput';

const fnMock = jest.fn();
it('renders FormInput without audio record correctly', () => {
	const frmInp = renderer
		.create(
			<div>
				<FormInput
					placeholder="Сообщение"
					value="No audio record"
					onChange={fnMock}
					attachGeo={fnMock}
					handleImage={fnMock}
					handleRecordAudio={fnMock}
					handleStopRecord={fnMock}
					flagRec="false"
					submitButtonDisplayStyle="inline-block"
				/>
			</div>,
		)
		.toJSON();
	expect(frmInp).toMatchSnapshot();
});
