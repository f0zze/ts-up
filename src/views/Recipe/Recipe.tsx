import * as React from 'react';
import { observer } from 'mobx-react';
import FormField from '../../components/form/FormField';
import formSchema from './form';
import { formStyle, container } from './style';

interface IProps {
    form: any;
}

@observer
class Recipe extends React.Component<IProps> {
    render() {
        return (
            <div className={container}>
                <form className={formStyle} onSubmit={this.handleSubmit}>
                    <FormField field={this.props.form.$('title')}>
                        <input type="text" />
                    </FormField>
                    <FormField field={this.props.form.$('description')}>
                        <textarea placeholder="description" />
                    </FormField>
                </form>
            </div>
        );
    }

    private handleSubmit = e => {
        this.props.form.onSubmit(e);
    };
}

function form(props) {
    return (
        <div>
            <Recipe form={formSchema} />
        </div>
    );
}

export default form;
