const modelYIncentives = {
    id: "model-y-incentives",
    content: <div>
        <h2>$7,500 Federal Tax Credit</h2>
        <p>Only for eligible cash or financing purchases</p>
        <p>Eligible customers who take delivery of a qualified new Tesla and meet all federal requirements are eligible to receive $7,500 off the purchase price. Applied at time of delivery. Customers can purchase up to two vehicles per year with the tax credit applied directly to the purchase price.</p>
        <p className="modal-section-title">Adjusted Gross Income Limitations</p>
        <ul className="modal-list">
            <li>$300,000 for married couples filing jointly</li>
            <li>$225,000 for heads of households</li>
            <li>$150,000 for all other filers</li>
        </ul>
        <p className="modal-section-title">Price Caps</p>
        <p>The vehicle MSRP at time of delivery must not exceed the following caps. This price includes optional equipment physically attached to the vehicle at the time of delivery and excludes software features, accessories, taxes and fees.</p>
        <ul className="modal-list">
            <li>Model 3 Performance: $55,000</li>
            <li>2024 Model Y Rear-Wheel Drive: $80,000</li>
            <li>Model Y Long Range: $80,000</li>
            <li>Model Y Performance: $80,000</li>
            <li>Model X Dual Motor: $80,000</li>
        </ul>
        <p><a href="https://www.tesla.com/support/incentives#new-vehicles" target="_blank" rel="noreferrer">Learn More</a></p>
        <p>Your eligibility for any tax credits depends on your personal tax situation. We recommend speaking with a tax professional for guidance.</p>
    </div>
};

const freeSuperCharging = {
    id: "free-supercharging",
    content: <div>
        <h2>5,000 Free Supercharging Miles</h2>
        <p>Customers who take delivery of a new Model S, Model X or Model Y by March 31, 2024, are eligible for 5,000 miles of free Supercharging on their new vehicle. Only available for cash or finance purchases. </p>
        <p>Supercharging miles will expire two years after the date of delivery. Tesla does not guarantee availability or delivery by March 31, 2024, and will not grant exceptions. Free Supercharging is tied to your Tesla Account and cannot be transferred to another order, vehicle, or person even in the case of an ownership transfer. Cybertruck, used vehicles and business orders are not eligible for this Supercharging promotion. Promotion is subject to change and can be combined with other promotions. Supercharging miles may be rescinded if the trade-in transaction cannot be completed. Promotion terms apply.</p>
    </div>
};

export const modalContent = [ modelYIncentives, freeSuperCharging ];