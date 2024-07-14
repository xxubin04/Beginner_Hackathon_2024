import Navigation from '../components/layouts/Navigation/Navigation'
import Signup from '../components/Signin/up/Signup'

function SignupPage() {
  return (
    <div className="signuppage">
      <Navigation />
      <div className="container">
        <Signup />
      </div>
    </div>
  )
}

export default SignupPage
