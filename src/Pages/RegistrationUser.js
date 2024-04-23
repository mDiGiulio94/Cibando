import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";



//SE IL PULSANTE NON SI ATTIVA RICORDATI CHE LA PASSWORD DEVE RISPETTARE I PARAMETRI DELLA REGEX

const RegistrationUser = () => {
  //viene subito impostata una variabile di stato con dentro un oggetto, con dei valori definiti
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    ripetiPassword: "",
    accetto: false,
  });

  //variabile di stato che immagazzina gli errori
  const [formErrors, setFormErrors] = useState({});

  //variabile di stato per la validazione del form

  const [formValido, setFormValido] = useState(false);

  //GESTIONE FORM
  /*i form in react vengono gestiti in DIVERSI modi, dato che non c'è modo "ufficiale" da seguire, quello
      in questo esempo è il più "difficile" */

  //onChange fa si che se cambia quel "campo", cambia anche lo useState, avendo un unico use state però bisogna fare un percorso un pò più elaborato, IL SEGUENTE:
  const handleOnChange = (evento) => {
    /*spread array, ovvero con questo comando copiamo TUTTO IL CONTENUTO IN FORM VALUE, quando poi verrà richiamata LA FUNZIONE HANDLECHANGE, all'evento onCHANGE, passeremo noi stessi (evento), e prende il nome, (name) e value presenti, nel label, che verranno aggiornati senza cancellare quelli presenti nell'array.

          Esempio:

           setFormValues({ ...formValues, [evento.target.name] : evento.target.value });
          */
    setFormValues({
      ...formValues,

      //
      [evento.target.name]:
        evento.target.type !== "checkbox"
          ? evento.target.value.trim()
          : evento.target.checked
    })
      if (evento.target.name === 'ripetiPassword' || evento.target.name === 'password') { convalidaPassword(); }
  };

  /* questo metodo compie la destrutturatizzaizione di un oggetto, dicendo letteralmente
      che si creano due costanti name e value e prendo il nome e il valore che passa l'evento target*/
  const validazioneCampi = (evento) => {
    //   evento.target, name, vale il NOME dell'elemento in cui si trova (se si trova in email vale email, in nome, nome ecc...)
    const { name, value } = evento.target;
    // il trim serve per rimuovere "cose", in questo caso, gli spazi che vengono inseriti per errore
    if (value.trim() === "") {
      setFormErrors((prevError) => ({
        ...prevError,
        [name]: "Questo campo è obbligatorio",
      }));
    } else {
      if (name === "email") {
        // regex sono regole che verificano se la mail è correttamente compilata
        const emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;

        if (!emailRegex.test(value)) {
          setFormErrors((prevError) => ({
            ...prevError,
            [name]: "Il campo email deve contenere una email valida",
          }));
        } else {
          //solitamente si chiude con questo messaggio undefined
          setFormErrors((prevError) => ({
            ...prevError,
            [name]: undefined,
          }));
        }
      } else if (name === "password") {
        // regex sono regole che verificano se la password è correttamente compilata
        const passwordRegex =
          /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/;

        if (!passwordRegex.test(value)) {
          setFormErrors((prevError) => ({
            ...prevError,
            [name]: "Il campo password deve contenere una password valida",
          }));
        } else {
          //solitamente si chiude con questo messaggio undefined
          setFormErrors((prevError) => ({
            ...prevError,
            [name]: undefined,
          }));
        }
      } else {
        //solitamente si chiude con questo messaggio undefined
        setFormErrors((prevError) => ({
          ...prevError,
          [name]: undefined,
        }));
      }
    }
  };

  //metodo convalidazione password se le password sono uguali, l'obbiettivo della funzione è ritornare un booleano, true se non corrispondono e false se corrispondono
  const convalidaPassword = () => {
    const password = formValues.password;
    const ripetiPassword = formValues.ripetiPassword;

    if (password !== ripetiPassword) {
      setFormErrors((prevError) => ({
        ...prevError,
        ripetiPassword: "Le password non corrispondono",
      }));
      return false;
    } else {
      setFormErrors((prevError) => ({
        ...prevError,
        ripetiPassword: undefined,
      }));
      return true;
    }
  };

  //metodo onSubmit
  //il prevent defalut fa si che BLOCCHI il refresh della pagina, senza inviare il form al refresh
  //tutte le volte che si usa un form bisogna mettere il prevent default
  function onSubmitForm(event) {
    event.preventDefault();
    console.log("campi del form ", formValues);
  }

  useEffect(
    () => {
      /*la costante dice che se per ogni valore dell'oggetto formErrors, racchiuso in errore(error), se anche uno solo di questi è valorizzato vuol dire che c'è errore e lo lancia, altrimenti non c'è errore e va bene   */
      const isFormValid = Object.values(formErrors).every((error) => !error);

      //cosi si definiscono tutte le condizioni per le quali un campo può essere non valido
      const campiCompilati = Object.values(formValues).every(
        (value) =>
          value !== undefined &&
          value !== null &&
          value !== "" &&
          value !== false &&
          value !== "false"
      );
      /*primo metodo di impostare il set:

          if(isFormValid && campiCompilati){
          setFormValido(true)
          }

          */
      setFormValido(isFormValid && campiCompilati);
    },
    //controlla il cambiamento all'aggiornarsi del form
    [formValues, formErrors]
  );

  useEffect(() => {
    convalidaPassword();
  }, [formValues.password, formValues.ripetiPassword]);

  return (
    <>
      <Contenitore>
        <section className="vh-100">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div className="card text-black">
                  <div className="card-body p-0">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 p-md-5">
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                          Modulo di registrazione
                        </p>
                        {/* richiamo il metodo onsubmit sul form */}
                        <form className="mx-1 mx-md-4" onSubmit={onSubmitForm}>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div
                              data-mdb-input-init
                              className="form-outline flex-fill mb-0"
                            >
                              <input
                                type="text"
                                id="name"
                                className={`form-control ${
                                  formErrors.name ? "is-valid" : ""
                                }`}
                                name="name"
                                value={formValues.name}
                                onChange={handleOnChange}
                                // onBlur è il contrario dell'onFocus, il secondo è quando entri in quell'elemento, mentre onBlur è quando esci da quell'elemento
                                onBlur={validazioneCampi}
                              />
                              {/* al posto di for usare htmlFor d'ora in poi, che è specifico di react */}
                              <label className="form-label" htmlFor="name">
                                Il tuo nome
                              </label>
                              {/* messaggio di errore quando c'è l'errore */}
                              {formErrors.name && (
                                <p className="help is-danger">
                                  {formErrors.name}
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div
                              data-mdb-input-init
                              className="form-outline flex-fill mb-0"
                            >
                              <input
                                type="email"
                                id="email"
                                className={`form-control ${
                                  formErrors.email ? "is-valid" : ""
                                }`}
                                name="email"
                                value={formValues.email}
                                onChange={handleOnChange}
                                onBlur={validazioneCampi}
                              />
                              <label className="form-label" htmlFor="email">
                                La tua mail
                              </label>
                              {formErrors.email && (
                                <p className="help is-danger">
                                  {formErrors.email}
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div
                              data-mdb-input-init
                              className="form-outline flex-fill mb-0"
                            >
                              <Input.Password
                                type="password"
                                id="password"
                                size="large"
                                className={`${
                                  formErrors.password ? "is-invalid" : ""
                                }`}
                                name="password"
                                value={formValues.password}
                                onChange={handleOnChange}
                                onBlur={validazioneCampi}
                              />
                              <label className="form-label" htmlFor="password">
                                Password
                              </label>
                              {formErrors.password && (
                                <p className="help is-danger">
                                  <ul>
                                    <li>
                                      Il campo password deve contenere un{" "}
                                      <strong>numero</strong>
                                    </li>
                                    <li>una maiuscola</li>
                                    <li>
                                      una minuscola ed un carattere speciale
                                    </li>
                                  </ul>
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                            <div
                              data-mdb-input-init
                              className="form-outline flex-fill mb-0"
                            >
                              <Input.Password
                                size="large"
                                type="password"
                                id="ripetiPassword"
                                className={` ${
                                  formErrors.ripetiPassword ? "is-invalid" : ""
                                }`}
                                name="ripetiPassword"
                                value={formValues.ripetiPassword}
                                onChange={handleOnChange}

                              />
                              <label
                                className="form-label"
                                htmlFor="ripetiPassword"
                              >
                                Ripeti password
                              </label>
                              {formErrors.ripetiPassword && (
                                <p className="help is-danger">
                                  {formErrors.ripetiPassword}
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="form-check d-flex justify-content-center mb-5">
                            <input
                              className={`form-check-input me-2  ${
                                formErrors.accetto ? "is-valid" : ""
                              }`}
                              type="checkbox"
                              name="accetto"
                              value={formValues.accetto}
                              id="accetto"
                              onChange={handleOnChange}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="accetto"
                            >
                              Accetto i termini del contratto
                            </label>
                            {formErrors.accetto && (
                              <p className="help is-danger">
                                {formErrors.accetto}
                              </p>
                            )}
                          </div>

                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                              type="submit"
                              data-mdb-button-init
                              data-mdb-ripple-init
                              className="btn btn-primary btn-lg"
                              disabled={!formValido}
                            >
                              Registrati
                            </button>
                          </div>
                        </form>
                      </div>
                      <div
                        className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2 colonna-dx"
                        style={{
                          backgroundImage: `url(/assets/images/food-vertical.jpeg)`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Contenitore>
    </>
  );
}

const Contenitore = styled.div`
  form {
    p {
      margin-top: -13px;
      color: red;
      font-size: 10px;
    }
  }
  .colonna-dx {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 0 20px 20px 0;
  }

  section {
    margin-top: -15px;
  }
`;
export default RegistrationUser;