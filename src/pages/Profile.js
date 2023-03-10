import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Container } from 'react-bootstrap'
import UserProfile from '../components/UserProfile'

const Profile = () => {
  return (
    <div>
      <Navbar />
      
        <Container>
            <UserProfile />
        </Container>
      
      <Footer />
    </div>
  )
}

export default Profile
