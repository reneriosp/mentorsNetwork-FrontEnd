import React from "react";
import loadAnimation from './loadAnimation.svg';

class UserTable extends React.Component {
    constructor(props) {
        super();
        this.state = {
            name: null,
            email: null,
            id: null,
            loading_status: null
        };
        this.clickMe = this.clickMe.bind(this);
    }

    async fetchUser() {
        const res = await fetch('https://randomuser.me/api/');
        const data = await res.json();
        return data["results"][0]

    }

    async clickMe() {
        this.setState({loading_status: true});
        let data = await this.fetchUser();
        this.setState({name: data["name"]["first"]});
        this.setState({email: data["email"]});
        this.setState({id: data["login"]["uuid"]});
        this.setState({loading_status: false});
    }

    render() {
        if (this.state.loading_status === null) {
            return (
                <div>
                    <button onClick={this.clickMe}>Get Login</button>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            );
        }
        else {
            if (this.state.loading_status === true) {
                return (
                    <div>
                        <button onClick={this.clickMe}>Get Login</button>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                        </table>
                        <object type="image/svg+xml" data={loadAnimation}>SVG</object>
                    </div>
                );
            }
            else {
                return (
                    <div>
                        <button onClick={this.clickMe}>Get Login</button>
                        <table id="userTable">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.state.id}</td>
                                    <td>{this.state.name}</td>
                                    <td>{this.state.email}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                );
            }
        }
    }
}   

export default UserTable;