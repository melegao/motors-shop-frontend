import { ButtonBase } from "../../../components/Button";
import { InputBase } from "../../../components/Input";
import { StyledForm } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";
import { toast } from "react-toastify";
import { useVehicleContext } from "../../../context/ProductContext";

export const FormLogin = () => {
  const { setLogged, setUser } = useVehicleContext();

  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().required("Required field"),
    password: yup.string().required("Password required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), reValidateMode: "onSubmit" });

  const onSubmit = (data: object) => {
    api
      .post("login", data)
      .then((res) => handleSuccess(res.data))
      .catch((err) => handleFailed());
  };

  interface DataLogin {
    isSeller: boolean;
    token: string;
    userId: string;
  }

  const handleSuccess = (data: DataLogin) => {
    toast.success("Login efetuado com sucesso");
    localStorage.setItem("@motorsShop:token", data.token);
    localStorage.setItem("@motorsShop:userId", data.userId);
    localStorage.setItem("@motorsShop:isSeller", JSON.stringify(data.isSeller));

    api
      .get(`users/${data.userId}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.log("Tente novamente mais tarde."));

    setTimeout(() => {
      setLogged(true);

      data.isSeller ? navigate("/admin") : navigate("/");
    }, 2000);
  };

  const handleFailed = () => {
    toast.error("E-mail ou senha inválido");
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <div className="title--login">
          <h1>Login</h1>
        </div>

        <InputBase
          width="75%"
          type="text"
          label="Usuário"
          placeholder="Digitar usuário"
          register={register}
          name="email"
          error={errors?.email?.message}
        ></InputBase>
        <InputBase
          width="75%"
          type="password"
          label="Senha"
          register={register}
          placeholder="Digitar senha"
          name="password"
          error={errors?.password?.message}
        ></InputBase>

        <ButtonBase
          colorbutton="LightLogin"
          width="75%"
          sizebutton="login"
          type="button"
          onClick={() => toast.error("Esqueceu a senha?")}
        >
          Esqueci minha senha
        </ButtonBase>
        <ButtonBase type="submit" colorbutton="Brand" width="75%">
          Entrar
        </ButtonBase>
        <p className="text--register">Ainda não possui conta?</p>
        <ButtonBase
          colorbutton="Outline2"
          width="75%"
          type="button"
          onClick={() => navigate("/sign")}
        >
          Cadastrar
        </ButtonBase>
      </StyledForm>
    </>
  );
};
