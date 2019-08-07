import React, { Component } from 'react';
import Header from '../reuse/header/header';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './dash.css'
import axios from 'axios';
import Auth from '../../Authendication/Auth'


const auth = new Auth()
class Home extends Component {

    state = {selectedFile:'', imageName:''}


    handleImageSelect = async(ev)=>{
        let selectedFile = ev.target.files[0]
        console.log(selectedFile.value)
        // console.log(URL.createObjectURL(selectedFile))
        this.setState({selectedFile, imageName:this.state.imageName==''?selectedFile.name : this.state.imageName})
    }

    handleSubmit = async()=>{
        let {imageName, selectedFile} = this.state
        let data = {name:imageName, url:URL.createObjectURL(selectedFile)}

        try{
            let upF = await axios.put('/addfile', data, {headers:await auth.headers()})
            console.log(upF.data.details)
            alert("Image Uploaded")
            this.setState({selectedFile:'', imageName:''})
        }

        catch(e){
            alert('try again later')
            console.log(e)
        }
    }

    render() {

        let  { imageName, selectedFile } = this.state
        return (
            <div>
                <Header />
                <h1>Dashboard</h1>

            <div className="dash-form-container">
            <Form>
            <FormGroup>
                <FormGroup>
                    <Label for="img-name">Upload Image</Label>
                    <Input type="text" name="name" value={imageName || '    '} onChange={(e)=>this.setState({imageName:e.target.value})} id="img-name" placeholder="Drop a Name" />
                </FormGroup>
                    <Label for="up-image"></Label>
                    <Input type="file" name="file" id="up-image" onChange={this.handleImageSelect} />
                </FormGroup>

                <Button disabled={selectedFile?false:true} onClick={this.handleSubmit}>Submit</Button>
            </Form>
            </div>
            </div>
        )
    }
}

export default Home