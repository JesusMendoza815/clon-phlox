export default function PaymentGateway() {
    return (
        <form className="flex flex-col justify-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h6 className="font-bold mb-4">Metodos de pago</h6>
            <div className="flex gap-x-3">
                <input id="payment-method" name="payment-method" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                <img className="h-8 w-8" src="https://www.flaticon.com/free-icon/credit-card_3037255?term=credit+cards&related_id=3037255" alt="" />
            </div>

            <h6 className="font-bold mt-4 mb-4">Datos de pago</h6>
            <div className="relative z-0 mb-6 group">
                <input type="text" name="card_name" id="card_name" className="block py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Nombre en la tarjeta" required />
                <input type="text" name="card_number" id="card_number" className="block py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Numero de la tarjeta" required />
            </div>
            <div className="grid md:grid-cols-6 md:gap-6">
                <div className="relative z-0 mb-6 group">
                    <input type="date" name="card_date" id="card_date" className="block py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                </div>
                <div className="relative z-0 mb-6 group">
                    <input type="text" name="cvv" id="cvv" className="block py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="CVV" required />
                </div>
            </div>

            <div className="grid md:grid-cols-6 md:gap-6">
                <div className="relative z-0 mb-6 group">
                    <button type="submit" className="text-white bg-gray-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cancelar</button>
                </div>
                <div className="relative z-0 mb-6 group">
                    <button type="submit" className="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Pagar</button>
                </div>
            </div>

        </form >
    )
}