import { InputBase } from "../Input";
import { Form } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";

function SaleForm({ setShowCreateVehicleModal }: any) {
  const [vehicleType, setVehicleType] = useState("car");

  const userToken = localStorage.getItem("@motorsShop:token");

  const formSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
    km: yup
      .string()
      .required("Campo obrigatório")
      .matches(
        /^[0-9]+(?:-[0-9]+)?(,[0-9]+(?:-[0-9]+)?)*/,
        "Insira apenas números"
      ),
    year: yup
      .string()
      .required("Campo obrigatório")
      .matches(/^(?=.*[0-9])(?=.{4,})/, "Insira apenas 4 números"),
    coverImage: yup.string().required("Campo obrigatório"),
    price: yup.string().required("Campo obrigatório"),
    photo1: yup.string().required("Campo obrigatório"),
    photo2: yup.string(),
    photo3: yup.string(),
    photo4: yup.string(),
    photo5: yup.string(),
    photo6: yup.string(),
  });

  interface IVehicleRegister {
    name: string;
    description: string;
    km: number;
    year: number;
    coverImage: string;
    price: number;
    type: string;
    vehiclePhotos?: string[];
    photo1: string;
    photo2?: string;
    photo3?: string;
    photo4?: string;
    photo5?: string;
    photo6?: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IVehicleRegister>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data: IVehicleRegister) => {
    const {
      coverImage,
      description,
      km,
      name,
      price,
      year,
      photo1,
      photo2,
      photo3,
      photo4,
      photo5,
      photo6,
    } = data;

    const vehiclePhotos = [photo1];
    if (photo2) {
      vehiclePhotos.push(photo2);
    }
    if (photo3) {
      vehiclePhotos.push(photo3);
    }
    if (photo4) {
      vehiclePhotos.push(photo4);
    }
    if (photo5) {
      vehiclePhotos.push(photo5);
    }
    if (photo6) {
      vehiclePhotos.push(photo6);
    }

    const vehicleData = {
      name,
      description,
      km,
      year,
      coverImage,
      price,
      type: vehicleType,
      vehiclePhotos,
    };

    api
      .post("/vehicles", vehicleData, {
        headers: { Authorization: `Bearer ${userToken}` },
      })
      .then((res) => {
        toast.success("Anúncio criado com sucesso!");

        setTimeout(() => setShowCreateVehicleModal(false), 2000);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Algo deu errado");
      });
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
          type="text"
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
        type="text"
        label="Preço"
        placeholder="50.000,00"
        register={register}
        name="price"
        error={errors?.price?.message}
      />

      <div className="description">
        <label>Descrição</label>
        <textarea
          placeholder="Digitar descrição"
          {...register("description")}
        ></textarea>
        {errors?.description?.message && (
          <div className="label--error">
            <label>
              <p>{errors?.description?.message}</p>
            </label>
          </div>
        )}
      </div>

      <div className="choose-vehicle">
        <p>Tipo de veículo</p>
        <div className="buttons">
          <button
            className={vehicleType === "car" ? "selected" : "notSelected"}
            type="button"
            onClick={() => setVehicleType("car")}
          >
            Carro
          </button>
          <button
            className={vehicleType === "car" ? "notSelected" : "selected"}
            type="button"
            onClick={() => setVehicleType("motorcycle")}
          >
            Moto
          </button>
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

      <InputBase
        width="100%"
        type="text"
        label="3ª Imagem da galeria"
        placeholder="http://image.com"
        register={register}
        name="photo3"
        error={errors?.photo3?.message}
      />

      <InputBase
        width="100%"
        type="text"
        label="4ª Imagem da galeria"
        placeholder="http://image.com"
        register={register}
        name="photo4"
        error={errors?.photo4?.message}
      />

      <InputBase
        width="100%"
        type="text"
        label="5ª Imagem da galeria"
        placeholder="http://image.com"
        register={register}
        name="photo5"
        error={errors?.photo5?.message}
      />

      <InputBase
        width="100%"
        type="text"
        label="6ª Imagem da galeria"
        placeholder="http://image.com"
        register={register}
        name="photo6"
        error={errors?.photo6?.message}
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
