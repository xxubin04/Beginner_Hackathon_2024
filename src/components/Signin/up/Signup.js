import './Signup.css'

function Signup() {
  return (
    <section>
      <form action="">
        <h2>회원가입</h2>
        <fieldset>
          <div class="signup">
            <label>
              아이디 <input type="text" required name="userId"></input>
            </label>
            <label>
              비밀번호 <input type="password" required name="userPw"></input>
            </label>
            <button>회원가입</button>
          </div>
        </fieldset>
      </form>
    </section>
  )
}

export default Signup
