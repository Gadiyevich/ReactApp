import React, { Component } from 'react'
import axios from 'axios'

export class Linkpost extends Component {

    state = {
        post: null
    }

    componentDidMount() {
        let id = this.props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(res => {
                this.setState({
                    post: res.data
                })
            })
    }

    render() {

        const post = this.state.post ? (
            <div>
                <h4 className='center'>{this.state.post.title}</h4>
                <p>{this.state.post.body}</p>
            </div>
        ) : (<div>Loading post...</div>)

        return (
            <div className='container'>
                <h4>{post}</h4>
            </div>
        )
    }
}

export default Linkpost