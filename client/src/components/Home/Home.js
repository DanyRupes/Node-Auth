import React, { Component } from 'react';
import Header from '../reuse/header/header';
import Axios from 'axios';
import Auth from '../../Authendication/Auth'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import './home.css'

const auth = new Auth()

class Home extends Component {

    state = { gallary: [] }

    async componentDidMount() {
        try{
            let res = await Axios.get('/user/Gallary', { headers: await auth.headers() })
            if (res.data) {
                let details = res.data.details
                this.setState({ gallary: details })
                console.log(details)
            }
        }
        catch(e){
            this.props.history.push('/')
        }
    }

    handleClickPic = async (item)=>{
        alert('Share '+item.name)
    }

    render() {

        return (
            <div  >
                <Header />
                <h1>Gallary</h1>
                <div className="row">
                        {
                            this.state.gallary.map((item, i) => {
                                return (
                                    <div className="h-img-card col-12 col-sm-12 col-lg-2" key={i} >
                                        <Card>
                                            <CardImg top height="100%" width="100%" src={item.url} alt="Card image cap" />
                                            <CardBody>
                                                {/* <CardTitle>Image1</CardTitle>
                                    <CardSubtitle>meeting</CardSubtitle> */}
                                                <CardText>{item.name}</CardText>
                                                <Button onClick={()=>this.handleClickPic(item)}>Share</Button>
                                            </CardBody>
                                        </Card>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
        )
    }
}

export default Home