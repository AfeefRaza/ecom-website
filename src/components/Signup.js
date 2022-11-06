import React from 'react'
import './Login.css'
import loginimg from './loginimg.png'
export default function Signup() {
  return (
    <>
    <div className="Login-container">
        <div className="Login-form">
          <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Full name</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Phone Number</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">I agree to Terms and conditions</label>
            </div>
            <button type="submit" className="btn btn-primary">Sign in</button> 
          </form>
          
          <div className="hr"><hr /> <p>or</p><hr /></div>
          <div className="Loginbtn">
                <a href="" className="Fbbtn"> <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2VkZjVlMSI+PHBhdGggZD0iTTY4LjgsMTU0Ljh2LTY4LjhoLTIyLjkzMzMzdi0yMi45MzMzM2gyMi45MzMzM3YtMTIuMzE1MmMwLC0yMy4zMTc0NyAxMS4zNTc3MywtMzMuNTUxNDcgMzAuNzM2NCwtMzMuNTUxNDdjOS4yODIyNywwIDE0LjE5LDAuNjg4IDE2LjUxMiwxLjAwMzMzdjIxLjkzaC0xMy4yMTUzM2MtOC4yMjczMywwIC0xMS4wOTk3Myw0LjM0MDEzIC0xMS4wOTk3MywxMy4xMzUwN3Y5Ljc5ODI3aDI0LjEwODY3bC0zLjI3MzczLDIyLjkzMzMzaC0yMC44MzQ5M3Y2OC44eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+" alt="FB" />  FACEBOOK</a>
                <a href="#" className="Googlebtn"> <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="FB" />  GOOGLE</a>
          </div>
        </div>
        <div className="Login-img">
          <img src={loginimg} alt="" />
        </div>
      </div>
    </>
  )
}
