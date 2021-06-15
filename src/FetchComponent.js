import React from "react";
import loadAnimation from './loadAnimation.svg';

class FetchComponent extends React.Component {
    constructor(props) {
        super();
        this.state = {
            data: null
        };
        this.clickMe = this.clickMe.bind(this);
    }

    async fetchUser() {
        const res = await fetch('https://randomuser.me/api/');
        const data = await res.json();
        return data["results"]

    }

    async clickMe() {
        this.setState({data: await this.fetchUser()});
    }

    render() {
        if (this.state.data == null) {
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
                                <td>{this.state.data[0]["login"]["uuid"]}</td>
                                <td>{this.state.data[0]["name"]["last"]}, {this.state.data[0]["name"]["first"]}</td>
                                <td>{this.state.data[0]["email"]}</td>
                            </tr>
                        </tbody>
                    </table>
                    <object type="image/svg+xml" data={loadAnimation}>SVG</object>
                </div>
            );
        }
    }
}   

export default FetchComponent;