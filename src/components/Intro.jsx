
// RRD imports
import { Form } from "react-router-dom";

// Library imports
import { UserPlusIcon } from "@heroicons/react/24/solid";

// assets
import illustration from "../assets/illustration.jpg";

const Intro = () => {
  return (
      <div className="intro">
          <div>
              <h1>
                  Seize <span className="accent">Financial</span> Mastery
              </h1>
              <p>
                  Ignite Prosperity with <span className="accent"><b>Fusion</b></span> – your ultimate tool for mastering personal wealth.
              </p>
              <Form method="post">
                  <input
                      type="text"
                      name="userName"
                      required
                      placeholder="What is your name?"
                      aria-label="Your name"
                      autoComplete="given-name"
                  />
                  <input type="hidden" name="_action" value="newUser" />
                  <button type="submit" className="btn btn--dark">
                      <span>Create account</span>
                      <UserPlusIcon width={20} />
                  </button>
              </Form>
          </div>
          <img src={illustration} alt="Person with money" width={550} />
      </div>
  )
}

export default Intro
