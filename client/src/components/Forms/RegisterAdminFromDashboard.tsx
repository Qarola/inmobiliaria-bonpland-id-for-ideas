import axios from "axios";
import { SubmitHandler, FieldValues } from "react-hook-form";

// Configuración global de Axios para incluir cookies en las solicitudes
axios.defaults.withCredentials = true;

const AdminRegisterFromDashboard: SubmitHandler<FieldValues> = async (
  d: object
) => {
  // Agregar rol 'admin' a los datos del formulario
  const data = { ...d, role: "admin" };
  try {
    // Realizar la solicitud POST
    const response = await axios.post(
      "https://inmobiliaria-bonpland-id-for-ideas.onrender.com/users/admin/register",
      data,
      {
        headers: {
          "Content-Type": "application/json", // Asegurarse de que se envíen los datos correctamente
        },
        withCredentials: true, // Asegura que las cookies se envíen con la solicitud
      }
    );

    // Manejo de la respuesta exitosa
    console.log("Respuesta exitosa:", response.data.data);
  } catch (error) {
    // Asumimos que 'error' es de tipo 'any' para simplificar
    const err = error as any;

    // Manejo de errores
    if (axios.isAxiosError(err)) {
      // Error relacionado con Axios
      console.error("Error de Axios:", err.message);
      if (err.response) {
        // El servidor respondió con un código de estado que no está en el rango 2xx
        console.error("Estado de respuesta:", err.response.status);
        console.error("Datos de respuesta:", err.response.data);
      } else if (err.request) {
        // La solicitud se hizo pero no hubo respuesta
        console.error("No se recibió respuesta:", err.request);
      } else {
        // Algo sucedió al configurar la solicitud
        console.error("Error al configurar la solicitud:", err.message);
      }
    } else {
      // Error no relacionado con Axios
      console.error("Error desconocido:", err);
    }

    // Registro de los datos enviados para referencia
    console.log("Datos enviados:", data);
  }
};
export default AdminRegisterFromDashboard;



/* const enviar: SubmitHandler<FieldValues> = (d: object) => {
        const data: object = { ...d, role: 'admin'};
        const token = localStorage.getItem('token')  <--- No guaradr el token en el localstorage por razones de seguridad, en su lugar, usar cookies con banderas de seguridad.
        axios.post(
            'https://inmobiliaria-bonpland-id-for-ideas.onrender.com/users/admin/register',data,
            {
                headers: {
                    Authorization: Bearer ${token},   <--- Faltan las backtick en `Bearer ${token}`
                },
            })
        .then(response => {
            console.log(response.data.data)
        })
        .catch(error=>{
            console.log(error, data)
        })

    };

    ⚠ Es importante comprobar si token no es null antes de hacer la solicitud.
 */
