import React from 'react';
import { Button as AntButton } from 'antd';
import { ButtonProps } from 'antd/lib/button';

const Button: React.FC<ButtonProps> = props => <AntButton size="large" type="primary" {...props} />;

export default Button;
