import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

const useRequest = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const [disabled, setDisabled] = useState(false);
    const [alertInfo, setAlertInfo] = useState({
        display: false,
        message: '',
        type: '',
    });

    const toggleAlert = (message, type) => {
        setAlertInfo({ display: true, message, type });

        setTimeout(() => {
            setAlertInfo({ display: false, message: '', type: '' });
        }, 5000);
    };

    const onSubmit = async (data) => {
        const { name, email, phone } = data;

        try {
            setDisabled(true);
            const templateParams = {
                name,
                email,
                phone
            };

            await emailjs.send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                templateParams,
                process.env.REACT_APP_USER_ID
            );

            toggleAlert('Form submission was successful!', 'success');
        } catch (e) {
            console.error(e);
            toggleAlert('Uh oh. Something went wrong.', 'danger');
        } finally {
            setDisabled(false);
            reset();
        }
    };

    return {
        onSubmit,
        register,
        handleSubmit,
        alertInfo,
        setAlertInfo,
        errors,
    };
};

export default useRequest;
