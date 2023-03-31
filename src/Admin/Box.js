import './style/Box.css'
import Sidebars from '../components/Sidebar'

const BoxInfo = () => {
    return (
        <div>
            <Sidebars />
            {/* <!-- Box Info --> */}
		<main>
			<div class="head-title">
				<div class="left">
					<h1>Dashboard</h1>
				</div>
			</div>
			<ul class="box-info">
				<li>
					<i class='bx bx-dollar-circle'></i>
					<span class="text">
						<h3>$1230</h3>
						<p>Revenue</p>
					</span>
				</li>
				<li>
					<i class='bx bxs-group'></i>
					<span class="text">
						<h3>2834</h3>
						<p>Visitors</p>
					</span>
				</li>
				<li>
					<i class='bx bx-bar-chart-alt'></i>
					<span class="text">
						<h3>4.76%</h3>
						<p>Conversion Rate</p>
					</span>
				</li>
				<li>
					<i class='bx bxs-star'></i>
					<span class="text">
						<h3>87,746</h3>
						<p>Likes</p>
					</span>
				</li>
				<li>
					<i class='bx bx-bookmarks'></i>
					<span class="text">
						<h3>1.043</h3>
						<p>Sale</p>
					</span>
				</li>
				<li>
					<i class='bx bx-message-dots'></i>
					<span class="text">
						<h3>1.043</h3>
						<p>Message</p>
					</span>
				</li>
			</ul>
			{/* <!-- End Box Info --> */}

			{/* <!-- Todo List --> */}
			<div class="table-data">
				<div class="todo">
					<div class="head">
						<h3>Todo</h3>
						<i class='bx bx-plus'></i>
						<i class='bx bx-filter'></i>
					</div>
					<ul class="todo-list">
						<li class="not-completed">
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est magni maxime quis, incidunt
								recusandae minima.</p>
						</li>
						<li class="completed">
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est magni maxime quis, incidunt
								recusandae minima.</p>
						</li>
						<li class="not-completed">
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est magni maxime quis, incidunt
								recusandae minima.</p>
						</li>
						<li class="completed">
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est magni maxime quis, incidunt
								recusandae minima.</p>
						</li>
						<li class="not-completed">
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est magni maxime quis, incidunt
								recusandae minima.</p>
						</li>
					</ul>
				</div>
			</div>
			{/* <!-- End Todo List --> */}
            </main>
        </div>
    )
}

export default BoxInfo