import RecipeForm from 'mobx-react-form';

const fields = [
    {
        name: 'title',
        label: 'Title',
        placeholder: 'Recipe title...',
        value: ''
    }
];

const hooks = {
    onSuccess(form) {
        alert('Form is valid! Send the request here.');
        // get field values
        console.log('Form Values!', form.values());
    },
    onError(form) {
        alert('Form has errors!');
        // get all form errors
        console.log('All form errors', form.errors());
    }
};

export default new RecipeForm({ fields }, { hooks });
