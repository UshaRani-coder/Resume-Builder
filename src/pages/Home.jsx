import Header from '../ui/Header'
import createNewResume from '../assets/create-new-resume.svg'
import importResume from '../assets/import-your-resume.svg'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
      <Header />

      <div id="app" className="h-screen w-full">
        <div id="wrapper" className="p-4">
          <div id="create-resume initial">
            <div id="create-resume">
              <div id="greeting">
                <h1 className="text-3xl flex justify-center pt-4">
                  How do you want to to start?
                </h1>
                <p className="flex justify-center py-2">
                  Start from scracth, or upload your Linkedin profile
                </p>

                <div
                  id="box-container"
                  className="flex flex-col sm:flex-row justify-center items-center h-full w-full"
                >
                  <Link
                    to="/dashboard"
                    className="p-4 rounded-lg border-violet-400 border-2 m-4 lg:w-1/3 h-1/2 w-[90%]"
                  >
                    <div>
                      <div id="box1">
                        <div id="upper-half">
                          <h1 className="text-center text-2xl">
                            Create a New Resume
                          </h1>
                          <p className="text-center text-sm">
                            Start with a blank template. We will guide you step
                            by step
                          </p>
                        </div>
                        <div
                          id="lower-half"
                          className="flex justify-center mt-4"
                        >
                          <img
                            src={createNewResume}
                            alt="create-new-resume-svg"
                          />
                        </div>
                      </div>
                    </div>
                  </Link>

                  <div className="p-4 rounded-lg border-violet-400 border-2 m-4 w-[90%] lg:w-1/3 h-1/2">
                    <div id="box2" className="">
                      <div id="upper-half">
                        <h1 className="text-center text-2xl">
                          Add your resume
                        </h1>
                        <p className="text-center text-sm">
                          let's improve your resume togethe and grow together
                        </p>
                      </div>
                      <div id="lower-half" className="flex justify-center mt-4">
                        <img src={importResume} alt="import-your-resume-svg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center m-10">
                <h1>
                  By continuing, you agree to our&nbsp;
                  <a
                    href="https://google.com/"
                    className="text-sky-500 hover:underline"
                  >
                    Terms of Services
                  </a>
                  and&nbsp;
                  <a
                    href="https://google.com/"
                    className="text-sky-500 hover:underline"
                  >
                    Privacy Policy
                  </a>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
