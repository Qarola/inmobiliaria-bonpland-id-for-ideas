import React from 'react';
import { useFormik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import 'tailwindcss/tailwind.css';

interface SellerContact {
  contact: string;
  other_info: string;
  webpage: string;
  area_code: string;
  phone: string;
  area_code2: string;
  phone2: string;
  email: string;
}

interface PropertyFormValues {
  titlePost: string;
  propertyType: string;
  rooms: number;
  bathrooms: number;
  country: string;
  city: string;
  state: string;
  coveredArea: number;
  price: number;
  status: string;
  contractType: string;
  reference: string;
  images: File[];
  address: string;
  featuredProperties: string;
  sellerContact: SellerContact;
}

const CreatePropertyForm: React.FC = () => {
  const formik = useFormik<PropertyFormValues>({
    initialValues: {
      titlePost: '',
      propertyType: '',
      rooms: 0,
      bathrooms: 0,
      country: '',
      city: '',
      state: '',
      coveredArea: 0,
      price: 0,
      status: '',
      contractType: '',
      reference: '',
      images: [],
      address: '',
      featuredProperties: '',
      sellerContact: {
        contact: '',
        other_info: '',
        webpage: '',
        area_code: '',
        phone: '',
        area_code2: '',
        phone2: '',
        email: '',
      },
    },
    validationSchema: Yup.object({
      titlePost: Yup.string().required('Required'),
      propertyType: Yup.string().required('Required'),
      rooms: Yup.number().required('Required').min(0, 'Rooms must be 0 or more'),
      bathrooms: Yup.number().required('Required').min(0, 'Bathrooms must be 0 or more'),
      country: Yup.string().required('Required'),
      city: Yup.string().required('Required'),
      state: Yup.string().required('Required'),
      coveredArea: Yup.number().required('Required').min(0, 'Covered area must be 0 or more'),
      price: Yup.number().required('Required').min(0, 'Price must be 0 or more'),
      status: Yup.string().required('Required'),
      contractType: Yup.string().required('Required'),
      reference: Yup.string().required('Required'),
      address: Yup.string().required('Required'),
      featuredProperties: Yup.string().required('Required'),
      sellerContact: Yup.object({
        contact: Yup.string().required('Required'),
      }),
    }),
    onSubmit: async (values: PropertyFormValues, { setSubmitting }: FormikHelpers<PropertyFormValues>) => {
      try {
        console.log('Form Values:', values); //console.log para ver los valores del formulario

        const formData = new FormData();
Object.keys(values).forEach(key => {
  if (key === 'images') {
    (values.images as File[]).forEach((file: File) => {
      formData.append('images', file);
    });
  } else if (key === 'sellerContact') {
    formData.append(key, JSON.stringify(values.sellerContact));
  } else {
    formData.append(key, (values as any)[key]);
  }
});


        const response = await axios.post('https://inmobiliaria-bonpland-id-for-ideas.onrender.com/api/properties/create', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });

        if (response.status === 201) {
          alert('¡Inmueble creado exitosamente!');
        }
      } catch (error: any) {
        console.error('Error al crear el inmueble:', error);

        if (error.response) {
          // El servidor respondió con un estado distinto a 2xx
          console.error('Data:', error.response.data);
          console.error('Status:', error.response.status);
          console.error('Headers:', error.response.headers);
          alert(`Error al crear el inmueble: ${error.response.data.message || 'Ocurrió un error inesperado'}`);
        } else if (error.request) {
          // La solicitud fue hecha pero no hubo respuesta
          console.error('Request:', error.request);
          alert('No se recibió respuesta del servidor.');
        } else {
          // Algo pasó al preparar la solicitud
          console.error('Error:', error.message);
          alert(`Error al crear el inmueble: ${error.message}`);
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  const renderError = (error: string | string[] | undefined) => {
    if (Array.isArray(error)) {
      return error.map((err, index) => (
        <div key={index} className="text-red-500 text-sm">{err}</div>
      ));
    } else if (error) {
      return <div className="text-red-500 text-sm">{error}</div>;
    }
    return null;
  };

    return (
    <div className="flex flex-col justify-center items-center m-5">
        <h1 className="text-2xl font-bold mb-4">Crear Nuevo Inmueble</h1>
        <form onSubmit={formik.handleSubmit} className="max-w-lg mx-auto p-4 bg-white rounded shadow-md">
            <h1 className="text-2xl font-bold mb-4 pb-5">Datos del inmueble</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Campo para el título del post */}
              <div className="mb-4">
                <label htmlFor="titlePost" className="block text-sm font-medium text-gray-700">Título del Post</label>
                <input
                  id="titlePost"
                  name="titlePost"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.titlePost}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                 />
                {formik.touched.titlePost && formik.errors.titlePost ? renderError(formik.errors.titlePost) : null}
              </div>

              {/* Campo para el tipo de propiedad */}
              <div className="mb-4">
                <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700">Tipo de Propiedad</label>
                <input
                  id="propertyType"
                  name="propertyType"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.propertyType}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
                {formik.touched.propertyType && formik.errors.propertyType ? renderError(formik.errors.propertyType) : null}
              </div>

              {/* Campo para el número de habitaciones */}
              <div className="mb-4">
                <label htmlFor="rooms" className="block text-sm font-medium text-gray-700">Número de Habitaciones</label>
                <input
                  id="rooms"
                  name="rooms"
                  type="number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.rooms}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
                {formik.touched.rooms && formik.errors.rooms ? renderError(formik.errors.rooms) : null}
              </div>

              {/* Campo para el número de baños */}
              <div className="mb-4">
                <label htmlFor="bathrooms" className="block text-sm font-medium text-gray-700">Número de Baños</label>
                <input
                  id="bathrooms"
                  name="bathrooms"
                  type="number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.bathrooms}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
                {formik.touched.bathrooms && formik.errors.bathrooms ? renderError(formik.errors.bathrooms) : null}
              </div>

              {/* Campo para el país */}
              <div className="mb-4">
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">País</label>
                <input
                  id="country"
                  name="country"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.country}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
                {formik.touched.country && formik.errors.country ? renderError(formik.errors.country) : null}
              </div>

              {/* Campo para la ciudad */}
              <div className="mb-4">
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">Ciudad</label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.city}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
                {formik.touched.city && formik.errors.city ? renderError(formik.errors.city) : null}
              </div>

              {/* Campo para el estado */}
              <div className="mb-4">
                <label htmlFor="state" className="block text-sm font-medium text-gray-700">Estado</label>
                <input
                  id="state"
                  name="state"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.state}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
                {formik.touched.state && formik.errors.state ? renderError(formik.errors.state) : null}
              </div>

              {/* Campo para el área cubierta */}
              <div className="mb-4">
                <label htmlFor="coveredArea" className="block text-sm font-medium text-gray-700">Área Cubierta (m²)</label>
                <input
                  id="coveredArea"
                  name="coveredArea"
                  type="number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.coveredArea}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
                {formik.touched.coveredArea && formik.errors.coveredArea ? renderError(formik.errors.coveredArea) : null}
              </div>

              {/* Campo para el precio */}
              <div className="mb-4">
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">Precio</label>
                <input
                  id="price"
                  name="price"
                  type="number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.price}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
                {formik.touched.price && formik.errors.price ? renderError(formik.errors.price) : null}
              </div>

              {/* Campo para el estado del inmueble */}
              <div className="mb-4">
                <label htmlFor="status" className="block text-sm font-medium text-gray-700">Estado del Inmueble</label>
                <input
                  id="status"
                  name="status"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.status}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
                {formik.touched.status && formik.errors.status ? renderError(formik.errors.status) : null}
              </div>

              {/* Campo para el tipo de contrato */}
              <div className="mb-4">
                <label htmlFor="contractType" className="block text-sm font-medium text-gray-700">Tipo de Contrato</label>
                <input
                  id="contractType"
                  name="contractType"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.contractType}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
                {formik.touched.contractType && formik.errors.contractType ? renderError(formik.errors.contractType) : null}
              </div>

              {/* Campo para la referencia */}
              <div className="mb-4">
                <label htmlFor="reference" className="block text-sm font-medium text-gray-700">Referencia</label>
                <input
                  id="reference"
                  name="reference"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.reference}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
                {formik.touched.reference && formik.errors.reference ? renderError(formik.errors.reference) : null}
              </div>

              {/* Campo para la dirección */}
              <div className="mb-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Dirección</label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.address}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
                {formik.touched.address && formik.errors.address ? renderError(formik.errors.address) : null}
              </div>

            {/* Campo para propiedades destacadas */}
            <div className="mb-4">
              <label htmlFor="featuredProperties" className="block text-sm font-medium text-gray-700">Propiedad Destacada</label>
              <input
                id="featuredProperties"
                name="featuredProperties"
                type="text" // Cambiar el tipo según el nuevo tipo de datos
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.featuredProperties}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
              {formik.touched.featuredProperties && formik.errors.featuredProperties ? renderError(formik.errors.featuredProperties) : null}
            </div>




          {/* Campos para el contacto del vendedor */}
        </div>
            <div className="flex flex-col w-[100%] pt-5 pb-5">
                <h1 className="text-2xl font-bold mb-4">Datos del propietario</h1>
            </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-4">
                <label htmlFor="sellerContact.contact" className="block text-sm font-medium text-gray-700">Contacto del Vendedor</label>
                <input
                    id="sellerContact.contact"
                    name="sellerContact.contact"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.sellerContact.contact}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                 />
                    {formik.touched.sellerContact?.contact && formik.errors.sellerContact?.contact ? renderError(formik.errors.sellerContact.contact) : null}
                </div>

            <div className="mb-4">
              <label htmlFor="sellerContact.other_info" className="block text-sm font-medium text-gray-700">Otra información del Vendedor</label>
              <input
                id="sellerContact.other_info"
                name="sellerContact.other_info"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.sellerContact.other_info}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
              {formik.touched.sellerContact?.other_info && formik.errors.sellerContact?.other_info ? renderError(formik.errors.sellerContact.other_info) : null}
            </div>

            <div className="mb-4">
              <label htmlFor="sellerContact.webpage" className="block text-sm font-medium text-gray-700">Página Web del Vendedor</label>
              <input
                id="sellerContact.webpage"
                name="sellerContact.webpage"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.sellerContact.webpage}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
              {formik.touched.sellerContact?.webpage && formik.errors.sellerContact?.webpage ? renderError(formik.errors.sellerContact.webpage) : null}
            </div>

            <div className="mb-4">
              <label htmlFor="sellerContact.area_code" className="block text-sm font-medium text-gray-700">Código de Área del Vendedor</label>
              <input
                id="sellerContact.area_code"
                name="sellerContact.area_code"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.sellerContact.area_code}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
              {formik.touched.sellerContact?.area_code && formik.errors.sellerContact?.area_code ? renderError(formik.errors.sellerContact.area_code) : null}
            </div>

            <div className="mb-4">
              <label htmlFor="sellerContact.phone" className="block text-sm font-medium text-gray-700">Teléfono del Vendedor</label>
              <input
                id="sellerContact.phone"
                name="sellerContact.phone"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.sellerContact.phone}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
              {formik.touched.sellerContact?.phone && formik.errors.sellerContact?.phone ? renderError(formik.errors.sellerContact.phone) : null}
            </div>

            <div className="mb-4">
              <label htmlFor="sellerContact.area_code2" className="block text-sm font-medium text-gray-700">Segundo Código de Área del Vendedor</label>
              <input
                id="sellerContact.area_code2"
                name="sellerContact.area_code2"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.sellerContact.area_code2}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
              {formik.touched.sellerContact?.area_code2 && formik.errors.sellerContact?.area_code2 ? renderError(formik.errors.sellerContact.area_code2) : null}
            </div>

            <div className="mb-4">
              <label htmlFor="sellerContact.phone2" className="block text-sm font-medium text-gray-700">Segundo Teléfono del Vendedor</label>
              <input
                id="sellerContact.phone2"
                name="sellerContact.phone2"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.sellerContact.phone2}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
              {formik.touched.sellerContact?.phone2 && formik.errors.sellerContact?.phone2 ? renderError(formik.errors.sellerContact.phone2) : null}
            </div>

            <div className="mb-4">
              <label htmlFor="sellerContact.email" className="block text-sm font-medium text-gray-700">Correo Electrónico del Vendedor</label>
              <input
                id="sellerContact.email"
                name="sellerContact.email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.sellerContact.email}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
              {formik.touched.sellerContact?.email && formik.errors.sellerContact?.email ? renderError(formik.errors.sellerContact.email) : null}
            </div>
            {/* Campo para las imágenes */}
            <div className="mb-4">
                <label htmlFor="images" className="block text-sm font-medium text-gray-700">Imágenes</label>
                <input
                  id="images"
                  name="images"
                  type="file"
                  multiple
                  onChange={(event) => {
                    const files = (event.target as HTMLInputElement).files;
                    if (files) {
                      formik.setFieldValue('images', Array.from(files));
                    }
                  }}
                  onBlur={formik.handleBlur}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
                {formik.touched.images && formik.errors.images ? renderError(formik.errors.images as string | string[] | undefined) : null}
            </div>

              {/* Botón de envío */}
              <div className="mb-4 md:col-span-2 flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-14 rounded hover:bg-blue-700"
                >
                  Crear Inmueble
                </button>
              </div>
            </div>
        </form>
    </div>
  );
};
export default CreatePropertyForm;
