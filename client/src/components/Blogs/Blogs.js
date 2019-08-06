import React, { Component } from 'react';
import Header from '../reuse/header/header';

class Blogs extends Component {



    state = {
        blogs: []
    }


    async componentDidMount() {
        // let res = await fetch('/listblogs')
        // let blogs = await res.json()
        // console.log(blogs)
        // this.setState({ blogs:blogs.details.blogs })
    }
    render() {
        return (
            <div>
                <Header />
                <h1>Dashboard</h1>
                <ul>
                {/* {
                    this.state.blogs.map((item, i) => {
                        return <li key={i}>{item}</li>
                    })
                } */}
                </ul>
            </div>
        )
    }
}

export default Blogs