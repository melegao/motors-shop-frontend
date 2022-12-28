import { ButtonBase } from "../../../components/Button";
import { InputBase } from "../../../components/Input";
import { StyledForm } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { IModalSuccess } from "../../../interfaces/successModal.interfaces";

export const FormSignIn: React.FC<IModalSuccess> = ({
  setShowSuccessModal,
}) => {
  const [isBuyer, setIsBuyer] = useState(false);
  const [isSeller, setIsSeller] = useState(false);

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Required field")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    email: yup.string().email().required("Required field"),
    cpf: yup
      .string()
      .required("Required field")
      .matches(
        /([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})/,
        "invalid CPF"
      ),
    phone: yup
      .string()
      .required("Required field")
      .matches(
        /^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/,
        "invalid phone number"
      ),
    birthday: yup
      .date()
      .required("Required field")
      .typeError("Please enter a valid date")
      .max(
        `${new Date().getUTCFullYear() - 18}-${
          new Date().getUTCMonth() + 1
        }-${new Date().getDate()}`,
        "You are not 18 years old"
      ),
    cep: yup
      .string()
      .required("Required field")
      .matches(/^[0-9]{5}[-]?[0-9]{3}$/, "CEP inválido"),
    state: yup
      .string()
      .required("Required field")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    city: yup
      .string()
      .required("Required field")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    street: yup.string().required("Required field"),
    number: yup
      .number()
      .required("Required field")
      .typeError("Please enter a valid number"),
    password: yup.string().required("Required field").min(8),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")])
      .required("Required field"),
    buyer: yup.boolean().required("Required field"),
    seller: yup.boolean().required("Required field"),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), reValidateMode: "onSubmit" });

  const onSubmit = (data: object) => {
    console.log(data);
    setShowSuccessModal(true);
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
          name="name"
          error={errors?.name?.message}
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
          name="phone"
          error={errors?.phone?.message}
        ></InputBase>

        <InputBase
          width="50%"
          type="date"
          label="Data de nascimento"
          register={register}
          name="birthday"
          error={errors?.birthday?.message}
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
          name="cep"
          error={errors?.cep?.message}
        ></InputBase>

        <InputBase
          width="50%"
          type="text"
          label="Estado"
          placeholder="Digitar Estado"
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
          name="inAdd"
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
              setIsSeller(false);
              setValue("buyer", true);
              setValue("seller", false);
            }}
          >
            Comprador
          </ButtonBase>

          <ButtonBase
            type="button"
            width="24%"
            colorbutton={isSeller ? "Brand" : "-"}
            onClick={() => {
              setIsSeller(true);
              setIsBuyer(false);
              setValue("seller", true);
              setValue("buyer", false);
            }}
          >
            Anuciante
          </ButtonBase>

          {errors?.buyer !== undefined && (
            <div className="label--error">
              <label>
                <p>Required field</p>
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
