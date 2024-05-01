import useRequest from './useRequest';
import './Projects.css';
import './Popup.css';
import './PopupRequest.css';

const Request = () => {
    const {
        onMrg,
        onSubmit,
        register,
        handleSubmit,
        alertInfo,
        setAlertInfo,
        errors,
    } = useRequest();

    return (
        <>
            <form id='contact-form' onClick={(onMrg)} onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className='inputs'>
                    <a className='pop5' href="#index5">X</a>
                    <h2 className='text1'>Contact us</h2>
                    <p>Write your contacts and we will keep in touch with you</p>
                    <div className='name'>
                        <input
                            type='text'
                            name='name'
                            {...register('name', {
                                required: { value: true, message: 'Please enter your name' },
                                maxLength: {
                                    value: 30,
                                    message: 'Please use 30 characters or less'
                                }
                            })}
                            placeholder='Name'
                            id='name'
                        />
                        {errors.name && <h3 className='errorMessage'>{errors.name.message}</h3>}
                    </div>
                    <div className='email'>
                        <input
                            type='email'
                            name='email'
                            {...register('email', {
                                required: 'Please enter your email address',
                                pattern: {
                                    value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                    message: 'Please enter a valid email address'
                                }
                            })}
                            placeholder='Email address'
                            id='email'
                        />
                        {errors.email && <h3 className='errorMessage'>{errors.email.message}</h3>}
                    </div>
                    <div className='phone'>
                        <input
                            type='number'
                            name='phone'
                            {...register('phone', {
                                required: { value: true, message: 'Please enter your phone number' },
                                minLength: {
                                    value: 10,
                                    message: 'Please enter a valid phone number'
                                },
                                maxLength: {
                                    value: 15,
                                    message: 'Please enter a valid phone number'
                                }
                            })}
                            placeholder='Phone (+374)...'
                            id='phone'
                        />
                        {errors.phone && <h3 className='errorMessage'>{errors.phone.message}</h3>}
                    </div>
                </div>
                <div className='button'>
                    <button className="button-78" onClick={handleSubmit}>
                        <h1>Request Demo</h1>
                    </button>
                </div>
                {alertInfo.display && (
                    <div className={`alert alert-${alertInfo.type} alert-dismissible mt-5`} role='alert'>
                        {alertInfo.message}
                        <button
                            type='button'
                            className='btn-close'
                            data-bs-dismiss='alert'
                            aria-label='Close'
                            onClick={() => setAlertInfo({ display: false, message: '', type: '' })}
                        ></button>
                    </div>
                )}
            </form>
        </>
    );
};

export default Request;
