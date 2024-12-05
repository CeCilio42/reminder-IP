import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import '../output.css';
import ReminderLogo from '../images/ReminderLogoPng.png'
import HomeLogo from '../images/icons8-home-100.png'
import CreateLogo from '../images/icons8-create-100.png'
import SavedLogo from '../images/icons8-save-100.png'

import { useAuth0 } from '@auth0/auth0-react';


function Sidebar({logout}) {

    const { user, getAccessTokenSilently } = useAuth0();
  
    useEffect(() => {
      const fetchReminders = async () => {
        try {
          const token = await getAccessTokenSilently();
          const userId = user.sub; 
        } catch (error) {
          console.error('Error fetching reminders:', error);
        }
      };
  
      fetchReminders();
    }, [getAccessTokenSilently, user]);

    return (
<div className="sticky flex h-screen flex-row gap-4 overflow-y-auto rounded-lg sm:overflow-x-hidden">
	<aside className="sidebar-sticky sidebar justify-start">
		<section className="sidebar-title items-center p-4">
			<div className="flex flex-col">
				<span>Reminder</span>
				<span className="text-xs font-normal text-content2">User</span>
			</div>
		</section>
		<section className="sidebar-content min-h-[20rem]">
			<nav className="menu rounded-md">
				<section className="menu-section px-4">
					<span className="menu-title">Main menu</span>
					<ul className="menu-items">

						<li className="menu-item">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
								<path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
							</svg>
							<span><Link to="./company">Company</Link></span>
						</li>
						<li className="menu-item">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
								<path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
							</svg>
							<span><Link to="/calender">Calendar</Link></span>
						</li>
						<li>
							<input type="checkbox" id="menu-2" className="menu-toggle" />
							<label className="menu-item justify-between" htmlFor="menu-2">
								<div className="flex gap-2">
									<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
										<path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
									</svg>
									<span>Account</span>
								</div>

								<span className="menu-icon">
									<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
										<path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
									</svg>
								</span>
							</label>

							<div className="menu-item-collapse">
								<div className="min-h-0">
                  					<label className='menu-item ml-6'><Link to="/company">Company</Link></label>
									<label className="menu-item ml-6"><Link to="./profile">Information</Link></label>
									<label className="menu-item ml-6" onClick={logout}>Log out</label>
								</div>
							</div>
						</li>

						<li>
						<label className="btn btn-primary menu-item mt-5" htmlFor="modal-2">
							<Link to="./create">Add Reminder</Link>
						</label>

						</li>

					</ul>
				</section>
			</nav>
		</section>
		<section className="sidebar-footer bg-gray-2 pt-2">
			<div className="divider my-0"></div>
			<div className="dropdown z-50 flex h-fit w-full cursor-pointer hover:bg-gray-4">
				<label className="whites mx-2 flex h-fit w-full cursor-pointer p-0 hover:bg-gray-4" tabIndex="0">
					<div className="flex flex-row gap-4 p-4">
						<div className="avatar avatar-md">
							<img src={user.picture} alt="avatar" />
						</div>

						<div className="flex flex-col">
							<span><Link to="./profile">{user.name}</Link></span>
						</div>
					</div>
				</label>
				<div className="dropdown-menu-right-top dropdown-menu ml-2">
					<a className="dropdown-item text-sm">Profile</a>
					<a tabIndex="-1" className="dropdown-item text-sm">Account settings</a>
					<a tabIndex="-1" className="dropdown-item text-sm">Change email</a>
					<a tabIndex="-1" className="dropdown-item text-sm">Subscriptions</a>
					<a tabIndex="-1" className="dropdown-item text-sm">Change password</a>
					<a tabIndex="-1" className="dropdown-item text-sm">Refer a friend</a>
					<a tabIndex="-1" className="dropdown-item text-sm">Settings</a>
				</div>
			</div>
		</section>
	</aside>
</div>
    );
}

export default Sidebar;
