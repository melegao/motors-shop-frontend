import { ButtonBase } from "../../../components/Button";
import { InputBase } from "../../../components/Input";
import { StyledForm } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const FormLogin = () => {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    user: yup.string().required("Required field"),
    password: yup.string().required("Password required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), reValidateMode: "onSubmit" });

  const onSubmit = (data: object) => {
    console.log(data);
  };
  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <div className="title--login">
          <h1>Login</h1>
        </div>

        <InputBase
          width="50%"
          type="text"
          label="Usuário"
          placeholder="Digitar usuário"
          register={register}
          name="user"
          error={errors?.user?.message}
        ></InputBase>
        <InputBase
          width="50%"
          type="password"
          label="Senha"
          register={register}
          placeholder="Digitar senha"
          name="password"
          error={errors?.password?.message}
        ></InputBase>

        <ButtonBase
          colorbutton="LightLogin"
          width="50%"
          sizebutton="login"
          type="button"
          onClick={() => {
            console.log("Pagina de Esqueci senha");
          }}
        >
          Esqueci minha senha
        </ButtonBase>
        <ButtonBase type="submit" colorbutton="Brand" width="50%">
          Entrar
        </ButtonBase>
        <p className="text--register">Ainda não possui conta?</p>
        <ButtonBase
          colorbutton="Outline2"
          width="50%"
          type="button"
          onClick={() => navigate("/sign")}
        >
          Cadastrar
        </ButtonBase>
      </StyledForm>
    </>
  );
};
