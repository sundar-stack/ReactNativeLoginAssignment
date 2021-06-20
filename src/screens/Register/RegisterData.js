export const createProfileFormDeatils = [
    {
        label:"First Name",
        name:"firstname",
        rules:{required: 'firstname Required'},
        defaultValue:"",
        errors:errors.name,
        errorsText:errors.firstname?.message
    },
    {
        label:"Last Name",
        name:"lastname",
        rules:{required: 'LastName Required'},
        defaultValue:"",
        errors:errors.lastname,
        errorsText:errors.lastname?.message
    },
    {
        label:"Email",
        name:"email",
        rules:{
            required: 'Email Required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'invalid email address',
            },
          },
        defaultValue:"",
        errors:errors.email,
        errorsText:errors.email?.message
    },
    {
        label:"Mobile No",
        name:"mobileno",
        rules:{
            required: 'Mobile No Required',
            maxLength: {
              value: 10,
              message: 'Mobile NO should not be more than 10 Digits',
            },
            minLength: {
              value: 10,
              message: 'Mobile NO should be equal to 10 Digits',
            },
          },
        defaultValue:"",
        errors:errors.mobileno,
        errorsText:errors.mobileno?.message
    },
    {
        label:"Password",
        name:"password",
        rules:{
            required: 'Password Required',
            maxLength: {
              value: 12,
              message: 'Password should not be more than 12 characters',
            },
            minLength: {
              value: 8,
              message: 'Password should be more than 8 characters',
            },
          },
        defaultValue:"",
        errors:errors.password,
        errorsText:errors.password?.message
    },

]