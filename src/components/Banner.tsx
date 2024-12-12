import React, { useState } from "react";
import { z } from "zod";
import Button from "./Button";
import FormEmailPage from "./FormEmailPage";

// Esquema de validación con Zod
const bannerSchema = z.object({
  title: z.string().min(1, "El título es obligatorio"),
  description: z.string().optional(),
  buttonText: z.string().optional(),
  bgColor: z.string().min(1, "El color de fondo es obligatorio"),
  inputPlaceholder: z.string().optional(),
  buttonAction: z.function(z.tuple([]), z.void()).optional(), 
  inputValue: z.string().optional(),
});

type BannerProps = z.infer<typeof bannerSchema>;

const Banner: React.FC<BannerProps> = ({
  title,
  description,
  buttonText,
  bgColor,
  inputPlaceholder,
  buttonAction,
  inputValue,
}) => {
  const [input] = useState(inputValue || "");

  const handleSubmit = () => {
    const result = bannerSchema.safeParse({
      title,
      description,
      buttonText,
      bgColor,
      inputValue: input,
    });

    if (!result.success) {
      console.error("Errores de validación:", result.error.errors);
    } else {
      alert("Formulario enviado correctamente!");
    }
  };

  return (
    <div
      className={`${bgColor} p-10 flex flex-col items-center justify-center`}
    >
      <h2 className="text-white py-4 text-3xl md:text-4xl font-bold mt-4 text-center">
        {title}
      </h2>
      {description && (
        <p className="text-white font-medium md:text-lg py-5 px-3 text-center">
          {description}
        </p>
      )}

      {/* Contenedor de Input y Botones */}
      <div className="flex flex-col sm:flex-row justify-center mt-4 items-center">
        {inputPlaceholder && (
          <FormEmailPage className="hidden sm:block" />
        )}

        {buttonText && (
          <Button
            className="bg-white text-purple-500 hover:bg-purple-600 hover:text-white font-medium my-2"
            onClick={handleSubmit}
          >
            {buttonText}
          </Button>
        )}

        {/* Botón adicional*/}
        {buttonAction && (
          <Button
            className="bg-blue-900 hover:bg-white my-2 ml-4 hover:text-blue-900 text-white font-bold"
            onClick={buttonAction}
          >
            Regístrate
          </Button>
        )}
      </div>
    </div>
  );
};

export default Banner;
