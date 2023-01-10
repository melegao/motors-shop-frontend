import { ButtonBase } from "../../Button";
import { InputBase } from "../../Input";
import { StyledForm } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { IModal } from "../../../interfaces/showModal.interfaces";
import { useState } from "react";

export const FormEditAddress: React.FC<IModal> = ({
  setShowModal,
  setShowSuccessModal,
}) => {
  const [state, setState] = useState(false);

  const schema = yup.object().shape({
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
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), reValidateMode: "onSubmit" });

  const onSubmit = (data: object) => {
    setShowModal(false);
    setShowSuccessModal(true);
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
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

        <div
          className="city--infos"
          onChange={() => {
            setState(true);
          }}
        >
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
        </div>

        <InputBase
          width="50%"
          type="text"
          label="Rua"
          register={register}
          placeholder="Digitar Rua"
          name="street"
          error={errors?.street?.message}
        ></InputBase>

        <div className="number--infos">
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

          <ButtonBase
            type="submit"
            colorbutton={state ? "Brand" : "BrandDisable"}
            width="60%"
          >
            Salvar alterações
          </ButtonBase>
        </div>
      </StyledForm>
    </>
  );
};
