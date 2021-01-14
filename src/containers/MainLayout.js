import React from 'react'
import { Button, Container } from 'reactstrap';
import Navbar from './Navbar'
import List from '../modules/Client/List'

const MainLayout=()=>{
	return (
			<div>
			<Navbar />
			<Container>
				<List />
			</Container>
			</div>
		)
}
export default MainLayout;