import { InputBase } from "../Input";
import { Form } from "./styles";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";

function EditSaleForm({ setShowCreateVehicleModal, productId }: any) {
  const [vehicleType, setVehicleType] = useState("cars");

    console.log(productId)

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
    carPhotos?: string[];
    motorcyclePhotos?: string[];
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

    if (vehicleType === "cars") {
      const carPhotos = [photo1];
      if (photo2) {
        carPhotos.push(photo2);
      } else if (photo3) {
        carPhotos.push(photo3);
      } else if (photo4) {
        carPhotos.push(photo4);
      } else if (photo5) {
        carPhotos.push(photo5);
      } else if (photo6) {
        carPhotos.push(photo6);
      }

      const carData = {
        name,
        description,
        km,
        year,
        coverImage,
        price,
        carPhotos,
      };

      api
        .post("/cars", carData)
        .then((res) => {
          toast.success("Anúncio criado com sucesso!");

          setTimeout(() => setShowCreateVehicleModal(false), 2000);
        })
        .catch((err) => {
          console.log(err);
          toast.error("Deu ruim");
        });
    } else {
      const motorcyclePhotos = [photo1];
      if (photo2) {
        motorcyclePhotos.push(photo2);
      } else if (photo3) {
        motorcyclePhotos.push(photo3);
      } else if (photo4) {
        motorcyclePhotos.push(photo4);
      } else if (photo5) {
        motorcyclePhotos.push(photo5);
      } else if (photo6) {
        motorcyclePhotos.push(photo6);
      }

      const motorcycleData = {
        name,
        description,
        km,
        year,
        coverImage,
        price,
        motorcyclePhotos,
      };

      api
        .post("/motorcycles", motorcycleData)
        .then((res) => {
          toast.success("Anúncio criado com sucesso!");

          setTimeout(() => setShowCreateVehicleModal(false), 2000);
        })
        .catch((err) => {
          console.log(err);
          toast.error("Deu ruim");
        });
    }
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
            className={vehicleType === "cars" ? "selected" : "notSelected"}
            type="button"
            onClick={() => setVehicleType("cars")}
          >
            Carro
          </button>
          <button
            className={vehicleType === "cars" ? "notSelected" : "selected"}
            type="button"
            onClick={() => setVehicleType("motorcycles")}
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

export default EditSaleForm;
