function onFormSubmit(event) {

    const formValues = event.namedValues;

    const data = {};
    for (Key in formValues) {
        var value = formValues[Key][0];
        data[Key] = value;
    };

    return data;

}