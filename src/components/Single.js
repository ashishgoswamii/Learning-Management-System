import React, { Component } from 'react';
import RegisterPage from './registerPage'
import { Link } from 'react-router-dom';
class Single extends Component {
    render() {
        return (
            <div>
                <section class="banner-bottom py-5">
                    <div class="container py-md-5">
                        <h3 class="heading text-center mb-3 mb-sm-5">Sign Up</h3>
                    
            <RegisterPage/>
                    </div>
                </section>
            </div>
        )
    }
}
export default Single