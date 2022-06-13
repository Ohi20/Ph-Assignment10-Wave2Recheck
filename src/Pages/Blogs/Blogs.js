import React from 'react';
import { Card } from 'react-bootstrap';
import Footer from '../../Shared/Footer';

const Blogs = () => {
    return (
        <div className='my-3'>

            <div className='my-5'>
            <Card>
  <Card.Header>Difference between `authorization` and `authentication`:</Card.Header>
  <Card.Body>
    
    <Card.Text>
    In authentication process, the identity of user is checked for creating the access to the system.While in authorization process,user’s authorities are checked for accessing the resources.In authentication process, users are verified.While in authorization process, users or persons are vauldated.	Authentication needs usually user’s login details.While authorization needs user’s privilege or security levels.Authentication checks whether the person is user or not.While authorization determines What permissions do user have.
    </Card.Text>
    
  </Card.Body>
</Card>
            </div>


            <div className='my-5'>
            <Card>
  <Card.Header>Why are you using `firebase`? What other options do you have to implement authentication?</Card.Header>
  <Card.Body>
    
    <Card.Text>
    By using Firebase, we can focus our time and attention on developing the great app possible for our businesses. therefor, the operations and internal functions are so sould, and taken care of by the Firebase interface, we can spend effective time developing the high quaulty app that users are gonna use.Some of the features we can develop includes: Cloud Messaging,Authentication,Hosting,Remote Configuration,Test Lab,Crash Reporting,Realtime Database,Storage.
    </Card.Text>
    <Card.Text>
    Back4App,Parse,AWS Ampulfy,Backendless,Kuzzle,Supabase,appwrite,Hasura,Nhost,Deployd etc.
    </Card.Text>
    
  </Card.Body>
</Card>
            </div>


            <div className='my-5'>
            <Card>
  <Card.Header>What other services does `firebase` provide other than authentication?</Card.Header>
  <Card.Body>
    
    <Card.Text>
    <ul>
                            Cloud Firestore
                        </ul>
                        <ul>Cloud Functions</ul>
                        <ul>Authentication</ul>
                        <ul>Hosting</ul>
                        <ul>Cloud Storage</ul>
                        <ul>Google Analytics</ul>
                        <ul>Predictions</ul>
                        <ul>Cloud Messaging</ul>
                        <ul>Dynamic ulnks</ul>
                        <ul>Remote Config</ul>
    </Card.Text>
    
  </Card.Body>
</Card>
            </div>

           <Footer></Footer>

        </div>
    );
};

export default Blogs;