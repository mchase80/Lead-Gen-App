import { asyncComponent } from "@/utils/asyncfix";
import { getServerSession } from "next-auth";
import SignOut from "./signout";

async function Navigation() {
	const session = await getServerSession();
	return (
		<div className="navbar bg-base-100">
			<div className="flex-1">
				<a className="btn btn-ghost normal-case text-xl no-underline">
					Lead Gen App
				</a>
			</div>
			<div className="flex-none">
				<div className="dropdown dropdown-end">
					<label
						tabIndex={0}
						className="btn btn-ghost btn-circle avatar"
					>
						<div className="w-10 rounded-full">
							<img
								alt="avatar"
								className="m-0"
								src={session?.user?.image ?? ""}
							/>
						</div>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<a className="justify-between">
								Profile
								<span className="badge">New</span>
							</a>
						</li>
						<li>
							<a>Settings</a>
						</li>
						<li>
							<SignOut />
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default asyncComponent(Navigation);
