
import BudgetCard from "@/components/BudgetCard";

export default function BudgetWidget({ data }) {
    return (
        <section className={`py-10  `}>
            <div className="container">
                <div className="grid grid-cols-2 mb-4">
                    <div>
                        <h2 className="text-xl font-semibold">Value deals</h2>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4">
                   
                    <div className=""><BudgetCard  /></div>
                    <div className=""><BudgetCard  /></div>
                    <div className=""><BudgetCard  /></div>
                    <div className=""><BudgetCard  /></div>
                    <div className=""><BudgetCard  /></div>
                    
                </div>
            </div>
        </section>
    );
}
