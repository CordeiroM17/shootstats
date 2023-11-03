/* import LoginForm from "../components/LoginForm" */
import LoginForm from "../components/LoginForm"
import RegisterPage from "../components/RegisterForm"

const HomePage = () => {
  return (
    <main>
        <section className="container" id="container">

                <RegisterPage />


            <div className="form-container sign-in-container">
                <LoginForm />
            </div>
        </section>
    </main>
  )
}

export default HomePage