import { InputBase } from "../Input";
import { Form } from "./styles";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

function SaleForm({ setShowCreateVehicleModal }: any) {
  const formSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
    km: yup.number().required("Campo obrigatório"),
    year: yup.number().required("Campo obrigatório"),
    coverImage: yup.string().required("Campo obrigatório"),
    price: yup.number().required("Campo obrigatório"),
    photo1: yup.string().required("Campo obrigatório"),
    photo2: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmit = (data: object) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputBase
        width="100%"
        type="text"
        label="Título"
        placeholder="Digitar título"
        register={register}
        name="name"
        error={errors?.name?.message}
      />
      <div className="flex-row">
        <InputBase
          width="100%"
          type="number"
          label="Ano"
          placeholder="2018"
          register={register}
          name="year"
          error={errors?.year?.message}
        />
        <InputBase
          width="100%"
          type="text"
          label="Quilometragem"
          placeholder="0"
          register={register}
          name="km"
          error={errors?.km?.message}
        />
      </div>
      <InputBase
        width="100%"
        type="number"
        label="Preço"
        placeholder="50.000,00"
        register={register}
        name="price"
        error={errors?.price?.message}
      />

      <div className="description">
        <label>Descrição</label>
        <textarea placeholder="Digitar descrição"></textarea>
      </div>

      <div className="choose-vehicle">
        <p>Tipo de veículo</p>
        <div className="buttons">
          <button type="button">Carro</button>
          <button type="button">Moto</button>
        </div>
      </div>

      <InputBase
        width="100%"
        type="text"
        label="Imagem da capa"
        placeholder="http://image.com"
        register={register}
        name="coverImage"
        error={errors?.coverImage?.message}
      />

      <InputBase
        width="100%"
        type="text"
        label="1ª Imagem da galeria"
        placeholder="http://image.com"
        register={register}
        name="photo1"
        error={errors?.photo1?.message}
      />

      <InputBase
        width="100%"
        type="text"
        label="2ª Imagem da galeria"
        placeholder="http://image.com"
        register={register}
        name="photo2"
        error={errors?.photo2?.message}
      />

      <div className="final-buttons">
        <button
          className="cancel"
          type="button"
          onClick={() => setShowCreateVehicleModal(false)}
        >
          Cancelar
        </button>
        <button className="create" type="submit">
          Criar anúncio
        </button>
      </div>
    </Form>
  );
}

export default SaleForm;
