import Counter from "../Counter";
import Image from "../Image/image";

export default function CartItem({ data }) {
    return (
        <div className="p-4 rounded border border-neutral-200">
            <div className="grid grid-cols-12 gap-4">
                <div className="grid-flow-col auto-cols-auto">
                    <div className="aspect-[490/625] w-[90px]  relative">
                        <Image
                            src={"/images/b1.png"}
                            fill
                            className="object-cover"
                            alt="logo"
                        />
                    </div>
                </div>
                <div className="grid-flow-col ">
                    sdfsdf
                    <Counter />
                </div>
                <div className="col-span-3">
                    <button onClick={() => removeItem(item.id)}>Remove</button>
                </div>
            </div>
        </div>
    )
}