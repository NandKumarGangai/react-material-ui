import React from 'react';
import { Link, Route } from 'react-router-dom';

class Contact extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Contact...</h1>
                </div>
                <div>
                    <nav>
                        <ul>
                            <li><Link to='/nest-roster'>Roster</Link></li>
                            <li><Link to='/nest-schedule'>Schedule</Link></li>
                        </ul>
                    </nav>
                </div>

                <Route path='/nest-roster' component={() => <h1>nest-roster</h1>}></Route>
                <Route path='/nest-schedule' component={() => <h1>nest-schedule</h1>}></Route>
            </div>
        )
    }
}

export default Contact;
