import React, { Fragment } from 'react';
import { Row, Spin } from 'antd';

const Spinner = () => {
	return (
		<Fragment>
			<Row justify='center' align='middle' style={{ height: 'inherit' }}>
				<Spin size='Large' className='' />
			</Row>
		</Fragment>
	);
};

export default Spinner;
