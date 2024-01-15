import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";
const SpecialOffer = () => {
    return (
        <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-contianer">
            <div className="flex-1">
                <img src={offer} width={773} height={687} className="object-contian w-full" />
            </div>
            <div className="flex flex-1 flex-col">
                <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
                    <span className="text-coral-red">Special</span> shoes
                </h2>
                <p className="mt-4 lg:max-w-lg info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quisquam quibusdam perspiciatis nemo quia? Quos molestias nesciunt sunt at id sit, numquam ipsa est reprehenderit iusto doloribus eaque aperiam repellat!</p>
                <p className="mt-6 lg:max-w-lg info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quisquam quibusdam perspiciatis nemo quia? Quos molestias nesciunt sunt at id sit</p>
                <div className="mt-11 flex flex-wrap gap-4">
                    <Button label="View details" ic onURL={arrowRight} />
                    <Button label="Learn more" backgroundcolor="bg-white" bordercolor="border-slate-grey" textcolor="text-slate-grey" />
                </div>
            </div>
        </section>
    )
}

export default SpecialOffer
