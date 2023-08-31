// Desc: Navigation bar

// RRD imports
import { Form, NavLink } from "react-router-dom";

// Library imports
import { TrashIcon } from "@heroicons/react/24/solid";

// assets
import logomark from "../assets/logomark.svg";

const Nav = ({ userName }) => {
    return (
        <nav>
            <NavLink to="/" aria-label="Home">
                <img src={logomark} alt="logo" />
                <span>FusionFinance</span>
            </NavLink>
            {
                userName && (
                    <Form
                        method="post"
                        action="/logout"
                        onSubmit={(event) => {
                            if (!confirm("Are you sure you want to delete your account?")) {
                                event.preventDefault();
                            }
                        }}
                    >
                        <button type="submit" className="btn btn--warning">
                            <span>Delete User</span>
                            <TrashIcon width={20} />
                        </button>

                    </Form>
                )
            }
        </nav>
    )
};

export default Nav;
