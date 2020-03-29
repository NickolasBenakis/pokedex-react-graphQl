import React, { Fragment, useCallback } from 'react';
import { Input, Row } from 'antd';
import { debounce } from 'lodash';
import EventEmitter from '../../EventEmitter';

const SearchInput = () => {
	const debounceCallback = useCallback(
		debounce(value => {
			EventEmitter.dispatch('FETCH_POKEMON', value);
		}, 300),
		[]
	);
	const handleOnChange = e => {
		e.persist();
		debounceCallback(e.currentTarget.value.toLowerCase());
	};

	return (
		<Fragment>
			<Row
				justify='center'
				align='middle'
				style={{ width: '20rem', margin: '20px auto' }}>
				<Input
					placeholder='Find pokemon...'
					allowClear
					onChange={handleOnChange}
					size='large'
				/>
			</Row>
		</Fragment>
	);
};

export default React.memo(SearchInput);
