'use client';
import React from 'react';
import { GoArrowRight } from "react-icons/go";



const NavbarComponent = () => {

    const handlePay = async (packageName, totalPrice, imageProduct) => {
        console.log(`**Paquete Seleccionado:** ${packageName}`);
        console.log(`**Precio Total:** $${totalPrice}`);
    
        try {
            const product = { 
                name: packageName, 
                price: totalPrice,
                image: imageProduct
            };
    
            const res = await fetch('/api/checkout', {
                method: 'POST',
                body: JSON.stringify(product),
                headers: {
                    "Content-Type": "application/json"
                }
            });
    
            const session = await res.json(); 
            window.location = session.url; 
    
        } catch (error) {
            console.error("Error during checkout:", error);
            // Handle the error, e.g., display an error message to the user
        }
    };
    
      

  return (
    <>
     
        <main className="max-w-6xl mx-auto pt-10 pb-36 px-8">
        
        <div className=" mx-auto mb-14 text-center">
            <h1 className="text-4xl font-semibold mb-6 lg:text-6xl"><span className="text-blueprimary">Paquetes </span> Flexibles</h1>
            <p className="text-xl text-gray-100 ">Elige el paquete que mejor se adapte a las necesidades de tu implementación Odoo</p>
        </div>
        
        <div className="flex flex-col justify-between items-center lg:flex-row lg:items-start">
            
            <div className="w-full flex-1 mt-8 p-8 order-1 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-1 lg:rounded-r-none">
            <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
                <img src="https://res.cloudinary.com/dn5cltdre/image/upload/v1708847679/1.svg"  alt="" className="rounded-3xl w-20 h-20" />
                <div className="ml-5">
                <span className="block text-2xl font-semibold text-gray-500">4 Horas</span>
                <span><span className="font-medium text-gray-600 text-xl align-top">$&thinsp;</span><span className="text-3xl font-bold text-gray-600">1,198 </span></span><span className="text-gray-600 font-medium">/ hora</span>
                </div>
            </div>
                <ul className="mb-7 font-medium text-gray-500">
                <p className="text-xl font-semibold mb-2 text-black">Ideal para:</p>
                <li className="flex text-lg mb-1">
                <img src="https://res.cloudinary.com/dn5cltdre/image/upload/v1708839871/check-grey.svg" />
                <span className="text-black">Correcciones puntuales.</span>
                </li>
                <li className="flex text-lg mb-1">
                <img src="https://res.cloudinary.com/dn5cltdre/image/upload/v1708839871/check-grey.svg" />
                <span className="text-black">Personalizaciones básicas.</span>
                </li>
                <li className="flex text-lg mb-1">
                <img src="https://res.cloudinary.com/dn5cltdre/image/upload/v1708839871/check-grey.svg" />
                <span className="text-black">Solución de errores.</span>
                </li>
                <p className="text-xl font-semibold mb-2 text-black">Ejemplos:</p>

                <li className="flex text-lg mb-1">
                <img src="https://res.cloudinary.com/dn5cltdre/image/upload/v1708839871/check-grey.svg" />
                <span className="text-black">Corregir errores visuales.</span>
                </li>
                <li className="flex text-lg mb-1">
                <img src="https://res.cloudinary.com/dn5cltdre/image/upload/v1708839871/check-grey.svg" />
                <span className="text-black">Añadir nuevos campos.</span>
                </li>
                <li className="flex text-lg">
                <img src="https://res.cloudinary.com/dn5cltdre/image/upload/v1708839871/check-grey.svg" />
                <span className="text-black">Personalizar la interfaz.</span>
                </li>
                <div className="ml-5">
                <span className="block text-2xl font-semibold text-gray-500 mt-4">Total</span>
                <span><span className="font-medium text-gray-600 text-xl align-top">$&thinsp;</span><span className="text-3xl font-bold text-gray-600">4,792 MXN</span></span>
                </div>

            </ul>
            <button href="#/" className="flex justify-center items-center bg-black rounded-xl py-5 px-4 text-center text-white text-xl" onClick={() => handlePay('4 Horas', 555800, 'https://res.cloudinary.com/dn5cltdre/image/upload/v1708847679/1.svg')}>
                Comprar Paquete
                <GoArrowRight className='text-black' style={{ fill: 'white' }} />

            </button>
            </div>
            
            <div className="w-full flex-1 p-8 order-2 shadow-xl rounded-3xl bg-gray-700 text-gray-400 sm:w-96 lg:w-full lg:order-2 lg:mt-0">
            <div className="mb-8 pb-8 flex items-center border-b border-gray-600">
                <img src="https://res.cloudinary.com/dn5cltdre/image/upload/v1708847679/2.svg"  alt="" className="rounded-3xl w-20 h-20" />
                <div className="ml-5">
                <span className="block text-3xl font-semibold text-white ">40 Horas</span>
                <span><span className="font-medium text-xl align-top">$&thinsp;</span><span className="text-3xl font-bold text-white">996  </span></span><span className="font-medium">/ hora</span>
                </div>
            </div>
            <ul className="mb-10 font-medium text-xl">
            <p className="text-xl font-semibold mb-2 text-white">Ideal para:</p>

                <li className="flex mb-1">
                <img src="https://res.cloudinary.com/dn5cltdre/image/upload/v1708839581/arrow-white.svg.svg" />
                <span className="text-white">Modificaciones avanzadas.</span>
                </li>
                <li className="flex mb-1">
                <img src="https://res.cloudinary.com/dn5cltdre/image/upload/v1708839581/arrow-white.svg.svg" />
                <span className="text-white">Módulos personalizados.</span>
                </li>
                <li className="flex mb-1">
                <img src="https://res.cloudinary.com/dn5cltdre/image/upload/v1708839581/arrow-white.svg.svg" />
                <span className="text-white">Reportes a medida.</span>
                </li>
                <p className="text-xl font-semibold mb-2 text-white">Ejemplos:</p>

                <li className="flex mb-1">
                <img src="https://res.cloudinary.com/dn5cltdre/image/upload/v1708839581/arrow-white.svg.svg" />
                <span className="text-white">Implementar nuevas funcionalidades.</span>
                </li>
                <li className="flex mb-1">
                <img src="https://res.cloudinary.com/dn5cltdre/image/upload/v1708839581/arrow-white.svg.svg" />
                <span className="text-white">Desarrollar un módulo específico.</span>
                </li>
                <li className="flex mb-1">
                <img src="https://res.cloudinary.com/dn5cltdre/image/upload/v1708839581/arrow-white.svg.svg" />
                <span className="text-white">Crear reportes para análisis.</span>
                </li>
                <div className="ml-5">
                <span className="block text-2xl font-semibold text-gray-100  mt-4">Total</span>
                <span><span className="font-medium text-gray-100 text-xl align-top">$&thinsp;</span><span className="text-3xl font-bold text-gray-100">39,840 MXN</span></span>
                </div>
            </ul>
            <button href="#/" className="flex justify-center items-center bg-white rounded-xl py-6 px-4 text-center text-black text-2xl" onClick={() => handlePay('40 Horas', 4621400, 'https://res.cloudinary.com/dn5cltdre/image/upload/v1708847679/1.svg')}>
            Comprar Paquete
            <GoArrowRight className='text-black' style={{ fill: 'black' }} />

            </button>
            </div>
            
            <div className="w-full flex-1 mt-8 p-8 order-3 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-3 lg:rounded-l-none">
            <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
                <img src="https://res.cloudinary.com/dn5cltdre/image/upload/v1708847679/2.svg"  alt="" className="rounded-3xl w-20 h-20" />
                <div className="ml-5">
                <span className="block text-2xl font-semibold text-gray-500">200 Horas</span>
                <span><span className="font-medium text-gray-600 text-xl align-top">$&thinsp;</span><span className="text-3xl font-bold text-gray-600">608 </span></span><span className="text-gray-600 font-medium">/ hora</span>
                </div>
            </div>
            <ul className="mb-7 font-medium text-gray-500">
            <p className="text-xl font-semibold mb-2 text-black">Ideal para:</p>

                <li className="flex text-lg mb-1">
                <img src="https://res.cloudinary.com/dn5cltdre/image/upload/v1708839871/check-grey.svg" />
                <span className="text-black">Integraciones avanzadas.</span>
                </li>
                <li className="flex text-lg mb-1">
                <img src="https://res.cloudinary.com/dn5cltdre/image/upload/v1708839871/check-grey.svg" />
                <span className="text-black">Conexiones PLC.</span>
                </li>
                <li className="flex text-lg mb-1">
                <img src="https://res.cloudinary.com/dn5cltdre/image/upload/v1708839871/check-grey.svg" />
                <span className="text-black">Integraciones API.</span>
                </li>
                <p className="text-xl font-semibold mb-2 text-black">Ejemplos:</p>

                <li className="flex text-lg mb-1">
                <img src="https://res.cloudinary.com/dn5cltdre/image/upload/v1708839871/check-grey.svg" />
                <span className="text-black">Conectar con Salesforce.</span>
                </li>
                <li className="flex text-lg mb-1">
                <img src="https://res.cloudinary.com/dn5cltdre/image/upload/v1708839871/check-grey.svg" />
                <span className="text-black">Control de producción.</span>
                </li>
                <li className="flex text-lg mb-1">
                <img src="https://res.cloudinary.com/dn5cltdre/image/upload/v1708839871/check-grey.svg" />
                <span className="text-black">Integrar sistemas externos.</span>
                </li>
                <div className="ml-5">
                <span className="block text-2xl font-semibold text-gray-500  mt-4">Total</span>
                <span><span className="font-medium text-gray-600 text-xl align-top">$&thinsp;</span><span className="text-3xl font-bold text-gray-600">121,600 MXN</span></span>
                </div>
               
            </ul>
            <button href="#/" className="flex justify-center items-center bg-black rounded-xl py-5 px-4 text-center text-white text-xl" onClick={() => handlePay('200 Horas', 14105600, 'https://res.cloudinary.com/dn5cltdre/image/upload/v1708847679/1.svg')}>
            Comprar Paquete
            <GoArrowRight className='text-black' style={{ fill: 'white' }} />
            </button>
            </div>
            
            
        </div>
        <p className="text-xl text-gray-100 align-center mt-10 justify-center text-center ">*Los precios mostrados no incluyen IVA.</p>
        
        </main>

    </>
  );
};

export default NavbarComponent;
