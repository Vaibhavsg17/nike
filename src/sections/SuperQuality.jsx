import { shoe8 } from "../assets/images"
import Button from "../components/Button"
const SuperQuality = () => {
    return (
        <section id="about-us" className="flex justify-betweeen items-center max-lg:flex-col gap-10 w-full max-contianer">
            <div className="flex flex-1 flex-col">
                <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
                    We Provide You <span className="text-coral-red">Super</span> <span className="text-coral-red">Quality</span> shoes
                </h2>
                <p className="mt-4 lg:max-w-lg info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quisquam quibusdam perspiciatis nemo quia? Quos molestias nesciunt sunt at id sit, numquam ipsa est reprehenderit iusto doloribus eaque aperiam repellat!</p>
                <p className="mt-6 lg:max-w-lg info-text">Discover stylish Nike arrival, qaulity comfort, and innovation for your active life.</p>
                <div className="mt-11">
                    {/* <Button label="View details" /> */}
                </div>
            </div>
            <div className="flex-1 flex justify-center items-center">
                <img src={shoe8} alt="shoe8" width={570} height={522} />
            </div>
        </section>
    )
}

export default SuperQuality
