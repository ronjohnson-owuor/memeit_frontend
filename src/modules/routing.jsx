import React from 'react'
import Home from '../pages/Home'
import Accounts from '../pages/accounts/Accounts'
import Addpost from '../components/Addpost'
import Profile from '../pages/profile/Profile'
import Userprofile from '../pages/profile/Userprofile'
import Reports from '../components/Reports'
import Terms from '../pages/terms/Terms'
import Addashboard from '../pages/advertisement/Addashboard'
import Wallet from '../wallet/main/Wallet'
 
	const routes =[
		{
			path: '/',
			component : <Home/>
		},
		{
			path: '/*',
			component : <Home/>
		},
		{
			path: '/my-wallet',
			component : <Wallet/>
		},
		{
			path: '/accounts',
			component : <Accounts/>
		},
		// {
		// 	path: '/advertisement',
		// 	component : <Addashboard/>
		// },
		{
			path: '/terms',
			component : <Terms/>
		},
		{
			path: '/create-post',
			component : <Addpost/>
		},
		{
			path: '/profile',
			component : <Profile/>
		},
		{
			path: '/reports',
			component : <Reports/>
		},
		{
			path: '/user-profile/:name/:id',
			component : <Userprofile/>
		}
	]

export default routes