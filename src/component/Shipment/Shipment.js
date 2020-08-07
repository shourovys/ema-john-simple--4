import React from 'react';
import { useForm } from 'react-hook-form';
import Auth from '../Login/UseAuth';

const Shipment = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    const auth = Auth()



    return (
        <form style={{ display: 'block', margin: 'auto' }} onSubmit={handleSubmit(onSubmit)} >
            <label htmlFor="name">name</label>
            {
                auth.user ?
                    <input name="name" id="name" ref={register({ required: true })} value={auth.user.name} /> :
                    <input name="name" id="name" ref={register({ required: true })} />
            }
            {errors.name && <span> name is required</span>}<br></br>

            <label htmlFor="email">email</label>
            {
                auth.user ?
                    <input name="email" id='email' ref={register({ required: true })} value={auth.user.email} /> :
                    <input name="email" id='email' ref={register({ required: true })} />
            }
            {errors.email && <span> email is required</span>}<br></br>

            <label htmlFor="phone">phone number</label>
            <input name="phone" id='phone' ref={register({ required: true })} />
            {errors.phone && <span> phone number is required</span>}<br></br>

            <label htmlFor="address">address</label>
            <input name="address" id='address' ref={register({ required: true })} />
            {errors.address && <span> address is required</span>}<br></br>

            <input type="submit" />
        </form>
    );
};

export default Shipment;