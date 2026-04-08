import { useState, type SubmitEvent } from 'react';
import { validateEmail, validatePassword } from '../utils';
import { Link } from 'react-router';

interface LoginData {
  email: string;
  emailErrorMessage: string;
  password: string;
  passwordErrorMessage: string;
}

export default function Login() {
  const [loginData, setLoginData] = useState<LoginData>({
    email: '',
    emailErrorMessage: '',
    password: '',
    passwordErrorMessage: '',
  });

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateEmail(loginData.email)) {
      setLoginData((prev) => {
        return {
          ...prev,
          emailErrorMessage: 'Email inválido',
        };
      });
    }

    if (!validatePassword(loginData.password)) {
      setLoginData((prev) => {
        return {
          ...prev,
          passwordErrorMessage: 'A senha deve possuir pelo menos 8 caracteres',
        };
      });

      return;
    }

    console.log(loginData);
  };

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md items-center px-4 py-10">
      <section className="ui-panel w-full">
        <img src="/serverest-logo.png" alt="Serverest" className="m-auto mt-4 h-28" />

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4" noValidate>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-text font-medium">
              Email
            </label>
            <input
              data-testid="email-input"
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={loginData.email}
              onChange={(event) =>
                setLoginData({ ...loginData, email: event.target.value, emailErrorMessage: '' })
              }
              className="focus-visible:outline-primary-400 border-border text-text rounded-lg border bg-white px-3 py-2 text-sm focus-visible:outline-2"
              placeholder="seuemail@exemplo.com"
            />
            {loginData.emailErrorMessage && (
              <p
                data-testid="email-error"
                id="email-error"
                className="text-danger text-sm"
                role="alert"
              >
                {loginData.emailErrorMessage}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-text font-medium">
              Senha
            </label>
            <input
              data-testid="password-input"
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              minLength={8}
              value={loginData.password}
              onChange={(event) =>
                setLoginData({
                  ...loginData,
                  password: event.target.value,
                  passwordErrorMessage: '',
                })
              }
              className="border-border focus-visible:outline-primary-400 text-text rounded-lg border bg-white px-3 py-2 text-sm focus-visible:outline-2"
              placeholder="Minimo de 8 caracteres"
              aria-describedby={loginData.passwordErrorMessage ? 'password-error' : undefined}
            />
            {loginData.passwordErrorMessage && (
              <p
                data-testid="password-error"
                id="password-error"
                className="text-danger text-sm"
                role="alert"
              >
                {loginData.passwordErrorMessage}
              </p>
            )}
          </div>

          <button
            data-testid="login-button"
            type="submit"
            className="ui-button-primary mt-2 w-full"
          >
            Entrar
          </button>
        </form>

        <p className="text-text-muted mt-5 text-center text-sm">
          Não possui conta?{' '}
          <Link
            data-testid="signup-link"
            to="/cadastro"
            className="text-primary-700 font-semibold hover:underline"
          >
            Cadastre-se
          </Link>
        </p>
      </section>
    </main>
  );
}
