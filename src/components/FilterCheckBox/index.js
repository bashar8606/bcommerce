import { Checkbox } from "../ui/checkbox";

export default function FilterCheckBox() {
    return (
        <div className="border-b  py-3">
            <h2 className="text-sm font-semibold">Brand</h2>

            <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Accept terms and conditions
                </label>
            </div>
        </div>
    )
}