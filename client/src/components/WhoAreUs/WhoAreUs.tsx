export const WhoAreUs = () => {
    return(
        <div className="flex flex-wrap lg:flex-nowrap lg:p-20 items-center justify-center w-[100%] bg-gradient-to-b from-[#1A3670] to-[#4054B0]">
            <div className="p-10">
                <h1 className="text-white text-4xl pb-5 font-bold">¿Quienes somos?</h1>
                <p className="text-white text-1xl p-5">
                    En BI/MAX, nos enorgullecemos de ser líderes en el mercado inmobiliario, ofreciendo servicios excepcionales a nuestros clientes desde 2024. Con una pasión por la excelencia y un compromiso inquebrantable con la satisfacción del cliente, nos esforzamos por superar las expectativas en cada transacción.
                </p>
            </div>
            <img className="max-w-[50%]" src='assets/images/WhoAreUs.png' alt='example img'/>
        </div>
    )
}
