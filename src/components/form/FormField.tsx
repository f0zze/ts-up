import * as React from 'react';
import { observer } from 'mobx-react';
import { css } from 'emotion';

const cssField = css`
    display: block;
    color:white;
`;

interface IProps {
    field?: any;
    test?: number;
    children: React.ReactElement<any>;
}

@observer
class FormField extends React.Component<IProps> {
    render() {
        const fieldProps = this.props.field.bind();
        return (
            <div className={cssField}>
                <label htmlFor={fieldProps.id}>
                    {fieldProps.label}
                </label>
                {React.cloneElement(this.props.children, { ...fieldProps })}
            </div>
        );
    }
}

export default FormField;
