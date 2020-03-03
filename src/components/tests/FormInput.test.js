import React from 'react';
import renderer from 'react-test-renderer';

import FormInput from '../FormInput';

const fnMock = jest.fn();
it('renders FormInput with some text correctly', () => {
	const frmInp = renderer
		.create(
			<div>
				<FormInput
					placeholder="Сообщение"
					value="Some text"
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

it('renders FormInput with dummy input correctly', () => {
	const frmInp = renderer
		.create(
			<div>
				<FormInput
					placeholder="Сообщение"
					value=""
					onChange={fnMock}
					attachGeo={fnMock}
					handleImage={fnMock}
					handleRecordAudio={fnMock}
					handleStopRecord={fnMock}
					flagRec="false"
					submitButtonDisplayStyle="none"
				/>
			</div>,
		)
		.toJSON();
	expect(frmInp).toMatchSnapshot();
});
