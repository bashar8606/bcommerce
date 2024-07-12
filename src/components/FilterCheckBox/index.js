import { Checkbox } from "../ui/checkbox";
export default function FilterCheckBox() {
    return (
        <div className="border-b  pt-3">
            <h2 className="text-sm font-semibold mb-4">Categories</h2>
            <div className="flex items-center space-x-2 mb-4">
                <Checkbox id="terms" />
                <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Embroidery Abayas <span className="text-black opacity-50">(64)</span></label>
            </div>
            <div className="flex items-center space-x-2 mb-4">
                <Checkbox id="terms" />
                <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Embroidery Abayas <span className="text-black opacity-50">(64)</span></label>
            </div>
            <div className="flex items-center space-x-2 mb-4">
                <Checkbox id="terms" />
                <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Embroidery Abayas <span className="text-black opacity-50">(64)</span></label>
            </div>
        </div>
    )
}