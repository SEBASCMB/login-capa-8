/**
 * Componente de formulario de inicio de sesión con opción de registro y autenticación con Google.
 *
 * @returns {JSX.Element} Elemento JSX que representa el formulario de inicio de sesión
 * @example
 * <Form />
 *
 * @component
 * @description Componente principal del formulario de autenticación que muestra
 * campos para iniciar sesión y opciones alternativas como login con Google.
 */

const Form = () => {
  return (
    <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-100">

      {/* ============ SECCIÓN HEADER ============ */}
      <Header />

      {/* ============ SECCIÓN FORMULARIO ============ */}
      <FormSection />

      {/* ============ SECCIÓN RECUÉRDAME Y OLVIDÉ CONTRASEÑA ============ */}
      <RememberAndForgotSection />

      {/* ============ SECCIÓN BOTONES DE ACCIÓN ============ */}
      <ActionButtons />

      {/* ============ SECCIÓN REGISTRO ============ */}
      <RegisterSection />
    </div>
  );
};

const Header = () => (
  <header>
    <h1 className="text-5xl font-semibold">Bienvenido</h1>
    <p className="font-medium text-lg text-gray-500 mt-4">
      Bienvenido de nuevo! Por favor ingresa tus datos.
    </p>
  </header>
);

const FormSection = () => (
  <div className="mt-8">
    {/* Campo de correo electrónico */}
    <div className="mb-6">
      <label htmlFor="email" className="text-lg font-medium">
        Correo
      </label>
      <input
        id="email"
        type="email"
        className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
        placeholder="Ingresa tu correo"
        // TODO: Implementar validación de correo electrónico
      />
    </div>

    {/* Campo de contraseña */}
    <div className="mb-6">
      <label htmlFor="password" className="text-lg font-medium">
        Contraseña
      </label>
      <input
        id="password"
        type="password"
        className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
        placeholder="Ingresa tu contraseña"
        // ! IMPORTANTE: Agregar validación de contraseña segura
      />
    </div>
  </div>
);

const RememberAndForgotSection = () => (
  <div className="mt-8 flex justify-between items-center">
    <div className="flex items-center">
      <input type="checkbox" id="rememberMe" />
      <label className="ml-2 font-medium text-base" htmlFor="rememberMe">
        Recuérdame por 30 días
      </label>
    </div>
    <button
      type="button"
      className="font-medium text-base text-violet-500 hover:text-violet-700 transition-colors"
    >
      Olvidé mi contraseña
    </button>
  </div>
);

const ActionButtons = () => (
  <div className="mt-8 flex flex-col gap-y-4">
    {/* Botón de inicio de sesión principal */}
    <button
      type="submit"
      className="active:scale-[.98] active:duration-75 hover:scale-[1.01]
                 ease-in-out transition-all py-3 rounded-xl bg-violet-500
                 text-white text-lg font-bold hover:bg-violet-600"
    >
      Iniciar Sesión
    </button>

    {/* Botón de inicio con Google */}
    <button
      type="button"
      className="flex rounded-2xl py-3 border-2 border-gray-400 items-center
                 justify-center gap-2 active:scale-[.98] active:duration-75
                 hover:scale-[1.01] ease-in-out transition-all hover:border-gray-500"
    >
      <GoogleIcon />
      Iniciar Sesión con Google
    </button>
  </div>
);

const GoogleIcon = () => (
  <svg
    role="img"
    aria-label="Logo de Google"
    viewBox="0 0 24 24"
    width="24"
    height="24"
  >
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);

const RegisterSection = () => (
  <div className="mt-8 flex justify-center items-center">
    <p className="font-medium text-base">¿No tienes una cuenta?</p>
    <button
      type="button"
      className="text-violet-500 text-base font-medium ml-2 hover:text-violet-700 transition-colors"
    >
      Regístrate
    </button>
  </div>
);

export default Form;
