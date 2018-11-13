import React, { Component }  from 'react'
import RegistrationStepsIndicator from '../registrationStepsIndicator'
import ResistrationFirstStepForm from '../step1/registrationFirstStepForm'
import { connect } from 'react-redux'
import saveFormValues from '../../../actions/index'

import uuser from '../../../img/uuser.png'
import iconadd from '../../../img/iconadd.png'

class RegistrationFirstStep extends Component {
    handleSubmit = (data) => {
        let values = data
        values.role = 1
        values.adress_id = 1;
        values.status = 1
        values.id = 1
        values.updated_at = new Date().toLocaleString()
        values.created_at =new Date().toLocaleString()
        this.props.saveFormValues(values)
    }
    render() {
        return (
            <section className="create_profile">
                <div className="container">
                    <h2 className="block_title">let us help you find a property</h2>
                    <span className="subtitle">Fill up the form below, consectetuer adipiscing elit</span>
                    <RegistrationStepsIndicator />
                    <div className="create_profile">
                        <div className="title_form">
                            <span className="name_step">
                                About You
                            </span>
                        </div>
                        <div className="block_profile_picture">
                            <span className="title">your profile picture</span>
                            <img src={uuser} alt="" className="face_user" />
                            <div className="wrap_upload">
                                <input type="file" name="" />
                                <span>
                                    <img src={iconadd} />
                                    <em>
                                        upload photo
                                    </em>
                                </span>
                            </div>
                        </div>
                        <ResistrationFirstStepForm onSubmit={this.handleSubmit} />
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    saveFormValues: (values) => dispatch(saveFormValues(values))
})

export default  connect(mapStateToProps, mapDispatchToProps)(RegistrationFirstStep)