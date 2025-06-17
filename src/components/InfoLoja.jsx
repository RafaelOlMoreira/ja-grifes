import React from 'react'

function InfoLoja() {
    return (
        <div className="w-full h-32 bg-gray-900 text-white flex justify-center">
            <div className="grid grid-cols-4 gap-10 items-center h-32 max-w-screen-xl px-8">

                <div className="flex items-center space-x-4">
                    <svg className="w-14 h-14 text-gray-300" fill="currentColor" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                        <svg className='size-14' fill="#d1d1d1" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" stroke="#d1d1d1"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M2.84375 13C1.273438 13 0 14.277344 0 15.84375L0 42C0 43.566406 1.429688 45 3 45L7.09375 45C7.570313 47.835938 10.03125 50 13 50C15.96875 50 18.429688 47.835938 18.90625 45L28.15625 45C29.722656 45 31 43.722656 31 42.15625L31 15.90625C31 14.304688 29.738281 13 28.1875 13 Z M 33 20L33 45C33.480469 47.832031 36.03125 50 39 50C41.96875 50 44.429688 47.832031 44.90625 45L47 45C48.570313 45 50 43.570313 50 42L50 32.375C50 30.363281 48.550781 28.308594 48.375 28.0625L44.21875 22.5C43.265625 21.351563 41.769531 20 40 20 Z M 38 25L43.59375 25L46.78125 29.25C47.121094 29.730469 48 31.203125 48 32.375L48 33L38 33C37 33 36 32 36 31L36 27C36 25.894531 37 25 38 25 Z M 13 40C15.207031 40 17 41.792969 17 44C17 46.207031 15.207031 48 13 48C10.792969 48 9 46.207031 9 44C9 41.792969 10.792969 40 13 40 Z M 39 40C41.207031 40 43 41.792969 43 44C43 46.207031 41.207031 48 39 48C36.792969 48 35 46.207031 35 44C35 41.792969 36.792969 40 39 40Z"></path></g></svg>
                    </svg>
                    <div>
                        <h6 className="text-lg font-bold font-poppins">ENVIO EM TODO BRASIL</h6>
                        <p className="text-sm text-gray-300">Corre e aproveite!</p>
                    </div>
                </div>

                <div className="flex items-center space-x-4">
                    <svg className="w-14 h-14 text-gray-300" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <svg className='size-14' viewBox="0 0 16 16" fill="#d1d1d1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16L4.35009 13.3929C2.24773 11.8912 1 9.46667 1 6.88306V3L8 0L15 3V6.88306C15 9.46667 13.7523 11.8912 11.6499 13.3929L8 16ZM12.2071 5.70711L10.7929 4.29289L7 8.08579L5.20711 6.29289L3.79289 7.70711L7 10.9142L12.2071 5.70711Z" fill="#d1d1d1"></path> </g></svg>
                    </svg>
                    <div>
                        <h6 className="text-lg font-bold font-poppins">COMPRA SEGURA</h6>
                        <p className="text-sm text-gray-300">Processo Seguro e Antifraude.</p>
                    </div>
                </div>

                <div className="flex items-center space-x-4">
                    <svg className="w-14 h-14 text-gray-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <svg className="size-14 text-[#d2d2d2]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z" clip-rule="evenodd" />
                        </svg>
                    </svg>
                    <div>
                        <h6 className="text-lg font-bold font-poppins">GARANTIA DE QUALIDADE</h6>
                        <p className="text-sm text-gray-300">Nosso Compromisso!</p>
                    </div>
                </div>

                <div className="flex items-center space-x-4">
                    <svg className="w-14 h-14 text-gray-300" fill="currentColor" viewBox="0 0 414.594 414.594" xmlns="http://www.w3.org/2000/svg">
                        <svg className='size-14' fill="#d2d2d2" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 414.594 414.594" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M357.594,298.009l-84.891-33.848l-19.881-16.748c-5.25-4.438-13.004-4.11-17.873,0.73l-27.64,27.481l-27.717-27.492 c-4.874-4.832-12.618-5.146-17.864-0.722l-19.879,16.748l-84.895,33.854C29.622,308.9,29.644,405.708,27.297,414.594h360 C384.955,405.73,384.941,308.885,357.594,298.009z"></path> <path d="M314.002,87.668C308.106,38.434,262.505,0,207.297,0s-100.81,38.434-106.705,87.668 c-4.898,3.137-8.153,8.613-8.153,14.859v39.996c0,9.743,7.899,17.646,17.646,17.646l15.942-0.04 c9.848,51.453,44.795,80.728,81.27,80.728c36.475,0,57.666-17.339,71.719-49.293c-10.729,8.416-26.324,16.114-48.134,17.704 c-2.004,2.985-5.411,4.951-9.276,4.951h-10.189c-6.167,0-11.167-4.999-11.167-11.167s5-11.167,11.167-11.167h10.189 c3.611,0,6.813,1.723,8.854,4.383c35.067-2.815,51.558-24.083,58.134-36.091l15.916-0.006c9.746,0,17.646-7.903,17.646-17.646 v-39.996C322.154,96.281,318.899,90.805,314.002,87.668z M287.961,89.47c-10.407-32.854-40.473-52.385-80.664-52.385 c-40.192,0-70.276,19.519-80.694,52.357c-1.612-1.456-3.49-2.616-5.559-3.401C127.705,48.656,163.845,20,207.297,20 s79.591,28.656,86.253,66.041C291.468,86.832,289.58,88,287.961,89.47z"></path> </g> </g> </g> </g></svg>
                    </svg>
                    <div>
                        <h6 className="text-lg font-bold font-poppins">SUPORTE ESPECIALIZADO</h6>
                        <p className="text-sm text-gray-300">Sempre com você.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default InfoLoja
