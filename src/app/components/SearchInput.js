import React, { Fragment } from 'react';
import { Input, Row } from 'antd';

const SearchInput = () => {
	return (
		<Fragment>
			<Row
				justify='center'
				align='middle'
				style={{ width: '20rem', margin: '20px auto' }}>
				<Input
					placeholder='Find pokemon...'
					allowClear
					onChange={value => console.log(value)}
					size='large'
					// style={{ borderRadius: '22px' }}
				/>
			</Row>
		</Fragment>
	);
};

export default SearchInput;
