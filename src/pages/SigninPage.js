import Navigation from '../components/layouts/Navigation/Navigation'
import Signin from '../components/Signin/up/Signin'

function SigninPage() {
  return (
    <div className="signuppage">
      <Navigation />
      <div className="container">
        <Signin />
      </div>
    </div>
  )
}

export default SigninPage