import './Signin.css'

function Signin() {
  return (
    <section>
      <form action="">
        <h2>로그인</h2>
        <fieldset>
          <div class="signin">
            <label>
              아이디 <input type="text" required name="userId"></input>
            </label>
            <label>
              비밀번호 <input type="password" required name="userPw"></input>
            </label>
            <button>로그인</button>
          </div>
        </fieldset>
      </form>
    </section>
  )
}

export default Signin
