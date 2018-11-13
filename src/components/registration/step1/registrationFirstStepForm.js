import React, { Component } from 'react'
import { Field, reduxForm  } from 'redux-form'

class ResistrationFirstStepForm extends Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <div className="content">
                <form className='col' onSubmit={handleSubmit}>
                    <div className='label'>
                        <label className="name" htmlFor="firstName">FIRST NAME</label>
                        <Field name="firstName" component="input" type="text" />
                    </div>
                    <div className='label'>
                        <label className="name" htmlFor="lastName">LAST NAME</label>
                        <Field name="lastName" component="input" type="text" />
                    </div>
                    <div className='label'>
                        <label className="name" htmlFor="email">E-MAIL</label>
                        <Field name="email" component="input" type="text" />
                    </div>
                    <div className='label'>
                        <label className="name" htmlFor="phone">MOBILE PHONE</label>
                        <Field name="phone" component="input" type="text" />
                    </div>
                    <div className="between_blocks bt">
                        <span className="name_col">Create Password</span>
                    </div>
                    <div className='label'>
                        <label className="name" htmlFor="pass">NEW PASSWORD</label>
                        <Field name="pass" component="input" type="password" />
                    </div>
                    <div className='label'>
                        <label className="name" htmlFor="repass">RE-TYPE NEW PASSWORD</label>
                        <Field name="repass" component="input" type="password" />
                    </div>
                    <div className="wrap_step">
                        <span className="next_step">
                            <button>next step</button>
                        </span>
                    </div>
                </form>
                <div className="col">
                    <div className="block_video" />
                        <span className="block_title">
                            Lorem ipsum
                        </span>
                        <span className="text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis eaque, labore inventore fugit similique debitis quam rerum rem, impedit facilis architecto illum dignissimos! Vel nesciunt doloribus minima saepe veritatis, eligendi.
                        </span>
                </div>
            </div>
        )
    }
}

export default
    reduxForm ({
        form: 'registration'
    })
(ResistrationFirstStepForm)
