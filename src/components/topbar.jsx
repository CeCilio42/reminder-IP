import React from 'react';
import { Link } from 'react-router-dom';
import '../output.css';
import { useAuth0 } from '@auth0/auth0-react';

function Topbar({ searchTerm, handleSearchInput }) {
  return (
<div className="navbar rounded-lg">
	<div className="navbar-start">
    <div className="avatar avatar-ring avatar-md">
			<div className="dropdown-container">
				<div className="dropdown">
					<label className="btn btn-ghost flex cursor-pointer px-0" tabIndex="0">
						<img src="https://static.vecteezy.com/system/resources/previews/000/440/847/original/menu-vector-icon.jpg" alt="avatar" />
					</label>
					<div className="dropdown-menu dropdown-menu-bottom-right">
						<label className="dropdown-item text-sm"><Link to="./">My Reminders</Link></label>
						<a tabIndex="-1" className="dropdown-item text-sm"><Link to="/company">Company Reminders</Link></a>
						<a tabIndex="-1" className="dropdown-item text-sm"><Link to="./saved">Saved Reminders</Link></a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="navbar-end">
  <input
          type="text"
          className="input"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => handleSearchInput(e.target.value)}
        />
    <div class="popover">
	<label class="popover-trigger my-2 btn btn-solid-primary" tabindex="0">Information</label>
	<div class="popover-content popover-bottom-left" tabindex="0">
		<div class="popover-arrow"></div>
		<div class="p-4 text-sm">And here's some amazing content. It's very engaging. Right?</div>
	</div>
</div>
	</div>
</div>
  );
}

export default Topbar;
