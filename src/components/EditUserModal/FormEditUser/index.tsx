import { ButtonBase } from "../../../components/Button";
import { InputBase } from "../../../components/Input";
import { StyledForm } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { IModal } from "../../../interfaces/showModal.interfaces";

export const FormEditUser: React.FC<IModal> = ({
  setShowModal,
  setShowSuccessModal,
}) => {
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
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), reValidateMode: "onSubmit" });

  const onSubmit = (data: object) => {
    console.log(data);
    setShowModal(false);
    setShowSuccessModal(true);
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
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

        <div className="button--box">
          <ButtonBase
            type="button"
            colorbutton="Negative"
            width="40%"
            onClick={() => setShowModal(false)}
          >
            Cancelar
          </ButtonBase>

          <ButtonBase type="submit" colorbutton="Brand" width="60%">
            Salvar alterações
          </ButtonBase>
        </div>
      </StyledForm>
    </>
  );
};
