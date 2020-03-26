import React, { Fragment } from 'react';
import { Row } from 'antd';
import { Alert } from 'antd';
const Error = ({ description }) => {
	return (
		<Fragment>
			<Row justify='center' align='middle' style={{ height: 'inherit' }}>
				<Alert
					message='Error '
					description={description}
					type='error'
					closable
				/>
			</Row>
		</Fragment>
	);
};

export default Error;
