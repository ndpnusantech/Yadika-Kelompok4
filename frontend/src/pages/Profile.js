import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import { Container } from 'react-bootstrap'
import UserProfile from '../components/userAccount/UserProfile'

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
