import * as React from 'react';
import { observer } from 'mobx-react';
import FormField from '../../components/form/FormField';
import formSchema from './form';

interface IProps {
    form: any;
}

@observer
class Recipe extends React.Component<IProps> {
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <FormField field={this.props.form.$('title')}>
                    <input type="text" />
                </FormField>
            </form>
        );
    }

    private handleSubmit = (e) => {
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
