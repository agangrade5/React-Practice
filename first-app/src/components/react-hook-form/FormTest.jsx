import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { useEffect } from 'react';

const FormTest = () => {
    const { register, handleSubmit, control, formState, watch, getValues, setValue, reset, trigger } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            age: 18,
            social: {
                facebook: '',
                twitter: ''
            },
            phoneNumbers: ['',''],
            dateOfBirth: new Date()
        },
        mode: "onBlur" // "onChange" (default), "onBlur", "onSubmit", "onTouched", "all"
    });

    const { errors, dirtyFields, touchedFields, isDirty, isValid,
        isSubmitting, isSubmitted, isSubmitSuccessful, submitCount
     } = formState;
    /* console.log("Errors:", errors);
    console.log("Dirty Fields:", dirtyFields, "Touched Fields:", touchedFields);
    console.log("Is Form Dirty:", isDirty);
    console.log("Is Form Valid:", isValid); */
    console.log("Is Form Submitting:", isSubmitting);
    console.log("Is Form Submitted:", isSubmitted);
    console.log("Is Form Submit Successful:", isSubmitSuccessful);
    console.log("Submit Count:", submitCount);

    //console.log("Register object:", useForm());

    const onSubmit = (data) => {
        console.log(data);
    }

    // getValues can be used to get current form values without submitting the form
    const getValuesHandler = () => {
        const values = getValues();
        console.log("Current form values:", values);
    }

    // setValue can be used to set form values without submitting the form ( most used otp input auto fill field values )
    const setValueHandler = () => {
        setValue("firstName", "John", { shouldValidate: true, shouldDirty: true, shouldTouch: true }); // dev tools validation, dirty and touch state update
        setValue("lastName", "Doe", { shouldValidate: true, shouldDirty: true, shouldTouch: true }); // dev tools validation, dirty and touch state update
    }

    // onError can be used to handle form validation errors 
    const onError = (errors) => {
        console.log(errors);
    }

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }
    }, [isSubmitSuccessful]);

    return (
        <div>
            <h2>React Hook Form Test Component</h2>
            { JSON.stringify(watch()) }
            <form onSubmit={handleSubmit(onSubmit, onError)}>
                <div>
                    <label>First Name:</label>
                    <input 
                        type="text" 
                        name="firstName" 
                        {...register("firstName", { 
                            required: "First Name is required field", 
                        })}
                    />
                    <span> {watch("firstName")}</span>
                    { formState.errors.firstName && <span style={{ color: 'red', fontSize: '12px' }}>{formState.errors.firstName.message}</span> }
                </div>
                <div>
                    <label>Last Name:</label>
                    <input 
                        type="text" 
                        name="lastName" 
                        {...register("lastName", {
                            required: "Last Name is required field",
                            minLength: {
                                value: 3,
                                message: "Last Name should be at least 3 characters"
                            }
                        })} 
                    />
                    <span> {watch("lastName")}</span>
                    { formState.errors.lastName && <span style={{ color: 'red', fontSize: '12px' }}>{formState.errors.lastName.message}</span> }
                </div>
                <div>
                    <label>Email:</label>
                    <input 
                        type="text" 
                        name="email" 
                        {...register("email", {
                            required: "Email is required field",
                            disabled: watch("firstName") === "", // disable email field if first name is empty
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Invalid email address"
                            },
                            validate: (value) => {
                                return value !== "8yX4B@example.com" || "Email cannot be 8yX4B@example.com";
                            }
                        })} 
                    />
                    { formState.errors.email && <span style={{ color: 'red', fontSize: '12px' }}>{formState.errors.email.message}</span> }
                </div>
                <div>
                    <label>Age:</label>
                    <input 
                        type="number" 
                        name="age" 
                        {...register("age", {
                            required: "Age is required field",
                            valueAsNumber: true,
                            min: {
                                value: 18,
                                message: "Age should be at least 18"
                            },
                            max: {
                                value: 65,
                                message: "Age should be at most 65"
                            }
                        })} 
                    />
                    { formState.errors.age && <span style={{ color: 'red', fontSize: '12px' }}>{formState.errors.age.message}</span> }
                </div>
                <div>
                    <label>Facebook Profile:</label>
                    <input 
                        type="text" 
                        name="facebook" 
                        {...register("social.facebook")} 
                    />
                </div>
                <div>
                    <label>Twitter Profile:</label>
                    <input 
                        type="text" 
                        name="twitter" 
                        {...register("social.twitter")} 
                    />
                </div>
                <div>
                    <label>Primary Phone Number:</label>
                    <input 
                        type="text" 
                        name="primaryPhoneNumber" 
                        {...register("phoneNumbers.0")} 
                    />
                </div>
                <div>
                    <label>Secondary Phone Number:</label>
                    <input
                        type="text"
                        name="secondaryPhoneNumber"
                        {...register("phoneNumbers.1")}
                    />
                </div>
                <div>
                    <label>Date of Birth:</label>
                    <input 
                        type="date" 
                        name="dateOfBirth" 
                        {...register("dateOfBirth")} 
                    />
                </div>

                <div>
                    <label>Country:</label>
                    <select name="country" {...register("country")}>
                        <option value="">Select Country</option>
                        <option value="USA">USA</option>
                        <option value="Canada">Canada</option>
                        <option value="UK">UK</option>
                    </select>
                </div>

                <div>
                    <label>Gender:</label>
                    <input 
                        type="radio" 
                        name="gender" 
                        value="male" 
                        {...register("gender")} 
                    /> Male
                    <input 
                        type="radio" 
                        name="gender" 
                        value="female" 
                        {...register("gender")} 
                    /> Female
                </div>
                <div>
                    <label>Skills:</label>
                    <input 
                        type="checkbox" 
                        name="skills" 
                        value="HTML" 
                        {...register("skills")} 
                    /> HTML
                    <input 
                        type="checkbox" 
                        name="skills" 
                        value="CSS" 
                        {...register("skills")} 
                    /> CSS
                    <input 
                        type="checkbox" 
                        name="skills" 
                        value="JavaScript" 
                        {...register("skills")} 
                    /> JavaScript
                </div>

                {/* <button type="submit" disabled={!isValid}>Submit</button> */}
                <button type="submit">Submit</button>
                <button type="button" onClick={getValuesHandler}>Get Values</button>
                <button type="button" onClick={setValueHandler}>Set Values</button>
                <button type="button" onClick={() => trigger('firstName')}>Validate</button>
                <button type="button" onClick={() => reset({'firstName': 'John', 'lastName': 'Doe', 'email': 'example@example.com', 'age': 30})}>Reset Form</button>

            </form>

            <DevTool control={control} placement='top-left' />
        </div>
    )
}

export default FormTest
