import { ButtonBase } from "../../../components/Button";
import { InputBase } from "../../../components/Input";
import { StyledForm } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { IFormSignIn } from "../../../interfaces/successModal.interfaces";
import { IUserRequest } from "../../../interfaces/user.interface";
import api from "../../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const FormSignIn: React.FC<IFormSignIn> = ({ setShowSuccessModal }) => {
  const navigate = useNavigate();
  const [isBuyer, setIsBuyer] = useState(false);
  const [isSellerColor, setIsSellerColor] = useState(false);

  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required("Campo obrigatório")
      .matches(/^[aA-zZ\s]+$/, "Apenas letras são permitidas"),
    email: yup.string().email().required("Campo obrigatório"),
    cpf: yup
      .string()
      .required("Campo obrigatório")
      .matches(
        /([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})/,
        "invalid CPF"
      ),
    cellPhone: yup
      .string()
      .required("Campo obrigatório")
      .matches(
        /^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/,
        "invalid phone number"
      ),
    birthDate: yup
      .string()
      .required("Campo obrigatório")
      .typeError("Digite uma data válida"),
    zipCode: yup
      .string()
      .required("Campo obrigatório")
      .matches(/^[0-9]{5}[-]?[0-9]{3}$/, "CEP inválido"),
    state: yup
      .string()
      .required("Campo obrigatório")
      .matches(/^[aA-zZ\s]+$/, "Apenas letras são permitidas")
      .max(2, "Digite apenas a sigla"),
    city: yup.string().required("Campo obrigatório"),
    street: yup.string().required("Campo obrigatório"),
    number: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório").min(4),
    passwordConfirm: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password")], "Senhas diferentes"),
    isSeller: yup.boolean().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data: any) => {
    const {
      birthDate,
      cellPhone,
      city,
      cpf,
      email,
      fullName,
      isSeller,
      number,
      password,
      state,
      street,
      zipCode,
      complement,
      description,
    } = data;

    const newUserObj: IUserRequest = {
      fullName,
      email,
      cpf,
      cellPhone,
      birthDate,
      description,
      isSeller,
      password,
      address: { street, number, complement, zipCode, city, state },
    };

    api
      .post("users", newUserObj)
      .then((res) => {
        setShowSuccessModal(true);

        setTimeout(() => navigate("/login"), 3000);
      })
      .catch((err) => {
        if (err.response.data.message === "This email already exist.") {
          toast.error("Email já cadastrado.");
        }

        if (err.response.data.message === "This CPF already exist.") {
          toast.error("CPF já cadastrado.");
        }
      });
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <div className="title--signIn">
          <h1>Cadastro</h1>
        </div>
        <div className="subTitle">
          <h2>Infomações pessoais</h2>
        </div>
        <InputBase
          width="50%"
          type="text"
          label="Nome"
          placeholder="Ex: Samuel Leão"
          register={register}
          name="fullName"
          error={errors?.fullName?.message}
        ></InputBase>

        <InputBase
          width="50%"
          type="text"
          label="Email"
          placeholder="Ex: samuel@kenzie.com.br "
          register={register}
          name="email"
          error={errors?.email?.message}
        ></InputBase>

        <InputBase
          width="50%"
          type="text"
          label="CPF"
          placeholder="000.000.000-00"
          register={register}
          name="cpf"
          error={errors?.cpf?.message}
        ></InputBase>

        <InputBase
          width="50%"
          type="text"
          label="Celular"
          placeholder="(DDD) 90000-0000"
          register={register}
          name="cellPhone"
          error={errors?.cellPhone?.message}
        ></InputBase>

        <InputBase
          width="50%"
          type="date"
          label="Data de nascimento"
          register={register}
          name="birthDate"
          error={errors?.birthDate?.message}
        ></InputBase>

        <div className="description">
          <label>Descrição</label>
          <textarea
            placeholder="Digitar descrição"
            {...register("description")}
          ></textarea>
        </div>

        <div className="subTitle">
          <h2>Infomações de endereço</h2>
        </div>

        <InputBase
          width="50%"
          type="text"
          label="CEP"
          placeholder="00000.000"
          register={register}
          name="zipCode"
          error={errors?.zipCode?.message}
        ></InputBase>

        <InputBase
          width="50%"
          type="text"
          label="Estado"
          placeholder="Digitar sigla do Estado"
          register={register}
          name="state"
          error={errors?.state?.message}
        ></InputBase>

        <InputBase
          width="50%"
          type="text"
          label="Cidade"
          placeholder="Digitar cidade"
          register={register}
          name="city"
          error={errors?.city?.message}
        ></InputBase>

        <InputBase
          width="50%"
          type="text"
          label="Rua"
          register={register}
          placeholder="Digitar Rua"
          name="street"
          error={errors?.street?.message}
        ></InputBase>

        <InputBase
          width="50%"
          type="text"
          label="Número"
          register={register}
          placeholder="Digitar número"
          name="number"
          error={errors?.number?.message}
        ></InputBase>

        <InputBase
          width="50%"
          type="text"
          label="Complemento"
          register={register}
          placeholder="Ex: apart 307"
          name="complement"
        ></InputBase>

        <div className="subTitle">
          <h2>Tipo de conta</h2>
        </div>

        <div className="button--box">
          <ButtonBase
            type="button"
            width="24%"
            colorbutton={isBuyer ? "Brand" : "-"}
            onClick={() => {
              setIsBuyer(true);
              setIsSellerColor(false);
              setValue("isSeller", false);
            }}
          >
            Comprador
          </ButtonBase>

          <ButtonBase
            type="button"
            width="24%"
            colorbutton={isSellerColor ? "Brand" : "-"}
            onClick={() => {
              setIsSellerColor(true);
              setIsBuyer(false);
              setValue("isSeller", true);
            }}
          >
            Anuciante
          </ButtonBase>

          {errors?.buyer !== undefined && (
            <div className="label--error">
              <label>
                <p>Campo obrigatório</p>
              </label>
            </div>
          )}
        </div>
        <InputBase
          width="50%"
          type="password"
          label="Senha"
          register={register}
          placeholder="Digitar senha"
          name="password"
          error={errors?.password?.message}
        ></InputBase>

        <InputBase
          width="50%"
          type="password"
          label="Confirmar Senha"
          register={register}
          placeholder="Digitar senha"
          name="passwordConfirm"
          error={errors?.passwordConfirm?.message}
        ></InputBase>

        <ButtonBase type="submit" colorbutton="Brand" width="50%">
          Finalizar cadastro
        </ButtonBase>
      </StyledForm>
    </>
  );
};
