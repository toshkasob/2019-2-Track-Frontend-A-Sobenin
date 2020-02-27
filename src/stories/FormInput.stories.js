import React from 'react';
import jest from 'jest-mock';

import FormInput from '../components/FormInput';

export default {
	title: 'FormInput',
	component: FormInput,
};

const fnMock = jest.fn();
export const DummyInput = () => (
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
);
export const Input = () => (
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
);
