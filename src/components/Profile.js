import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios'
import * as yup from 'yup';

const signSchema = yup.object().shape({
    name: yup.string().min(2,'Please Enter a Name Longer Than 2 Characters' ).required('Please Enter a Name Longer Than 2 Characters'),
    email: yup.string().email('Please Enter A Valid Email').required('Please Enter A Valid Email'),
    password: yup.string().min(6, 'Please Enter A Password Of 6 Characters Or More').required('Please Enter A Password Of 6 Characters Or More')
})

const Profile = () => {

    const {push} = useHistory()

    //let's us grab the id
    const { id } = useParams();

    //button state
    const [disabled, setDisabled]= useState(true)

    //user State
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    });

    //error state
    const [error, setError] = useState({
        name: '',
        email: '',
        password: '',

    })

    console.log(id)

    useEffect(() => {
        axios
        .get(`https://medcab1.herokuapp.com/api/user/1`)
        .then(res => console.log('USER GET:', res))
        .catch(err => console.log('USER GET ERROR:',err))
    }, [id])

    

    //handles submit

    const handleSubmit = event =>{
        event.preventDefault()

        axios
        .put(`https://medcab1.herokuapp.com/api/user/1`, user)
        .then(res => console.log(res))
        .catch(err => console.log('PUT ERROR:', err))
    }


    //Handles delete

    const handleDelete = event =>{
        event.preventDefault()

        axios
        .delete(`https://medcab1.herokuapp.com/api/user/1`)
        .then(res => console.log(res))
        .catch(err => console.log('PUT ERROR:', err))
    }

    //Handles Form Changes
    const handleChange = event => {
        event.persist()
        setUser({

            ...user,
            [event.target.name]: event.target.value

        })
        validateChange(event)

    }

    //actually validates
    const validateChange = event => {
        yup.reach(signSchema, event.target.name)
            .validate(event.target.type === "checkbox" ? event.target.checked : event.target.value)
            .then(valid => {
                
                setError({
                
                    ...error,
                    [event.target.name]: ""
                   
                });
                
            })
            .catch(err => {
                console.log(err)
                setError({
                    ...error,
                    [event.target.name]: err.errors[0]
                })
            })
    }

    //checks validity
    useEffect(() => {
        signSchema.isValid(user).then(valid => {
            setDisabled(!valid);
            
        })
        
    }, [user]);

    const handleLogOut = () => {
        localStorage.removeItem('token')
        push('/')
    }


    return (
        <div className='edit'>
            <h2>Edit Your Account</h2>
            <form onSubmit= {handleSubmit}>
                <label htmlFor='name' name='name' >Name*</label>

                <br />
                <input
                    type='text'
                    name='name'
                    value={user.name}
                    onChange={handleChange}
                />
                <br />

                {error.name.length > 0 ? <p>{error.name}</p> : null}

                <label htmlFor='email' name='email' >Email*</label>
                <br />

                <input
                    type='text'
                    name='email'
                    value={user.email}
                    onChange={handleChange}
                />
                <br />

                {error.email.length > 0 ? <p>{error.email}</p> : null}

                <label htmlFor='password' name='password' >Password*</label>
                <br />

                <input
                    type='password'
                    name='password'
                    value={user.password}
                    onChange={handleChange}
                />
                <br />

                {error.password.length > 0 ? <p>{error.password}</p> : null}

                <button disabled={disabled}>Submit</button>
            </form>
            <button onClick= {handleLogOut()}>Log Out</button>
        </div>)
}

export default Profile