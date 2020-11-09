



// const contentTarget = document.querySelector(".entry")
// const eventHub = document.querySelector("#state-fair")

// eventHub.addEventListener("click", clickEvent => {
// if(clickEvent.target.id === "attraction") {

//     // const selectedRide = clickEvent.target.value 

//     const rideEvent = new CustomEvent("rideTicketPurchased", {

//     detail: {
//         click: clickEvent.target.id
//     }
    
    
// })
// eventHub.dispatchEvent(rideEvent)

// }
// // console.log("custom event", eventHub)
// })


// export const TicketBooth = () => {
//     contentTarget.innerHTML = `
//         <div class="ticketBooth">
//         <button id="rideTicket">Ride Ticket</button>
//         </div>
//     `
// }

const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")
eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "rideTicket") {
        const rideEvent = new CustomEvent("rideTicketPurchased", {
            detail: {
                clickButton: clickEvent.target.id
            }
        });
        eventHub.dispatchEvent(rideEvent)
        // console.log("button was clicked")
    }
})
export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="rideBooth">
            <button id="rideTicket">Ride Ticket</button>
        </div>
    `
 }



